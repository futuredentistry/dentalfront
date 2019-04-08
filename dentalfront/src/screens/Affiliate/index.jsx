import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Affiliate from './Affiliate'

const AffiliateRouter = ({ match: { path }, location: { pathname } }) => (
    <>
        <Route exact path={`${path}/${ROUTES.AFFILIATE}`} component={Affiliate} />
    </>
)

AffiliateRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default AffiliateRouter
