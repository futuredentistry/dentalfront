import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'


const GetStarted = ({ history }) => (
    <>

        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(ROUTES.SIGNUP)}
        >
            Patient
        </Button>
    </>
)

GetStarted.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default GetStarted
