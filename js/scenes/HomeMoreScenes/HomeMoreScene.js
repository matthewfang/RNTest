/**
 * Created by MatthewFang-pc on 2016/10/17.
 */
import React, {Component} from 'react';
import {
    ListView,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class HomeMoreScene extends Component {
    constructor(props: Object, context: any) {
        super(props, context);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 6', 'row 7', 'row 8', 'row 9']),
        };
        this._renderItem = this._renderItem.bind(this);
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this._renderItem(rowData)}
            />
        );
    }

    _renderItem(rowData) {
        return (
            <View
                style={styles.item}
            >
                <Image
                    style={styles.img}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <View
                    style={styles.textContainer}
                >
                    <Text style={styles.title}>
                        检察官外传
                    </Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    item: {
        height: 150,
        alignItems: 'stretch',
        flexDirection: 'row',
        padding: 10
    },
    img: {
        width: 100,
        alignItems: 'stretch',
        marginRight: 8,
    },
    title: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'flex-start',
        fontWeight: '600',
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch',

    },
    tabSelected: {
        color: 'blue',
    },
});

export default HomeMoreScene;