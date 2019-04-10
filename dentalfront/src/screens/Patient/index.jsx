import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Patient from './Patient'
import Report from './components/Report'

const PatientRouter = ({ match: { path }, location: { pathname } }) => (
    <Route
      path={ROUTES.HOME}
      render={() => (
            <>
                <Route exact path={ROUTES.PATIENT} component={Patient} />
                <Route path={ROUTES.PATIENT_REPORT} component={Report} />
            </>
        )}
    />


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
