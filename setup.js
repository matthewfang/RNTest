/**
 *  入口配置文件
 *  @flow
 */
import { View, Text} from 'react-native';
import { TxeApp } from './TxeApp';
import React from 'React';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { Constants } from './Constants';
//import {serverURL} from './env';

function setup(): ReactClass<{}> {
    //init something
    class Root extends React.Component {
      //状态类型限制
      state: {
        isLoading: boolean;
        store: any
      };

      constructor() {
        super();
        //全局Store初始化
        this.state = {
          isLoading: true,
          store: configureStore(() => this.setState({isLoading: false})),
        };
      }

      render() {
        if (this.state.isLoading === true){
          //TODO  渲染loadingView
            return null;
        }

        return (
          <Provider store= {this.state.store}>
            <TxeApp />
          </Provider>
        );
      }

    }
    return Root;

}

//全局LOG函数注入
global.log = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

global.Constants = Constants;

export { setup };
