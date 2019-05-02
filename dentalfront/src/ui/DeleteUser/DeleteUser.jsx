import React, { useContext, useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import Dialog from 'ui/Dialog'
import FirebaseContext from 'modules/Firebase'
import FormGrid from 'ui/FormGrid'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'
import { UserUid } from 'utils/logonUser'

const DeleteUser = () => {
    const [open, setOpen] = useState(false)
    const [agry, setAgry] = useState(false)
    const [errMessage, setErrMessage] = useState(null)
    const [password, setPassword] = useState('')
    const firebase = useContext(FirebaseContext)
    return (
        <>
            <Dialog
              disableBackdropClick
              open={open}
              showClose
              onClose={() => setOpen(false)}
            >
                <FormGrid>

                    <FormControl margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                          name="password"
                          id="password"
                          value={password}
                          onChange={e => setPassword(e.currentTarget.value)}
                          type="password"
                        />
                    </FormControl>

                    <Typography color="error">{errMessage}</Typography>

                    <Button
                      disabled={password === ''}
                      onClick={() => {
                            firebase
                                .reauthenticate(password)
                                .then(() => firebase
                                    .user(UserUid())
                                    .set(null))
                                .then(() => firebase
                                    .deleteUser()
                                    .then(() => { })
                                    .catch(({ message }) => setErrMessage(message)))
                                .catch(({ message }) => {
                                    // setModal(true)
                                    setErrMessage(message)
                                })
                        }}
                    >
                        confirm
                    </Button>
                </FormGrid>
            </Dialog>


            <br />
            <br />
            <Typography variant="h5">
                Delete my account?
            </Typography>

            <br />
            <PrimaryCheckbox
              formLabel="I understand that by deleting my account all infromation captured will be removed and cannot be retrieved"
              formValue={agry}
              onChange={() => setAgry(!agry)}
            />
            <br />

            <Button
              variant="contained"
              color="primary"
              disabled={!agry}
              onClick={() => setOpen(true)}
            >
                delete account
            </Button>

        </>
    )
}

export default DeleteUser
