import { combineReducers } from 'redux'

import counter from './counter'
import time from './time'

const reducer = combineReducers({
  counter,
  time
})

export default reducer
