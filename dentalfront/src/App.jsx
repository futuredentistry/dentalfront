// @ts-nocheck
import React, { useContext, useEffect, useCallback } from 'react'
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom'

import AuthorizedRoute from 'modules/AuthorizedRoute'
import * as ROUTES from 'modules/constants/routes'
import * as ROLES from 'modules/constants/roles'
import Patient from 'screens/Patient/Patient'
import Admin from 'screens/Admin/Admin'
import Dentist from 'screens/Dentist/Dentist'
import Affiliate from 'screens/Affiliate'
import Home from 'screens/Home'
import FirebaseContext from 'modules/Firebase'

const logonUser = () => JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE))


const App = () => {
  const firebase = useContext(FirebaseContext)
  useEffect(() => {
    firebase.onAuthUserListener(
      (authUser) => {
        if (authUser.role) return localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(authUser))
      },
      () => {
        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE)
      },
    )
  })
  const authorized = useCallback(() => logonUser(), [])
  const emailVerified = useCallback(() => (logonUser() ? logonUser().emailVerified : false), [])

  return (
    <Router>

      <>
        <button onClick={() => firebase.doSignOut()}>LOGOUT</button>
        <Route
          path={ROUTES.HOME}
          component={Home}
        />
        <AuthorizedRoute path={ROUTES.PATIENT} authorized={authorized} component={Patient} />
        <AuthorizedRoute path={ROUTES.ADMIN} exact authorized={authorized} component={Admin} />
        <AuthorizedRoute path={ROUTES.DENTIST} exact authorized={authorized} component={Dentist} />
        <AuthorizedRoute path={ROUTES.AFFILIATE} exact authorized={authorized} component={Affiliate} />

        {authorized() && emailVerified() && window.location.pathname === '/' && <Redirect to={ROUTES[authorized().role]} />}
        {authorized() && !emailVerified() && <Redirect to={ROUTES.CONFIRM_EMAIL} />}
      </>

    </Router>
  )
}

export default App
