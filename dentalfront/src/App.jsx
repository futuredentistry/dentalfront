import React, { useEffect, useCallback, useContext } from 'react'
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'

import UnauthorizedRoute from 'modules/unauthorized_route'
import * as ROUTES from 'modules/constants/routes'

const App = () => {
  const authorized = true // ToDo configure auth
  return (
    <Router>
      <Switch>
        {/*
        ToDo by role if needed
        <Route
          exact
          path={ROUTES.LANDING}
          render={props => (authorized ? <Redirect to={ROUTES.HOME} /> : <LandingPage {...props} />)}
        /> */}

        <Route exact path={ROUTES.HOME} component={Home} />

        <UnauthorizedRoute path={ROUTES.ADMIN} authorized={authorized} component={Admin} />
        <UnauthorizedRoute path={ROUTES.DENTIST} authorized={authorized} component={Dentist} />
        <UnauthorizedRoute path={ROUTES.PATIENT} authorized={authorized} component={Patient} />
        <UnauthorizedRoute path={ROUTES.SCREENER} authorized={authorized} component={Screener} />

        <Route component={() => <p>No Match</p>} />
      </Switch>
    </Router>
  )
}

export default App
