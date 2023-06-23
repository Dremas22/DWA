import { State } from './store.js'
import { Action } from './actions.js'

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */
export const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT': {
            return {
                ...state,
                increment
            }
        }
        
        case 'DREMENT': {
            return {
                ...state,
                decrement
            }

        }

        default:
            return state
    }

    
}


