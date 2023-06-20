import  {reducer} from './reducer.js'
/**
 * @typedef {object}
 * @prop {string} id
 * @prop {string} title
 */

export const Task = {}

/**
 * @typedef {object} Filters
 */

/**
 * @typedef {State}
 * @prop {'idle' | 'adding' } phase
 * @prop {record<string, Task>} tasks
 * @prop {Filter} filters
 */

export const State = {};

/**
 *@callback getState
 *@returns {state}
 */

 /**
  * @callback Dispatch
  * @param {action} action
  */

 /**
  * @callback EmptyFn
  */

 /**
  * @callback Subscription
  * @param {State} prev
  * @param {State} next
  */

 

/**
 * @type {Array<Subscribe>}
 */
const subscribers = [];

/**
 * @type {Array<State>}
 */
const states = [];

/**
 * @return {State}
 */
const getState = () => {
    return { ...states[0] };
}

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    const prev = getState();
    const next = reducer(prev, action)
    subscribers.forEach((item) => (prev, next));

    states.unshift(next);

}

/**
 * 
 */
export const subscribe = (subscription) => {
    subscribers.push(subscription)
    const handler = (item) => item != subscription

    const unsubscribe = () => {
        const newSubscribers = subscribers.filter(handler)
        subscribers = newSubscribers;
    }
    return unsubscribe;
}


/**
  * @typedef {object} store
  * @prop {GetState} getState
  * @prop {Subscribe} subscribe
  * @prop {Dispatch} dispatch
  */