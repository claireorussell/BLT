const initialState = {
  wage: 0,
  savingGoal: 0,
  homeOwner: 'false',
  treatSpending1: 'Food & Drink',
  treatSpending2: 'Food & Drink',
}

function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.user
    default:
      return state
  }
}

export default user
