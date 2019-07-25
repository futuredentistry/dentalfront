// @ts-nocheck
import React, { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom'

import FirebaseContext from 'modules/Firebase'
import AuthorizedRoute from 'modules/AuthorizedRoute'
import * as ROUTES from 'modules/constants/routes'
import Patient from 'screens/Patient'
import Admin from 'screens/Admin'
import Dentist from 'screens/Dentist'
import Affiliate from 'screens/Affiliate'
import Home from 'screens/Home'
import PrivacyPolicy from 'screens/PrivacyPolicy'
import FAQ from 'screens/FAQ'
import Beemo from 'screens/Beemo'
import ContactUs from 'screens/ContactUs'
import PatientReport from 'screens/PatientReport'
import { UserAuthorized, UserEmailVerified, UserRole } from 'utils/logonUser'
import Header from 'ui/Header'
import Footer from 'ui/Footer'
import { HeaderFooterContext } from 'modules/HeaderFooter/context'

const App = () => {
  const firebase = useContext(FirebaseContext)
  const { show } = useContext(HeaderFooterContext)

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
  }, [])
  // ToDo Switch
  return (
    <Router>
      <>
        <div className='content'>
          <Header />
          <Route path={ROUTES.HOME} component={Home} />

          <AuthorizedRoute path={ROUTES.PATIENT} exact authorized={UserAuthorized} component={Patient} />
          <AuthorizedRoute path={ROUTES.ADMIN} exact authorized={UserAuthorized} component={Admin} />
          <AuthorizedRoute path={ROUTES.DENTIST} exact authorized={UserAuthorized} component={Dentist} />
          <AuthorizedRoute path={ROUTES.AFFILIATE} exact authorized={UserAuthorized} component={Affiliate} />

          <Route path={ROUTES.PRIVACY_POLICY} exact component={PrivacyPolicy} />
          <Route path={ROUTES.FAQ} exact component={FAQ} />
          <Route path={ROUTES.BEEMO} exact component={Beemo} />
          <Route path={ROUTES.CONTACT_US} exact component={ContactUs} />

          <Route path={ROUTES.PATIENT_REPORT} component={PatientReport} />

          {UserAuthorized() && UserEmailVerified() && <Redirect to={ROUTES[UserRole()]} />}
          {UserAuthorized() && !UserEmailVerified() && <Redirect to={ROUTES.CONFIRM_EMAIL} />}
        </div>
        {show && <Footer />}
      </>
    </Router>
  )
}

export default App
