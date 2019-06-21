/**
 * Redux actions
 */

import { ADD_TASK_TO_WHITE_LIST, ADD_TASK_TO_BLACK_LIST } from './action-types';

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

export const addToBlackList = content => ({
    type: ADD_TASK_TO_BLACK_LIST,
    payload: {
        content,
        id: generateId(),
    },
});