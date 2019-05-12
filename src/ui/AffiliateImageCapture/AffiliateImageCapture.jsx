import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
// @ts-ignore
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/CheckCircle'

import FirebaseContext from 'modules/Firebase'
import Dialog from 'ui/Dialog'

import useStyles from './useStyles'
import './style.scss'

// ToDo change image
const url = 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb'

const MODE = {
    START: 'START',
    TAKE_PHOTO: 'TAKE_PHOTO',
    READY: 'READY',
}

// ToDo example url
const AffiliateImageCapture = ({ imageSrc, setImageSrc, segmentName, photoNumber, reportId }) => {
    const [mode, setMode] = useState(MODE.START)
    const [open, setModalOpen] = useState(false)
    const classes = useStyles()
    const firebase = useContext(FirebaseContext)

    const getFileName = () => `${reportId}-${photoNumber}.${IMAGE_TYPES.JPG}`

    const onTakePhoto = (dataUri) => firebase.uploadImage(
        dataUri,
        getFileName(),
        () => setMode(null),
        (imgUrl) => {
            setImageSrc(segmentName, imgUrl)
            setMode(MODE.READY)
        })

    const onDeletePhoto = () => firebase.deleteImage(getFileName())
        .then(() => {
            setImageSrc(segmentName, null)
            setMode(MODE.START)
        })

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
                        <div className='capture_container'>
                            <div className='capture_item'>
                                <img
                                    src={imageSrc}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
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
            <Dialog
                disableBackdropClick
                open={open}
                showClose={false}
                onClose={() => { }}
            >
                <>
                    <div className='capture_container'>
                        <div className='capture_item'>
                            <img
                                src={url}
                                alt=""
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>

                    <br />
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => setModalOpen(false)}
                    >
                        close
            </Button>
                </>
            </Dialog>

            <Grid
                container
                spacing={0}
                direction="row"
                className={classes.greedRow}
            >
                <Grid item xs={6}>
                    <Typography variant="h5" className={classes.photoHeader}>
                        {segmentName} {imageSrc && <CloseIcon className={classes.iconColor} />}
                    </Typography>
                </Grid>

                <Grid item xs={6} >
                    {
                        imageSrc
                            ? (<Button
                                variant="text"
                                color="primary"
                                onClick={() => setMode(MODE.TAKE_PHOTO)}
                                className={`${classes.headerButton} ${classes.headerRight}`}
                            >
                                Retake image
                        </Button>)
                            : (<Button
                                variant="text"
                                color="primary"
                                onClick={() => setModalOpen(true)}
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
                        onClick={() => onDeletePhoto()}
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
    imageSrc: PropTypes.string,
    setImageSrc: PropTypes.func.isRequired,
    segmentName: PropTypes.string.isRequired,
    photoNumber: PropTypes.number.isRequired,
    reportId: PropTypes.string.isRequired,
}

AffiliateImageCapture.defaultProps = {
    imageSrc: null,
}

export default AffiliateImageCapture
