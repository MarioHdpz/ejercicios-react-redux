/**
 * Redux actions
 */

import { ADD_TASK_TO_WHITE_LIST } from './action-types';

export const addToWhiteList = task => ({
    type: ADD_TASK_TO_WHITE_LIST,
    task: task,
});