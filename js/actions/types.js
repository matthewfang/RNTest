/**

 *
 * @flow
 */

'use strict';


export type Action =
        { type: 'SKIPPED_LOGIN' }
        | { type: 'LOGGED_OUT' }
        | { type: 'SESSION_ADDED', id: string }
        | { type: 'SESSION_REMOVED', id: string }
        | { type: 'SET_SHARING', enabled: boolean }
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
