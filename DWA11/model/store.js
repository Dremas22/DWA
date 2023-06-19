

import {counterReducer} from './reducer.js';

const createStore = (reducer) => {
    let state;
    let listeners = [];
  
    const getState = () => {
        return state[0];
    }
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    };
  
    dispatch({}); // Initialize the state with a dummy action
  
    return { getState, dispatch, subscribe };
  };
  
  export default createStore(counterReducer);
  

//const store = createStore(counterReducer);



  