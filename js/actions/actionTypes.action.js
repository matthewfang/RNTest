/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */

'use strict';
import type {
    NavigationRoute,
    NavigationState
} from 'NavigationTypeDefinition';

export type Action =
        { type: 'NAVIGATOR_PUSH', sceneName: string, route: NavigationRoute, extraData: Object}
        | { type: 'NAVIGATOR_POP', extraData: Object }
        | { type: 'NAVIGATOR_SELECT_SCENE', selectSceneName: string, extraData: Object}
        // | { type: 'NAVIGATOR_JUMP_TO_INDEX', index: number }
        // | { type: 'NAVIGATOR_JUMP', sceneName: string }
        // | { type: 'NAVIGATOR_BACK' }
        // | { type: 'NAVIGATOR_FORWARD' }
        // | { type: 'NAVIGATOR_REPLACE_AT', sceneName: string, route: NavigationRoute}
        // | { type: 'NAVIGATOR_REPLACE_AT_INDEX', sceneName: string, route: NavigationRoute }
        // | { type: 'NAVIGATOR_RESET',  routes: Array<NavigationRoute>, index?: number}

        | { type: 'APPLY_TOPICS_FILTER', topics: {[key: string]: boolean} }
        | { type: 'CLEAR_FILTER' }
        | { type: 'SWITCH_DAY', day: 1 | 2 }
        | { type: 'SWITCH_TAB', tab: 'schedule' | 'my-schedule' | 'map' | 'notifications' | 'info' }
        | { type: 'TURNED_ON_PUSH_NOTIFICATIONS' }
        | { type: 'REGISTERED_PUSH_NOTIFICATIONS' }
        | { type: 'SKIPPED_PUSH_NOTIFICATIONS' }
        | { type: 'RECEIVED_PUSH_NOTIFICATION', notification: Object }
        | { type: 'SEEN_ALL_NOTIFICATIONS' }
        | { type: 'RESET_NUXES' }
    ;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
class ActionTypes {
    //导航站Action定义
    static NAVIGATOR_PUSH = 'NAVIGATOR_PUSH';
    static NAVIGATOR_POP = 'NAVIGATOR_POP';
    static NAVIGATOR_SELECT_SCENE = 'NAVIGATOR_SELECT_SCENE';
    // static NAVIGATOR_JUMP_TO_INDEX = 'NAVIGATOR_PUSH';
    /**
     * Sets the focused route of the navigation state by key.
     */
    // static NAVIGATOR_JUMP = 'NAVIGATOR_JUMP';
    /**
     * Sets the focused route to the previous route.
     */
    // static NAVIGATOR_BACK = 'NAVIGATOR_BACK';
    /**
     * Sets the focused route to the next route.
     */
    // static NAVIGATOR_FORWARD = 'NAVIGATOR_FORWARD';
    /**
     * Replace a route by a key.
     * Note that this moves the index to the positon to where the new route in the
     * stack is at.
     */
    // static NAVIGATOR_REPLACE_AT = 'NAVIGATOR_REPLACE_AT';
    /**
     * Replace a route by a index.
     * Note that this moves the index to the positon to where the new route in the
     * stack is at.
     */
    // static NAVIGATOR_REPLACE_AT_INDEX = 'NAVIGATOR_REPLACE_AT_INDEX';
    /**
     * Resets all routes.
     * Note that this moves the index to the positon to where the last route in the
     * stack is at if the param `index` isn't provided.
     */
    // static NAVIGATOR_RESET = 'NAVIGATOR_RESET';

}
export { ActionTypes };
