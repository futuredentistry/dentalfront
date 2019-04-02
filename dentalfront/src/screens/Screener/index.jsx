import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Screener from './Screener'

const ScreenerRouter = ({ match: { path }, location: { pathname } }) => (
    <>
        <Route exact path={`${path}/${ROUTES.SCREENER}`} component={Screener} />
    </>
)

ScreenerRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default ScreenerRouter
