import {combineReducers} from 'redux'

import user from './user'
import totalRemaining from './totalRemaining'

export default combineReducers({
  user,
  totalRemaining,
})
