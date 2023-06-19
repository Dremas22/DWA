import store from './store.js';
import { incrementAction, decrementAction } from './actions';

// Access the store's state
console.log(store.getState());


store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());


console.log(store.getState());
