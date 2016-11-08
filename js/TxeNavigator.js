/**
 * 导航栈
 * author MatthewFang
 * date   2016/10/14
 * description 管理scenes的跳转
 * @flow
 */
import React from "react";
import ReactNative from "react-native";
import {connect, store} from "react-redux";
import BackAndroid from "BackAndroid";
import Actions from "./actions";
import NavigationExampleRow from "./common/NavigationExampleRow";
import {bindActionCreators} from "redux";
import HomeMoreScene from './scenes/HomeMoreScenes/HomeMoreScene';
const {
    Component,
    PropTypes,
} = React;


const {
    NavigationExperimental,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} = ReactNative;

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes,
} = NavigationExperimental;


class TxeNavigator extends Component {
    //定义type类型
    static propTypes = {
        navigationState: PropTypes.shape({
            currentScene: NavigationPropTypes.navigationState.isRequired,
            sceneName: PropTypes.string,
            scenesRoute: NavigationPropTypes.navigationState.isRequired,
        }),
    };
    _handlers = {};
    // This sets up the methods for navigation. context为父控件指定传递的属性
    constructor(props: any, context: any) {
        super(props, context);
        this._handleBackButton = this._handleBackButton.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

    //指定传给子组件的属性(注:不指定会报错)
    static childContextTypes = {
        addBackButtonListener: React.PropTypes.func,
        removeBackButtonListener: React.PropTypes.func,
    };

    //传给子组件属性
    getChildContext() {
        return {
            addBackButtonListener: this.addBackButtonListener,
            removeBackButtonListener: this.removeBackButtonListener
        }
    }

    componentDidMount() {
        //组件挂载时 监听物理返回键
        BackAndroid.addEventListener(
            'hardwareBackPress',
            this._handleBackButton
        );
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener(
            'hardwareBackPress',
            this._handleBackButton
        );
    }


    // use the `NavigationCardStack` to render the scenes.
    render() {
        const {sceneName, currentScene} = this.props.navigationState;
        return (
            <View style={styles.navigator}>
                <NavigationCardStack
                    key={'stack_' + sceneName}
                    onNavigateBack={()=>this.props.dispatch(popScene())}
                    navigationState={currentScene}
                    renderHeader={this._renderHeader}
                    renderScene={this._renderScene}
                    style={styles.navigatorCardStack}
                />
            </View>
        );
    }

    // Render the header.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    _renderHeader(sceneProps: Object): ReactElement {
        return (
            <YourHeader
                {...sceneProps}
            />
        );
    }

    // Render a scene for route.
    // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
    // as type `NavigationSceneRendererProps`.
    _renderScene(sceneProps: Object): ReactElement {
        return (
            <HomeMoreScene
                {...sceneProps}
                actions={this.props.actions}
            />
        );
    }

    //返回键
    _handleBackButton() {
        //子组件控制是否拦截返回键调用
        for (let i = this._handlers.length - 1; i >= 0; i--) {
            if (this._handlers[i]()) {
                return true;
            }
        }

        if (this.props.navigationState.currentScene.index == 0) {
            return false;
        }

        this.props.actions.popScene();

        return true;
    }

    addBackButtonListener(listener) {
        this._handlers.push(listener);
    }

    removeBackButtonListener(listener) {
        //过滤掉此listener
        this._handlers = this._handlers.filter((handler) => handler !== listener);
    }

}


const styles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    navigatorCardStack: {
        flex: 20,
    },
    tabs: {
        flex: 1,
        flexDirection: 'row',
    },
    tab: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
    tabText: {
        color: '#222',
        fontWeight: '500',
    },
    tabSelected: {
        color: 'blue',
    },
});

const getCurrentNavigation = (navigation) => {
    const scenesRoute = navigation.scenesRoute;
    const sceneName = scenesRoute.routes[scenesRoute.index].key;
    const currentScene = navigation[sceneName];
    return {
        sceneName,
        currentScene,
        scenesRoute,
    };
};

function mapStateToProps(store) {
    return {
        navigationState: getCurrentNavigation(store.navigation),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TxeNavigator);


class YourHeader extends Component {
    static propTypes = {
        ...NavigationPropTypes.SceneRendererProps,
    };

    constructor(props: Object, context: any) {
        super(props, context);
        this._back = this._back.bind(this);
        this._renderTitleComponent = this._renderTitleComponent.bind(this);
    }

    render(): ReactElement {
        return (
            <NavigationHeader
                {...this.props}
                renderTitleComponent={this._renderTitleComponent}
                onNavigateBack={this._back}
            />
        );
    }

    _back(): void {
        this.props.dispatch(popScene());
    }

    _renderTitleComponent(props: Object): ReactElement {
        return (
            <NavigationHeader.Title>
                {props.scene.route.key}
            </NavigationHeader.Title>
        );
    }
}

class YourScene extends Component {
    static propTypes = {
        ...NavigationPropTypes.SceneRendererProps,
    };

    constructor(props: Object, context: any) {
        super(props, context);
        console.log(props);
        this._exit = this._exit.bind(this);
        this._popRoute = this._popRoute.bind(this);
        this._pushRoute = this._pushRoute.bind(this);
    }

    render(): ReactElement {
        return (
            <ScrollView>
                <NavigationExampleRow
                    text="Push Route"
                    onPress={this._pushRoute}
                />
                <NavigationExampleRow
                    text="Pop Route"
                    onPress={this._popRoute}
                />
                <NavigationExampleRow
                    text="Exit Header + Scenes + Tabs Example"
                    onPress={this._exit}
                />
            </ScrollView>
        );
    }

    _pushRoute(): void {
        // Just push a route with a new unique key.
        const route = {key: '[' + this.props.scenes.length + ']-' + Date.now()};
        this.props.actions.pushScene(route);
    }

    _popRoute(): void {
        this.props.actions.popScene();
    }

    _exit(): void {
        this.props.actions.popScene();
    }

}