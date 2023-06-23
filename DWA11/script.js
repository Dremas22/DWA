import { dispatch } from "./model/store.js";
import { reset, increment, decrement } from "./model/actions.js"; 

dispatch(increment());
dispatch(reset());
dispatch(decrement());

