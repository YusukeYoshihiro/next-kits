import React from 'react'
import Head from 'components/templates/head.js'

import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store/actions'

import Examples from 'components/testsample/examples'

class About extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <Head title="Next with Redux" />
        <h1>Next with Redux</h1>
        <Examples />
      </div>
    )
  }
}

export default connect()(About)
