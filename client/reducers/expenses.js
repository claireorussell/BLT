const initialState = {}

function expenses(state = initialState, action){
    switch(action.type) {
        case 'SET_EXPENSES':
            return action.expenses
        default:
            return state
    }
}

export default expenses

