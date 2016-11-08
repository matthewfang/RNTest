/**
 * 全局Store配置文件
 *@flow
 */
'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers  from '../reducers';
import createLogger  from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

//设置是否为debug模式
var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

//注入中间件
const createTXEStore = applyMiddleware(thunk, logger)(createStore);

function configureStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
    const store = autoRehydrate()(createTXEStore)(reducers);
    global.log(store);
  //配置store持久化  由AS完成持久化
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export { configureStore };




