import React from 'react'
import Head from 'components/templates/head.js'
import Navigation from 'components/templates/navigation'
import css from 'static/css/pages/index.scss'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head title="Index page" />
        <Navigation />
        <p className={css.item}>Hello world</p>
        <p>this.state.count</p>
      </div>
    )
  }
}

export default Index
