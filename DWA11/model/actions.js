import { Task } from'./store.js'

/**
 * @typedef {object} AddTask
 * @prop {'ADD_TASK'} type
 * @prop {Task} 
 */

/**
 * @return {string}
 */

export const createUniqueId = () => {
    const uniqueId = Date.now().toString(36); // Use the current timestamp as a unique ID
    return uniqueId;
  }
  

/**
 * Starts or stops the adding of a new task depending on the current phase
 * @typedef {object} ToggleAdd
 * @prop {'TOGGLE_ADD'} type
 */



/**
 * @param {object} props
 * @param {string} props.title
 * @returns {AddTask}
 */
export const addTask = (props) => {
    const { title } = props
    return {
        task: {
            id: createUniqueId,
            title,
        },
        type: 'ADD_TASK'
    }
}

/**
 * @returns {ToggleAdd}
 */
// export const toggleAdd = ({ type: "TOGGLE_ADD"});

export const toggleAdd = () => {
    return {
      type: 'TOGGLE_ADD',
    };
  };


/**
 * @typedef {AddTask | ToggleAdd} Action
 * @return {ToggleAdd}
 */

export const Action = toggleAdd().type


