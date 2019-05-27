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
import SocialMediaButtons from 'ui/SocialMediaButtons/SocialMediaButtons';

const Signup = ({ history }) => {
  const firebase = useContext(FirebaseContext)
  const [errMessage, setErrMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlPasswordLogin = () => firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      firebase
        .user(authUser.user.uid)
        .set({
          email,
          role: 'PATIENT',
        })

      localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(authUser.user))
    })
    .then(() => history.push(ROUTES.CONFIRM_EMAIL))
    .catch(({ message }) => setErrMessage(message))

  const handleFacebookLogin = () => firebase
    .doSignInWithFacebook()
    .then(socialUser => {
      if (socialUser.additionalUserInfo.isNewUser) {
        // @ts-ignore
        const socialUserEmail = socialUser.additionalUserInfo.profile.email
        firebase
          .user(socialUser.user.uid)
          .set({
            email: socialUserEmail,
            role: 'PATIENT',
          })
      }

      localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(socialUser.user))
    })
    .then(() => history.push(ROUTES.CONFIRM_EMAIL))
    .catch(({ message }) => setErrMessage(message))

  const handleGmailLogin = () => firebase
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

  return (
    <FormGrid>
      <Typography variant="h3">
        Create Account
      </Typography>

      <Typography variant="body2">
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
        onClick={() => handlPasswordLogin()}
      >
        Next
      </Button>

      <Button variant="text" color="primary" onClick={() => history.goBack()}>
        Back
      </Button>
      <br />
      <br />
      <br />
      <Typography variant="body2">
        Don't want another password to remember? You can create and account or login with
      </Typography>

      <SocialMediaButtons showFacebook showGmail {...{
        onClickFacebook: handleFacebookLogin,
        onClickGmail: handleGmailLogin,
      }}
      />
    </FormGrid>
  )
}

Signup.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default Signup
