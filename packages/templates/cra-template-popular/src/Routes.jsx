/**
 * Routes
 */

import { Router } from '@reach/router'
import HomePage from './containers/HomePage'
import PageWrapper from './containers/PageWrapper'
import SecondPage from './containers/SecondPage'

function Routes() {
  return (
    <Router id='router'>
      <PageWrapper path='/'>
        <HomePage path='home' label='Home' />
        <SecondPage path='second' label='Second' />
      </PageWrapper>
    </Router>
  )
}

export default Routes
