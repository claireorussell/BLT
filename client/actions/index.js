import request from 'superagent'


export const setUser = (user) => {
  return {
    type: 'SET_USER', 
    user: user,
  }
}

// Keeping record of total money left to be allocated 

export const setTotalRemaining = (income) => {
  return {
    type: 'SET_REMAINING', 
    totalRemaining: income
  }
}


export const updateRemaining = (totalRemaining) => {
  return {
    type: 'UPDATE_REMAINING',
    totalRemaining: totalRemaining
  }
}

export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES', 
    expenses: expenses
  }
}

