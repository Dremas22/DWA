import { State } from './store.js'
import { Action } from './actions.js'

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */
export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK': {
            return {
                ...state,
                
                tasks: {
                    [action.task.id]: action.task,
                    ...state.tasks,
                }
            }
        }
        
        case 'TOGGLE_ADD': {
            return {
                ...state,
                phase: state === 'adding' ? 'idle' : 'adding',
            }

        }

        default:
            return state
    }

    
}


