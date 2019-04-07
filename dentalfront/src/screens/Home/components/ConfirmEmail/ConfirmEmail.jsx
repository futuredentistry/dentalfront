import React, { useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import { Button } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'
import FirebaseContext from 'modules/Firebase'

const ConfirmEmail = ({ history }) => {
    const firebase = useContext(FirebaseContext)
    return (
        <>
            Please confirm your email

        <Button
          variant="contained"
          color="primary"
          onClick={() => firebase.doSendEmailVerification()}
        >
                Confirm
        </Button>
        </>
    )
}

ConfirmEmail.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default ConfirmEmail
