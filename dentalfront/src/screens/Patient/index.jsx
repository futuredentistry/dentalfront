import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Patient from './Patient'

const PatientRouter = ({ match: { path }, location: { pathname } }) => (
    <>
        <Route path={ROUTES.PATIENT} component={Patient} />
    </>
)

PatientRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default PatientRouter
