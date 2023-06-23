import createStore from './model/store.js';
import counterReducer from './model/reducer.js';
import { increment, decrement, reset } from './model/actions.js';


/**
 * stores main parameters for our redux counter
 * @param {string} store
 */
const store = createStore(counterReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());

unsubscribe();

