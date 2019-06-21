/** Define reducers to handle actions 
 * 
 *  States elements structure: 
 * 
 *  {
 *    content: 'Lorem ipsum asdiamoasd',
 *    id: 12345678,
 *  }
 * 
*/

import { ADD_TASK_TO_WHITE_LIST, ADD_TASK_TO_BLACK_LIST } from './action-types';

export const whiteList = (state=[], action) => {
    switch (action.type) {
        case ADD_TASK_TO_WHITE_LIST:
            return state.concat([action.payload])
        default:
            return state;
    }
}

export const blackList = (state=[], action) => {
    switch (action.type) {
        case ADD_TASK_TO_BLACK_LIST:
            return state.concat([action.payload])
        default:
            return state;
    }
}