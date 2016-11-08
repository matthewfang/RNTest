/**
* author MatthewFang-pc
* date   2016/10/15
* description 处理Navigator的Action 并返回相应state
 * @flow
*/
import { ActionTypes, Action } from '../actions/actionTypes.action';
import { NavigationExperimental } from 'react-native';
import type {
    NavigationRoute,
    NavigationState
} from 'NavigationTypeDefinition';

const {StateUtils: NavigationStateUtils} = NavigationExperimental;
//初始化scenes
const initialState = {
    scenesRoute: {
        index: 0,
        routes: [
            {key: 'apple'},
            {key: 'banana'},
            {key: 'orange'},
        ],
    },
    // Scenes for the `apple` tab.
    apple: {
        index: 0,
        routes: [
            {
                key: 'Apple Home'
            }
        ],
    },
    // Scenes for the `banana` tab.
    banana: {
        index: 0,
        routes: [
            {
                key: 'Banana Home'
            }
        ],
    },
    // Scenes for the `orange` tab.
    orange: {
        index: 0,
        routes: [
            {
                key: 'Orange Home'
            }
        ],
    },
};

function navigation (state = initialState, action: Action) {

    //获取state中scenes路由
    const {scenesRoute} = state;
    //获取当前sceneName
    const sceneName = scenesRoute.routes[scenesRoute.index].key;
    //获取当前scenes下index等属性
    const currentScenes = state[sceneName];

    switch (action.type) {
        // Push a route into the scenes stack.
        case ActionTypes.NAVIGATOR_PUSH:{
            const route = typeof (action.sceneName) == 'string' ? {key: action.sceneName, title: action.sceneName} : action.sceneName;
            //获取nextScenes
            const nextScenes = NavigationStateUtils.push(currentScenes, route);

            //scenes不同才会push
            if (currentScenes !== nextScenes) {
                return {
                    ...state,
                    [sceneName]: nextScenes,
                };
            }
        }

        // Pops a route from the scenes stack.
        case ActionTypes.NAVIGATOR_POP:{
            const nextScenes = NavigationStateUtils.pop(currentScenes);
            if (currentScenes !== nextScenes) {
                return {
                    ...state,
                    [sceneName]: nextScenes,
                    extraData: action.extraData
                };
            }
        }
        // Switches the Scene.
        case ActionTypes.NAVIGATOR_SELECT_SCENE:{
            const selectSceneName: string = action.selectSceneName;
            const nextScenes = NavigationStateUtils.jumpTo(state.scenesRoute, selectSceneName);
            if (currentScenes !== nextScenes) {
                return {
                    ...state,
                    nextScenes,
                    extraData: action.extraData
                };
            }
        }

        // case ActionTypes.NAVIGATOR_FORWARD:
        //     const nextScenes = NavigationStateUtils.forward(state);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        //
        // case ActionTypes.NAVIGATOR_BACK:
        //     const nextScenes =  NavigationStateUtils.back(state);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        // case ActionTypes.NAVIGATOR_JUMP_TO_INDEX:
        //     const nextScenes =  NavigationStateUtils.jumpToIndex(state, action.index);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        // case ActionTypes.NAVIGATOR_JUMP:
        //     const nextScenes = NavigationStateUtils.jumpTo(state.scenesRoute, sceneName);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        //
        // case ActionTypes.NAVIGATOR_RESET:
        //     const nextScenes =  NavigationStateUtils.reset(state, action.routes, action.index);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        //
        // case ActionTypes.NAVIGATOR_REPLACE_AT:
        //     const nextScenes =  NavigationStateUtils.replaceAt(state, action.route.key, action.route);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;
        //
        // case ActionTypes.NAVIGATOR_REPLACE_AT_INDEX:
        //     const nextScenes =  NavigationStateUtils.replaceAtIndex(state, action.index, action.route);
        //     if (currentScenes !== nextScenes) {
        //         return {
        //             ...state,
        //             [sceneName]: nextScenes,
        //             extraData: action.extraData
        //         };
        //     }
        //     break;

        default:
            return state;

    }
}


export default navigation;
