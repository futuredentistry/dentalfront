import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import FormGrid from 'ui/FormGrid'

const ContactUs = () => {
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    return (
        <>
            <Typography variant="h4">
                Contact us
            </Typography>

            <FormGrid>
                <Typography variant="body2">
                    We'd love to hear from you so get in touch and we'll get back to you as soon as we can.
                </Typography>

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
                  value={message}
                  onChange={e => setMessage(e.currentTarget.value)}
                  margin="normal"
                  variant="filled"
                  multiline
                  rows={6}
                />

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => { }}
                >
                    Send
                </Button>
            </FormGrid>
        </>
    )
}

export default ContactUs
