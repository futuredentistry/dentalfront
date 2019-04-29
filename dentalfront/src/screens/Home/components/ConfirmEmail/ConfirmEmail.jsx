import React, { useContext, useState } from 'react'
// import ReactRouterPropTypes from 'react-router-prop-types'
import { Button } from '@material-ui/core'
import Dialog from 'ui/Dialog'
import Typography from '@material-ui/core/Typography'

// import * as ROUTES from 'modules/constants/routes'
import FirebaseContext from 'modules/Firebase'

const ConfirmEmail = () => {
    const firebase = useContext(FirebaseContext)
    const [open, setModalOpen] = useState(false)
    return (
        <>
            <Dialog
              open={open}
              onClose={() => setModalOpen(false)}
            >
                <Typography variant="h3">
                    Check Your Email
                </Typography>
                <Typography variant="subtitle1">
                    We've sent you an email with a link to confirm your email.
                </Typography>
                <br />
                <br />
                <br />
            </Dialog>


            <Typography variant="h4">
                Please confirm your email
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                    firebase.doSendEmailVerification()
                    setModalOpen(true)
                }}
            >
                Confirm
            </Button>
        </>
    )
}

ConfirmEmail.propTypes = {
    // history: ReactRouterPropTypes.history.isRequired,
}

export default ConfirmEmail
