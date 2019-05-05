import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'

import FirebaseContext from 'modules/Firebase'
import FormGrid from 'ui/FormGrid'
import validateEmail from 'utils/validateEmail'

const ContactUs = () => {
    const firebase = useContext(FirebaseContext)
    const [emailMessage, setEmailMessage] = useState('')
    const [email, setEmail] = useState('')
    const [errMessage, setErrMessage] = useState(null)
    const [validForm, setValidForm] = useState(false)

    const validateForm = () => email !== '' && emailMessage !== '' && validateEmail(email)

    return (
        <>
            <Typography variant="h4">
                Contact us
            </Typography>
            <br />

            <FormGrid>
                <Typography variant="body2">
                    We'd love to hear from you so get in touch and we'll get back to you as soon as we can.
                </Typography>
                <br />
                <FormControl margin="normal" required>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                      error={validForm && !validateEmail(email)}
                      value={email}
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={e => setEmail(e.currentTarget.value)}
                    />
                </FormControl>
                {
                    validForm
                    && !validateEmail(email)
                    && <FormHelperText error>Please provide valid email</FormHelperText>
                }

                <TextField
                  error={validForm && emailMessage === ''}
                  placeholder="Your message"
                  value={emailMessage}
                  onChange={e => setEmailMessage(e.currentTarget.value)}
                  margin="normal"
                  variant="filled"
                  multiline
                  rows={6}
                />
                {
                    validForm
                    && emailMessage === ''
                    && <FormHelperText error>Please fill out this field</FormHelperText>
                }

                <Typography color="error">{errMessage}</Typography>
                <br />
                <br />
                <Button
                  disabled={validForm && !validateForm()}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                        setValidForm(true)
                        if (validateForm()) {
                            firebase
                                .sendMessage(emailMessage, email)
                                .then(() => {
                                    setEmailMessage('')
                                    setEmail('')
                                    setErrMessage(null)
                                    setValidForm(false)
                                })
                                .catch(({ message }) => setErrMessage(message))
                        }
                    }
                    }
                >
                    Send
                </Button>
            </FormGrid>
        </>
    )
}

export default ContactUs
