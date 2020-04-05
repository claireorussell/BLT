import {combineReducers} from 'redux'

import user from './user'
import totalRemaining from './totalRemaining'
import expenses from './expenses'
import savings from './savings'

export default combineReducers({
  user,
  totalRemaining,
  expenses,
  savings,
})
