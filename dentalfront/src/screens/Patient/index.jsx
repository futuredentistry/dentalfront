import React from 'react'
// import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Patient from './Patient'
import Report from './components/Report'

const PatientRouter = () => (
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

}

export default PatientRouter
