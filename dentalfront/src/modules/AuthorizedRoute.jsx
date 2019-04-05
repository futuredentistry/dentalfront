import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'

const AuthorizedRoute = ({
    component: Component, authorized, ...rest
}) => (

        <Route
          {...rest}
          render={props => (
                authorized
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: ROUTES.HOME }} />
            )}
        />
    )

AuthorizedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    authorized: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    // authorized: PropTypes.func.isRequired, ToDo as a function
}

export default AuthorizedRoute
