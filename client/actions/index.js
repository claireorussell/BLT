import request from 'superagent'


export const setUser = (user) => {
  return {
    type: 'SET_USER', 
    user: user,
  }
}

export const setTotalRemaining = (income) => {
  return {
    type: 'SET_REMAINING', 
    totalRemaining: income,
  }
}
