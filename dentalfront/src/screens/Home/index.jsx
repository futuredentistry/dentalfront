import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Home from './Home'
import SignUpPage from './components/Signup'

const HomeRouter = ({ match: { path }, location: { pathname } }) => {
    console.log('path')
    console.log(path)
    return (
        <Route
          path={ROUTES.HOME}
          render={() => (
                <>
                    <Route path={ROUTES.HOME} component={Home} exact />
                    <Route path={`${ROUTES.SIGNUP}`} component={SignUpPage} />
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
}

HomeRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomeRouter
