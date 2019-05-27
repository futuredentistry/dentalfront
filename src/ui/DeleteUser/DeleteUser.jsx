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
import { UserUid, UserAuthProvider } from 'utils/logonUser'
import SocialMediaButtons from 'ui/SocialMediaButtons';

const AUTH_PROVIDER = {
    PASSWORD: 'password',
    GMAIL: 'google.com',
    FACEBOOK: 'facebook.com',
}

const DeleteUser = () => {
    const [open, setOpen] = useState(false)
    const [agree, setAgree] = useState(false)
    const [errMessage, setErrMessage] = useState(null)
    const [password, setPassword] = useState('')
    const firebase = useContext(FirebaseContext)
    console.log(UserAuthProvider() === AUTH_PROVIDER.FACEBOOK)
    const handleAfterDelete = () => {
        // Your account as been successfully deleted
    }

    const handleDeleteWithPassword = () => firebase
        .reauthenticate(password)
        .then(() => firebase
            .user(UserUid())
            .set(null))
        .then(() => firebase
            .deleteUser()
            .then(() => { })
            .catch(({ message }) => setErrMessage(message)))
        .catch(({ message }) => setErrMessage(message))

    const handleDeleteWithFacebook = () => firebase
        .doSignInWithFacebook()
        .then(socialUser => {
            firebase.user(socialUser.user.uid).set(null).then(() => firebase.deleteUser()
                .then(() => { })
                .catch(({ message }) => setErrMessage(message))
            )
                .catch(({ message }) => setErrMessage(message))
        })
        .catch(({ message }) => setErrMessage(message))


    const handleDeleteWithGmail = () => firebase
        .doSignInWithGoogle()
        .then(socialUser => {
            firebase.user(socialUser.user.uid).set(null).then(() => firebase.deleteUser()
                .then(() => { })
                .catch(({ message }) => setErrMessage(message))
            )
                .catch(({ message }) => setErrMessage(message))
        })
        .catch(({ message }) => setErrMessage(message))

    return (
        <>
            <Dialog
                disableBackdropClick
                open={open}
                showClose
                onClose={() => setOpen(false)}
            >
                <FormGrid>

                    {UserAuthProvider() === AUTH_PROVIDER.PASSWORD && (
                        <>
                            <Typography variant="h5">
                                Please enter your password before we delete your account
                            </Typography>
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
                            <Button
                                variant="contained"
                                disabled={password === ''}
                                onClick={() => handleDeleteWithPassword()}
                            >
                                delete account
                            </Button>
                        </>
                    )}

                    {UserAuthProvider() !== AUTH_PROVIDER.PASSWORD && (
                        <>
                            <Typography variant="h5">
                                Please use your {' '}
                                {UserAuthProvider() === AUTH_PROVIDER.FACEBOOK && 'Facebook'}
                                {UserAuthProvider() === AUTH_PROVIDER.GMAIL && 'Gmail'}
                                {' '}
                                to delete your account
                            </Typography>

                            <SocialMediaButtons
                                showFacebook={UserAuthProvider() === AUTH_PROVIDER.FACEBOOK}
                                showGmail={UserAuthProvider() === AUTH_PROVIDER.GMAIL}
                                {...{
                                    onClickFacebook: handleDeleteWithFacebook,
                                    onClickGmail: handleDeleteWithGmail,
                                }}
                            />
                        </>
                    )}

                    <Typography color="error">{errMessage}</Typography>


                </FormGrid>
            </Dialog>


            <br />
            <br />
            <Typography variant="h5">
                Delete my account?
            </Typography>

            <br />
            <PrimaryCheckbox
                formLabel="I understand that by deleting my account all information captured will be removed and cannot be retrieved"
                formValue={agree}
                onChange={() => setAgree(!agree)}
            />
            <br />

            <Button
                variant="contained"
                color="primary"
                disabled={!agree}
                onClick={() => setOpen(true)}
            >
                delete account
            </Button>

        </>
    )
}

export default DeleteUser
