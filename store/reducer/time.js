import actionTypes from '../actions'
import initialState from '../state'

// REDUCERS
const time = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.RESET:
      return Object.assign({}, state, {
        count: initialState.count
      })
    default:
      return state
  }
}

export default time
