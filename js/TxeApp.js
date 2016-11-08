/**
 * 主页入口
 * @flow
 */
import React from 'react';
import { AppState, View, Text, StatusBar } from 'react-native';
import TxeNavigator  from './TxeNavigator';
import StyleSheet from 'StyleSheet';

const {
    Component,
    PropTypes,
} = React;


class TxeApp extends Component {
    //初始化登录态等Action
    componentDidMount() {
        //监听当前app状态  active为前台
        AppState.addEventListener('change', this._handleAppStateChange);

    }

    componentDidUnMount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }


    render(){
        // if(!this.props.userInfo.isLoggedIn){
        //
        // }
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 1)"
                    barStyle="light-content"
                />
                <TxeNavigator />
            </View>
        );
    }

    _handleAppStateChange(appState) {
      if (appState === 'active') {
          //此处当app重回前台时请求数据更新
      }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export { TxeApp };
