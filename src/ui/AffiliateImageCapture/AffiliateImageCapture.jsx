import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
// @ts-ignore
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import CircularProgress from '@material-ui/core/CircularProgress'
import CheckCircle from '@material-ui/icons/CheckCircle'

import FirebaseContext from 'modules/Firebase'
import Dialog from 'ui/Dialog'
import CaptureContainer from 'ui/CaptureContainer'
import PhotoCaptureHeader from 'ui/PhotoCaptureHeader'

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
const AffiliateImageCapture = ({ imageSrc, reqiredImg, setImageSrc, segmentName, photoNumber, reportId }) => {
    const [mode, setMode] = useState(MODE.START)
    const [open, setModalOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState(null)

    const classes = useStyles()
    const firebase = useContext(FirebaseContext)

    const getFileName = () => `${reportId}-${photoNumber}.${IMAGE_TYPES.JPG}`

    const onTakePhoto = (dataUri) => firebase.uploadImage(
        dataUri,
        getFileName(),
        () => setMode(null),
        imgUrl => {
            setImageUrl(imgUrl)
            setImageSrc(segmentName, getFileName())
        },
        () => setTimeout(() => setMode(MODE.READY), 350)
    )

    const onDeletePhoto = () => firebase.deleteImage(getFileName())
        .then(() => {
            setImageSrc(segmentName, null)
            setMode(MODE.START)
        })

    const modeScreen = (mode) => {
        switch (mode) {
            case MODE.START:
                return (
                    <ButtonBase
                        focusRipple
                        className={classes.image}
                        onClick={() => setTimeout(() => setMode(MODE.TAKE_PHOTO), 500)}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{ backgroundImage: `url(${url})` }}
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
                )
            case MODE.TAKE_PHOTO:
                return (
                    <CaptureContainer>
                        <Camera
                            isImageMirror={false}
                            onTakePhoto={dataUri => onTakePhoto(dataUri)}
                            imageType={IMAGE_TYPES.JPG}
                            idealFacingMode={FACING_MODES.ENVIRONMENT}
                        />
                    </CaptureContainer>
                )
            case MODE.READY:
                return (
                    imageSrc && (
                        <CaptureContainer>
                            <img
                                src={imageUrl}
                                alt=""
                                style={{ width: '100%' }}
                            />
                        </CaptureContainer>
                    )
                )
            default: return (
                <CaptureContainer>
                    <CircularProgress />
                </CaptureContainer>
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
                    <CaptureContainer>
                        <img
                            src={url}
                            alt=""
                            style={{ width: '100%' }}
                        />
                    </CaptureContainer>

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

            <PhotoCaptureHeader {...{
                header: <>{segmentName} {imageSrc && <CheckCircle className={classes.iconColor} />}</>,
                onClick: () => imageSrc ? setMode(MODE.TAKE_PHOTO) : setModalOpen(true),
                buttonText: <>{imageSrc ? 'Retake image' : 'Show example'}</>
            }} />


            {modeScreen(mode)}

            {
                (imageSrc && !reqiredImg)
                    ? <Button
                        variant="text"
                        color="primary"
                        onClick={() => onDeletePhoto()}
                        className={classes.deleteButton}
                    >
                        Delete image
                    </Button>
                    : <div className='empty_del_button_container' />
            }
        </>
    )
}

AffiliateImageCapture.propTypes = {
    imageSrc: PropTypes.string,
    reqiredImg: PropTypes.bool.isRequired,
    setImageSrc: PropTypes.func.isRequired,
    segmentName: PropTypes.string.isRequired,
    photoNumber: PropTypes.number.isRequired,
    reportId: PropTypes.string.isRequired,
}

AffiliateImageCapture.defaultProps = {
    imageSrc: null,
}

export default AffiliateImageCapture
