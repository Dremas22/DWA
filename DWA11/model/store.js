
/**
 * Creates a storage for our state 
 * @callback createStore 
 * @returns {Subscribers}
 */
const createStore = (reducer) => {
    let state = undefined;
    const subscribers = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    };

    /**
     * 
     * @param {subscriber} subscriber 
     * @returns {index}
     */
    const subscribe = (subscriber) => {
      subscribers.push(subscriber);
      return () => {
        const index = subscribers.indexOf(subscriber);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    };

    /**
     * @typedef {dispatch} dispatch
     */
    dispatch({}); 
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  };
  
  export default createStore;
  