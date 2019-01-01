import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from 'store/actions'

class Counter extends Component {
  render() {
    const { count } = this.props
    const { increment, decrement, reset } = this.props

    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { count } = state.counter
  return { count }
}

const mapDispaatchToProps = dispatch => {
  return {
    increment: () => {
      // const { dispatch } = this.props
      dispatch(incrementCount())
    },
    decrement: () => {
      // const { dispatch } = this.props
      dispatch(decrementCount())
    },
    reset: () => {
      // const { dispatch } = this.props
      dispatch(resetCount())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispaatchToProps
)(Counter)
