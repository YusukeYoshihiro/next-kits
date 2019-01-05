import Head from 'components/templates/head.js'
import Navigation from 'components/templates/navigation'
import css from 'static/css/pages/index.scss'

const Index = () => {
  return (
    <div>
      <Head title="Index page" />
      <Navigation />
      <p className={css.item}>Hello world</p>
      <p>Index</p>
    </div>
  )
}
export default Index
