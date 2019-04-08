// @ts-nocheck
import React, { useContext, useEffect, useCallback } from 'react'
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom'

import AuthorizedRoute from 'modules/AuthorizedRoute'
import * as ROUTES from 'modules/constants/routes'
import Patient from 'screens/Patient/Patient'
import Admin from 'screens/Admin/Admin'
import Dentist from 'screens/Dentist/Dentist'
import Affiliate from 'screens/Affiliate'
import Home from 'screens/Home'
import FirebaseContext from 'modules/Firebase'

const logonUser = () => !!localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)


const App = () => {
  const firebase = useContext(FirebaseContext)
  useEffect(() => {
    firebase.onAuthUserListener(
      (authUser) => {
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(authUser))
      },
      () => {
        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE)
      },
    )
  })
  const authorized = useCallback(() => logonUser(), [])

  // if (authorized() && email()) return <Redirect to={ROUTES.PATIENT} />
  // if (authorized() && !email()) return <Redirect to={ROUTES.CONFIRM_EMAIL} />

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
        <AuthorizedRoute path={ROUTES.AFFILIATE} exact authorized={authorized} component={Affiliate} />


      </>

    </Router>
  )
}

export default App
