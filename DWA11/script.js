import { subscribe, dispatch } from "./model/store.js";
import { addTask, toggleAdd } from "./model/actions.js";

subscribe((_, next) => console.log(next));


dispatch(toggleAdd())
console.log(addTask({ title: 'Hello'}))
console.log(toggleAdd())
