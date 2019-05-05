import React, { useState, useContext } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import FirebaseContext from 'modules/Firebase'
import FormGrid from 'ui/FormGrid'

const ContactUs = () => {
    const firebase = useContext(FirebaseContext)
    const [emailMessage, setEmailMessage] = useState('')
    const [email, setEmail] = useState('')
    const [errMessage, setErrMessage] = useState(null)
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
                      value={email}
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={e => setEmail(e.currentTarget.value)}
                    />
                </FormControl>

                <TextField
                  placeholder="Your message"
                  value={emailMessage}
                  onChange={e => setEmailMessage(e.currentTarget.value)}
                  margin="normal"
                  variant="filled"
                  multiline
                  rows={6}
                />
                <Typography color="error">{errMessage}</Typography>
                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => firebase
                        .sendMessage(emailMessage, email)
                        .then(() => {
                            setEmailMessage('')
                            setEmail('')
                            setErrMessage(null)
                        })
                        .catch(({ message }) => setErrMessage(message))
                    }
                >
                    Send
                </Button>
            </FormGrid>
        </>
    )
}

export default ContactUs
