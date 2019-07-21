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
import SocialMediaButtons from 'ui/SocialMediaButtons'

const SignIn = ({ history }) => {
  const firebase = useContext(FirebaseContext)
  const [errMessage, setErrMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleErrorMsg = message => {
    localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE)
    firebase.doSignOut()
    setErrMessage(message)
  }

  const handlePasswordLogin = () => {
    let emailVerified
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        emailVerified = authUser.user.emailVerified

        if (!emailVerified) history.push(ROUTES.CONFIRM_EMAIL)

        if (emailVerified) firebase.user(authUser.user.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val()
            history.push(ROUTES[dbUser.role])
          })
      })
      .catch(({ message }) => handleErrorMsg(message))
  }

  const handleFacebookLogin = () => {
    let emailVerified
    firebase
      .doSignInWithFacebook()
      .then(socialUser => {
        emailVerified = socialUser.user.emailVerified

        if (socialUser.additionalUserInfo.isNewUser) {
          firebase.user(socialUser.user.uid)
            // @ts-ignore
            .set({ email: socialUser.additionalUserInfo.profile.email, role: 'PATIENT' })
        }

        if (!emailVerified) history.push(ROUTES.CONFIRM_EMAIL)

        if (emailVerified) firebase.user(socialUser.user.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val()
            history.push(ROUTES[dbUser.role])
          })
      })
      .catch(({ message }) => handleErrorMsg(message))
  }

  const handleGmailLogin = () => {
    let uid
    firebase
      .doSignInWithGoogle()
      .then(socialUser => {
        uid = socialUser.user.uid

        if (socialUser.additionalUserInfo.isNewUser) {
          firebase.user(socialUser.user.uid)
            .set({ email: socialUser.user.email, role: 'PATIENT' })
        }

      })
      .then(() => firebase.user(uid)
        .once('value')
        .then((snapshot) => {
          const dbUser = snapshot.val()
          history.push(ROUTES[dbUser.role])
        }))
      .catch(({ message }) => setErrMessage(message))
  }

  return (
    <FormGrid>
      <Typography variant="h3">
        Welcome to Beemo
      </Typography>

      <Typography variant="body2">
        Please sign to get started.
      </Typography>
      <br />
      <br />
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
          autoComplete="current-password"
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </FormControl>

      <Typography color="error">{errMessage}</Typography>

      <Button color="primary" variant="text" onClick={() => history.push(ROUTES.PASSWORD_FORGET)}>
        I forgot my password
      </Button>

      <Button
        disabled={email === '' || password === ''}
        variant="contained"
        color="primary"
        onClick={() => handlePasswordLogin()}
      >
        Login
      </Button>

      <Button variant="text" color="primary" onClick={() => history.goBack()}>
        Back
      </Button>
      <br />
      <br />
      <br />
      <Typography variant="body2">
        You can login with
      </Typography>

      <SocialMediaButtons showFacebook showGmail {...{
        onClickFacebook: handleFacebookLogin,
        onClickGmail: handleGmailLogin,
      }}
      />
    </FormGrid>
  )
}

SignIn.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default SignIn
