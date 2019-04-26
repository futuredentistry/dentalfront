import React from 'react'
import { Route } from 'react-router-dom'

import * as ROUTES from 'modules/constants/routes'
import Patient from './Patient'

const PatientRouter = () => (
    <Route
      path={ROUTES.PATIENT}
      render={() => (
            <>
                <Route exact path={ROUTES.PATIENT} component={Patient} />
                {/* <Route path={ROUTES.PATIENT_REPORT} component={Report} /> */}
            </>
        )}
    />
)

export default PatientRouter
