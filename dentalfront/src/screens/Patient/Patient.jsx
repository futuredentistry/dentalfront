import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import Button from '@material-ui/core/Button'
import * as ROUTES from 'modules/constants/routes'

const Patient = ({ history }) => (
    <>
        Patient

            <Button variant="contained" color="primary" onClick={() => history.push(ROUTES.PATIENT_REPORT)}>Create a new report</Button>
    </>
)

Patient.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,

}

export default Patient
