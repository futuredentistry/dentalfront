import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/CheckCircle'

import FirebaseContext from 'modules/Firebase'

import useStyles from './useStyles'
import './style.scss'

const url = 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb'

const MODE = {
    START: 'START',
    TAKE_PHOTO: 'TAKE_PHOTO',
    READY: 'READY',
}

const AffiliateImageCapture = ({ photoNumber, reportId }) => {
    const [imageSrc, setImageSrc] = useState(true)
    const [mode, setMode] = useState(MODE.START)
    const classes = useStyles()
    const firebase = useContext(FirebaseContext)

    const getFileName = () => `${reportId}-${photoNumber}.${IMAGE_TYPES.JPG}`

    const onTakePhoto = (dataUri) => {
        // Do stuff with the dataUri photo...
        console.log('takePhoto')
        firebase.uploadImage(dataUri, getFileName())
        // console.log(dataUri)
    }

    const modeScreen = (mode) => {
        switch (mode) {
            case MODE.START:
                return (
                    <>
                        <ButtonBase
                            focusRipple
                            className={classes.image}
                            onClick={() => setTimeout(() => setMode(MODE.TAKE_PHOTO), 500)}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <Typography variant="body2"
                                component="span"
                                color="inherit"
                                className={classes.imageButton}
                            >
                                take photo
                            </Typography>
                        </ButtonBase>
                    </>
                )
            case MODE.TAKE_PHOTO:
                return (
                    <div className='capture_container'>
                        <div className='capture_item'>
                            <Camera
                                onTakePhoto={dataUri => onTakePhoto(dataUri)}
                                imageType={IMAGE_TYPES.JPG}
                                idealFacingMode={FACING_MODES.ENVIRONMENT}
                            />
                        </div>
                    </div>
                )
            case MODE.READY:
                return (
                    imageSrc && (
                        <img
                            src={imageSrc}
                            alt=""
                            style={{ width: '100%' }}
                        />
                    )
                )
            default: return (
                <div className='capture_container'>
                    <div className='capture_item'>
                        <CircularProgress />
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="row"
                className={classes.greedRow}
            >
                <Grid item xs={6}>
                    <Typography variant="h5" className={classes.photoHeader}>
                        Top right {imageSrc && <CloseIcon className={classes.iconColor} />}
                    </Typography>
                </Grid>

                <Grid item xs={6} >
                    {
                        imageSrc
                            ? (<Button
                                variant="text"
                                color="primary"
                                onClick={() => setImageSrc(false)}
                                className={`${classes.headerButton} ${classes.headerRight}`}
                            >
                                Retake image
                        </Button>)
                            : (<Button
                                variant="text"
                                color="primary"
                                onClick={() => setImageSrc(true)}
                                className={`${classes.headerButton} ${classes.headerRight}`}
                            >
                                Show example
                        </Button>)
                    }

                </Grid>
            </Grid>

            {modeScreen(mode)}

            {
                imageSrc
                    ? (<Button
                        variant="text"
                        color="primary"
                        onClick={() => {
                            // ToDo firebase.delImage(name).then()
                            setImageSrc(null)
                            setMode(MODE.START)
                        }}
                        className={classes.headerButton}
                    >
                        Delete image
                    </Button>)
                    : <div className='empty_del_button_container' />
            }
        </>
    )
}

AffiliateImageCapture.propTypes = {
    photoNumber: PropTypes.number.isRequired,
    reportId: PropTypes.string.isRequired,
}

export default AffiliateImageCapture
