/** Define reducers to handle actions */

import { ADD_TASK_TO_WHITE_LIST } from './action-types';

export const whiteList = (state=[], action) => {
    switch (action.type) {
        case ADD_TASK_TO_WHITE_LIST:
            return state.concat([action.payload])
        default:
            return state;
    }
}