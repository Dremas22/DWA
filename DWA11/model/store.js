import { reducer } from './reducer.js';

/**
 * @param {object} tallyCount
 * 
 */

export const tallyCount = {
    max: 10,
    min: 6
}

/**
 * @typedef {object} State
 */
export const State = {};

/**
 * @type {Array<State}
 * @return {State}
 */
const states = []
export const getState = () => {
    return {
        ...states[0]
    }
    
}

/**
 * @callback dispatch
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action);
    states.push(next)
    // console.log(action)
}