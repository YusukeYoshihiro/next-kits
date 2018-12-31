import Head from 'components/templates/head.js'
import Navigation from 'components/templates/navigation'
import { jsx, css } from '@emotion/core'

/** @jsx jsx */
const Index = () => {
  return (
    <div>
      <Head title="Index page" />
      <Navigation />
      <p
        css={css`
          color: #f00;
        `}
      >
        String style
      </p>
      <p
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: '#8a8'
          }
        }}
      >
        Object style
      </p>
    </div>
  )
}
export default Index
