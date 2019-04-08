import React, { useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Home from './Home'
import SignUpPage from './components/Signup'
import SignInPage from './components/Signin'
import ForgetPasswordPage from './components/ForgetPassword'
import GetStarted from './components/GetStarted'
import ContactAs from './components/ContactAs'
import ConfirmEmail from './components/ConfirmEmail'

const logonUser = () => !!localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
const emailVerified = () => (logonUser()
    ? JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)).emailVerified
    : false)


const HomeRouter = () => {
    const authorized = useCallback(() => logonUser(), [])
    const email = useCallback(() => emailVerified(), [])
    return (
        <Route
          path={ROUTES.HOME}
          render={() => (
                <>
                    {authorized()
                        && !email()
                        && window.location.pathname !== ROUTES.PATIENT
                        && <Redirect to={ROUTES.CONFIRM_EMAIL} />}

                    {authorized()
                        && email()
                        && <Redirect to={ROUTES.PATIENT} />}

                    <Route path={ROUTES.HOME} exact component={Home} />
                    <Route path={ROUTES.SIGNUP} exact component={SignUpPage} />
                    <Route path={ROUTES.SIGNIN} exact component={SignInPage} />
                    <Route path={ROUTES.PASSWORD_FORGET} exact component={ForgetPasswordPage} />
                    <Route path={ROUTES.GET_STARTED} exact component={GetStarted} />
                    <Route path={ROUTES.CONTACTS_AS} exact component={ContactAs} />
                    <Route path={ROUTES.CONFIRM_EMAIL} exact component={ConfirmEmail} />
                </>
            )}
        />

    )
}

HomeRouter.propTypes = {
}

export default HomeRouter
