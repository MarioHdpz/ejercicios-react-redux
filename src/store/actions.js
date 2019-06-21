/**
 * Redux actions
 */

import { ADD_TASK_TO_WHITE_LIST } from './action-types';

const generateId = () => {
    const date = new Date();
    return date.getTime();
}

export const addToWhiteList = content => ({
    type: ADD_TASK_TO_WHITE_LIST,
    payload: {
        content,
        id: generateId(),
    },
});