import React, { useEffect, useCallback, useContext } from 'react'
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom'

const App = () => {
  const authorized = true // ToDo configure auth
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.LANDING}
          render={props => (authorized() ? <Redirect to={ROUTES.USER} /> : <LandingPage {...props} />)}
        />

        <UnauthorizedRoute path={ROUTES.GET_STARTED} authorized={authorized} component={GetStartedPage} />
        <UnauthorizedRoute path={ROUTES.CREATE_ACCOUNT} authorized={authorized} component={CreateAccountPage} />

        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={ForgetPasswordPage} />

        <PrivateRoute path={ROUTES.USER} authorized={authorized} component={UserRouterPage} />
        <Route component={() => <p>No Match</p>} />
      </Switch>
    </Router>
  )
}

export default App
