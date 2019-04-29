/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

import FirebaseContext from 'modules/Firebase'
import Dialog from 'ui/Dialog'
import FormGrid from 'ui/FormGrid'

const ForgetPassword = ({ history }) => {
  const firebase = useContext(FirebaseContext)
  const [errMessage, setErrMessage] = useState(null)
  const [email, setEmail] = useState('')
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
          We've sent yo an email with a link to reset your password.
        </Typography>
        <br />
        <br />
        <br />
      </Dialog>

      <FormGrid>
        <Typography variant="h3">
          Forgot Your Password?
        </Typography>
        <Typography variant="subtitle1">
          To reset your password, enter you email address below and follow the instruction in the email you recive.
        </Typography>
        <br />
        <br />
        <br />
        <FormControl margin="normal" required>
          <InputLabel htmlFor="email">Type Email</InputLabel>
          <Input
            value={email}
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.currentTarget.value)}
          />
        </FormControl>
        <Typography color="error">{errMessage}</Typography>

        <Button
          disabled={email === ''}
          variant="contained"
          color="primary"
          onClick={() => firebase
            .doPasswordReset(email)
            .then(() => {
              setModalOpen(true)
            })
            .catch(({ message }) => setErrMessage(message))
          }
        >
          Reset Password
        </Button>

        <Button variant="text" color="primary" onClick={() => history.goBack()}>
          Back
        </Button>
      </FormGrid>
    </>
  )
}

ForgetPassword.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default ForgetPassword
