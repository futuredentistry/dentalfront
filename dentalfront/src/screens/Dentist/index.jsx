import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Report from './components/Report'
import Dentist from './Dentist'

const DentistRouter = ({ match: { path }, location: { pathname } }) => (
    <Route
      path={ROUTES.DENTIST}
      render={() => (
            <>
                <Route exact path={ROUTES.DENTIST} component={Dentist} />
                <Route path={ROUTES.PATIENT_REPORT} component={Report} />
            </>
        )}
    />
)


DentistRouter.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default DentistRouter
