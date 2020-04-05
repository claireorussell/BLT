let initialState = {}

function savings(state = initialState, action){
    switch(action.type) {
        case 'SET_SAVINGS':
            return action.savings
        default:
            return state
    }
}

export default savings