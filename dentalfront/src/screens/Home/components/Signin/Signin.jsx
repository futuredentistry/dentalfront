import React, { useState, useContext } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'
import FirebaseContext from 'modules/Firebase'

const SignIn = ({ history }) => {
  const firebase = useContext(FirebaseContext)
  const [errMessage, setErrMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <form className="">
        <Typography variant="h3">
          Welcome to Beemo
        </Typography>
        <Typography variant="subtitle1">
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


      </form>

      <Button
        disabled={email === '' || password === ''}
        variant="contained"
        color="primary"
        onClick={() => firebase
          .doSignInWithEmailAndPassword(email, password)
          .then((user) => {
            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify(user))
            // history.push(`${ROUTES.USER}${ROUTES.LESSONS}`)
          })
          .catch(({ message }) => {
            localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE)
            firebase.doSignOut()
            setErrMessage(message)
          })
        }
      >
        Login
      </Button>

      <Button variant="text" color="primary" onClick={() => history.goBack()}>
        Back
      </Button>
    </>
  )
}

SignIn.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default SignIn
