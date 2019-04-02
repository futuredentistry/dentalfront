import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'

const UnauthorizedRoute = ({ component: Component, authorized, ...rest }) => (
    <Route
      exact
      {...rest}
      render={props => (authorized() ? (
            <Redirect
              to={{
                    pathname: ROUTES.HOME,
                }}
            />
        ) : (
                <Component {...props} />
            ))
        }
    />
)

UnauthorizedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    authorized: PropTypes.func.isRequired,
}

export default UnauthorizedRoute
