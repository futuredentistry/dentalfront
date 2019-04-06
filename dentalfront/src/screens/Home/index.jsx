import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Home from './Home'
import SignUpPage from './components/Signup'
import SignInPage from './components/Signin'

const HomeRouter = () => (
    <Route
      path={ROUTES.HOME}
      render={() => (
            <>
                <Route path={ROUTES.HOME} exact component={Home} />
                <Route path={ROUTES.SIGNUP} exact component={SignUpPage} />
                <Route path={ROUTES.SIGNIN} exact component={SignInPage} />
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
