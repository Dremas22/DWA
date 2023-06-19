
const counterReducer = (state = [], action) => {
    if (action.type === 'INCREMENT' || action.type === 'DECREMENT') {
        return [
            ...state
        ]    
        
    }
    return state
};

export default counterReducer;