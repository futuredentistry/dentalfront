import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import CloseIcon from '@material-ui/icons/CheckCircle'

import FirebaseContext from 'modules/Firebase'

import './style.scss'

const url = 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb'

const MODE = {
    START: 'START',
    TAKE_PHOTO: 'TAKE_PHOTO',
    READY: 'READY',
}

const useStyles = makeStyles(theme => ({
    image: {
        position: 'relative',
        width: '100% !important',
        '&:before': {
            paddingTop: '133.34%',
            content: "close-quote",
            display: 'block',
        },
        '&:hover': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
        },
    },
    imageButton: {
        position: 'relative',
        height: 36,
        marginBlockEnd: '10px',
        marginBlockStart: '10px',
        borderRadius: '200px',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        color: 'white!important',
        background: '#233D4D',
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '36px',
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',

    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    photoHeader: {
        textAlign: 'left',
        marginLeft: '3px',
    },
    iconColor: {
        color: '#219653',
        position: 'relative',
        top: '5px',
    }
}))

const AffiliateImageCapture = ({ photoNumber, reportId }) => {
    const [imageSrc, setImageSrc] = useState(null)
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
                            {/* <span className={classes.imageButton}> */}
                            <Typography variant="body2"
                                component="span"
                                color="inherit"
                                className={classes.imageButton}
                            //   onClick={() => setMethod({ ...segmentProps, ...emptyTreatment })}
                            >
                                take photo
                            </Typography>
                            {/* </span> */}
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
            >
                <Grid item xs={6}>
                    <Typography variant="h5" className={classes.photoHeader}>
                        Top right {imageSrc && <CloseIcon className={classes.iconColor} />}
                    </Typography>
                </Grid>
                <Grid item xs={6} />
            </Grid>
            {modeScreen(mode)}


        </>
    )
}

AffiliateImageCapture.propTypes = {
    photoNumber: PropTypes.number.isRequired,
    reportId: PropTypes.string.isRequired,
}

export default AffiliateImageCapture
