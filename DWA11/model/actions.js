import { tallyCount } from './store.js'

/**
 * @callback increment
 * @param {increment} type
 *
 */
export const increment = (result) => {
  

  if (result === tallyCount.max) {
    return result += 1; 
  }
  else {
    result = reset()
  }
}

/**
 * @callback decrement
 * @param {decrement} type
 *
 */
export const decrement = (result) => {

  

  if (result === tallyCount.min) {
    return result -= 1;
  } else {
    result = reset()
  }
}

/**
 * @callback reset
 * @prop {Reset} type
 */
export const reset = (result) => {
  if (result >= tallyCount.max || result <= tallyCount.min) {

    return result = 0;
  }
}

/**
 * @typedef {increment | decrement | reset} Action
 */
export const Action = () => {
  if(increment) {
    console.log(increment())
  } else if (decrement) {
    console.log(increment())
  } else {
    console.log(reset())
  }
}
