/**
 * author MatthewFang-pc
 * date   2016/10/15
 * description Scenes跳转页面定义
 * @flow
 */
'use strict';

import { ActionTypes } from './actionTypes.action';
import makeActionCreator from './actionCreator';
import type {
    NavigationRoute,
} from 'NavigationTypeDefinition';

//NavigationRoute key:string title:?string


export const pushScene = makeActionCreator(ActionTypes.NAVIGATOR_PUSH, 'sceneName', 'route','extraData');

export const  popScene =  makeActionCreator(ActionTypes.NAVIGATOR_POP, 'extraData');

export const selectScene = makeActionCreator(ActionTypes.NAVIGATOR_SELECT_SCENE, 'selectSceneName', 'extraData');


// export function push (sceneName: string, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_PUSH,
//         sceneName: sceneName,
//         extraData: extraData
//     };
// }
//
// export function pop (extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_POP,
//         extraData: extraData
//     };
// }
//
// export function selectScene (selectSceneName: string, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_POP,
//         selectSceneName: selectSceneName,
//         extraData: extraData
//     };
// }
//以下操作针对于已经存在于导航栈内的scens
// export function jumpToIndex(index: number, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_JUMP_TO_INDEX,
//         index: index,
//         extraData: extraData
//     };
// }
//
// export function jumpTo(sceneName: string, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_JUMP,
//         sceneName: sceneName,
//         extraData: extraData
//     };
// }
// export function back(extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_BACK,
//         extraData: extraData
//     };
// }
// export function forward(extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_FORWARD,
//         extraData: extraData
//     };
// }
// export function replaceAt(sceneName: string, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_FORWARD,
//         sceneName: sceneName,
//         extraData: extraData
//     };
// }
//
// export function replaceAtIndex(index: number, extraData: Object = {}) {
//     return {
//         type: ActionTypes.NAVIGATOR_FORWARD,
//         index: index,
//         extraData: extraData
//     };
// }
//
// export function reset(initialState: NavigationState, routes: Array<NavigationRoute>, index?: number) {
//     return {
//         type: ActionTypes.NAVIGATOR_RESET,
//         routes: routes,
//         index: index
//     };
// }
