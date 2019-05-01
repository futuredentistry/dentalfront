// @ts-nocheck
import React, { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom'

import FirebaseContext from 'modules/Firebase'
import AuthorizedRoute from 'modules/AuthorizedRoute'
import * as ROUTES from 'modules/constants/routes'
// import * as ROLES from 'modules/constants/roles'
import Patient from 'screens/Patient'
import Admin from 'screens/Admin'
import Dentist from 'screens/Dentist'
import Affiliate from 'screens/Affiliate'
import Home from 'screens/Home'
import PrivacyPolicy from 'screens/PrivacyPolicy'
import FAQ from 'screens/FAQ'
import Beemo from 'screens/Beemo'
import { UserAuthorized, UserEmailVerified } from 'utils/logonUser'
import Header from 'ui/Header'

const App = () => {
  const firebase = useContext(FirebaseContext)
  useEffect(() => {
    firebase.onAuthUserListener(
      (authUser) => {
        if (authUser.role) return localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(authUser))
        return null
      },
      () => {
        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE)
      },
    )
  })
  // ToDo Switch
  return (
    <Router>
      <>


        <Header />
        <Route path={ROUTES.HOME} component={Home} />

        <AuthorizedRoute path={ROUTES.PATIENT} exact authorized={UserAuthorized} component={Patient} />
        <AuthorizedRoute path={ROUTES.ADMIN} exact authorized={UserAuthorized} component={Admin} />
        <AuthorizedRoute path={ROUTES.DENTIST} exact authorized={UserAuthorized} component={Dentist} />
        <AuthorizedRoute path={ROUTES.AFFILIATE} exact authorized={UserAuthorized} component={Affiliate} />

        <Route path={ROUTES.PRIVACY_POLICY} exact component={PrivacyPolicy} />
        <Route path={ROUTES.FAQ} exact component={FAQ} />
        <Route path={ROUTES.BEEMO} exact component={Beemo} />
        {/* {authorized() && emailVerified() && <Redirect to={ROUTES[authorized().role]} />} */}
        {UserAuthorized() && !UserEmailVerified() && <Redirect to={ROUTES.CONFIRM_EMAIL} />}
      </>
    </Router>
  )
}

export default App
