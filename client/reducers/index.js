import {combineReducers} from 'redux'

import user from './user'
import totalRemaining from './totalRemaining'
import expenses from './expenses'

export default combineReducers({
  user,
  totalRemaining,
  expenses,
})
