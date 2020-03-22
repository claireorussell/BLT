const initialState = 0

function totalRemaining(state = initialState, action){
    switch(action.type) {
        case 'SET_REMAINING':
            return action.totalRemaining
        case 'UPDATE_REMAINING':
            return action.totalRemaining
        default:
            return state
    }
} 

export default totalRemaining