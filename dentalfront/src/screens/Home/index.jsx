import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Home from './Home'

const HomeRouter = ({ match: { path }, location: { pathname } }) => (
    <>
        <Route exact path={`${path}/${ROUTES.HOME}`} component={Home} />
    </>
)

HomeRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default HomeRouter
