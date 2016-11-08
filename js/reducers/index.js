/**
 *  reduces合并导出入口
 * @flow
 */
'use strict';

import { combineReducers } from 'redux';
import navigation from './navigation.reducer';

export default combineReducers({
    navigation,
});
