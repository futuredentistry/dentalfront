import React, { useState, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'
import FirebaseContext from 'modules/Firebase'
import FormGrid from 'ui/FormGrid'

const Signup = ({ history }) => {
  const firebase = useContext(FirebaseContext)
  const [errMessage, setErrMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  return (
    <FormGrid>
      <Typography variant="h3">
        Create Account
      </Typography>

      <Typography variant="subtitle1">
        Please enter your name and best email address to get started.
      </Typography>
      <br />

      <FormControl margin="normal" required>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          value={email}
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={e => setEmail(e.currentTarget.value)}
        />
      </FormControl>

      <FormControl margin="normal" required>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          value={password}
          name="password"
          type="password"
          id="password"
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </FormControl>

      <Typography color="error">
        {password !== confirmPassword && (password !== '' && confirmPassword !== '')
          && 'No match'}
      </Typography>

      <FormControl margin="normal" required>
        <InputLabel htmlFor="password">Confirm Password</InputLabel>
        <Input
          value={confirmPassword}
          name="confirm_password"
          type="password"
          id="confirm_password"
          onChange={e => setConfirmPassword(e.currentTarget.value)}
        />
      </FormControl>
      <Typography color="error">{errMessage}</Typography>

      <Button
        disabled={email === '' || password === '' || password !== confirmPassword}
        variant="contained"
        color="primary"
        onClick={() => firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            firebase
              .user(authUser.user.uid)
              .set({
                email,
                role: 'PATIENT',
              })

            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(authUser.user))
            history.push(ROUTES.CONFIRM_EMAIL)
          })
          .catch(({ message }) => setErrMessage(message))
        }
      >
        Next
      </Button>

      <Button variant="text" color="primary" onClick={() => history.goBack()}>
        Back
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => firebase
          .doSignInWithGoogle()
          .then(socialUser => {

            if (socialUser.additionalUserInfo.isNewUser) {
              const socialUserEmail = socialUser.user.email
              firebase
                .user(socialUser.user.uid)
                .set({
                  email: socialUserEmail,
                  role: 'PATIENT',
                })
            }

            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(socialUser.user))
          })
          .then(() => history.push(ROUTES.PATIENT))
          .catch(({ message }) => setErrMessage(message))
        }
      >
        google
      </Button>

    </FormGrid>
  )
}

Signup.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default Signup
