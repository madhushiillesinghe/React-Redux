// Initial state
const initialState = {
    count: 0,
};

// Reducer function
export const CountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                count: state.count + action.payload, // Increment count
            };
        case 'SUBTRACT':
            return {
                ...state,
                count: state.count - action.payload, // Decrement count
            };
        default:
            return state; // Return current state for unhandled actions
    }
};
