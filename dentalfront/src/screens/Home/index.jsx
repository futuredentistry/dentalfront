import React from 'react'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Home from './Home'
import SignUpPage from './components/Signup'
import SignInPage from './components/Signin'
import ForgetPasswordPage from './components/ForgetPassword'
import GetStarted from './components/GetStarted'
import ContactAs from './components/ContactAs'

const HomeRouter = () => (
    <Route
      path={ROUTES.HOME}
      render={() => (
            <>
                <Route path={ROUTES.HOME} exact component={Home} />
                <Route path={ROUTES.SIGNUP} exact component={SignUpPage} />
                <Route path={ROUTES.SIGNIN} exact component={SignInPage} />
                <Route path={ROUTES.PASSWORD_FORGET} exact component={ForgetPasswordPage} />
                <Route path={ROUTES.GET_STARTED} exact component={GetStarted} />
                <Route path={ROUTES.CONTACTS_AS} exact component={ContactAs} />
            </>
        )}
    />

    // <>
    //     <Route exact path={`${ROUTES.HOME}`} component={Home} />
    //     <Route exact path={`${ROUTES.SIGNUP}`} component={SignUpPage} />
    //     {/* <Route exact path={`${path}/${ROUTES.SIGNIN}`} component={SignInPage} />
    //     <Route exact path={`${path}/${ROUTES.GET_STARTED}`} component={GetStartedPage} />
    //     <Route exact path={`${path}/${ROUTES.PASSWORD_FORGET}`} component={ForgetPasswordPage} /> */}
    // </>
)

HomeRouter.propTypes = {
}

export default HomeRouter
