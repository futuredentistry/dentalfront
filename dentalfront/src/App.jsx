import React from 'react'
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom'

import AuthorizedRoute from 'modules/AuthorizedRoute'
import * as ROUTES from 'modules/constants/routes'
import Patient from 'screens/Patient/Patient'
import Admin from 'screens/Admin/Admin'
import Dentist from 'screens/Dentist/Dentist'
import Screener from 'screens/Screener/Screener'
import Home from 'screens/Home'
// import SignUpPage from 'screens/Home/components/Signup'

// const Notfound = () => <h1>Not found</h1>

const App = () => {
  const authorized = true // ToDo configure auth
  return (
    <Router>

      <>
        <Route
          path={ROUTES.HOME}
          component={Home}
        />
        <AuthorizedRoute path={ROUTES.PATIENT} authorized={authorized} component={Patient} />
        <AuthorizedRoute path={ROUTES.ADMIN} exact authorized={authorized} component={Admin} />
        <AuthorizedRoute path={ROUTES.DENTIST} exact authorized={authorized} component={Dentist} />
        <AuthorizedRoute path={ROUTES.SCREENER} exact authorized={authorized} component={Screener} />
      </>

    </Router>
  )
}

export default App
