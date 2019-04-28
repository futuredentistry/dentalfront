import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import Grid from '@material-ui/core/Grid'

const url = 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 400,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 200,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        height: 36,
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
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}))

const AffiliateImageCapture = () => {
    const classes = useStyles()
    return (
        <>

            {/* ToDo map for db objects */}

            <Grid
              container
              spacing={0}
              direction="row"
            >
                <Grid item xs={6}>
                    <Typography variant="h5">
                        Top right
                    </Typography>
                </Grid>
                <Grid item xs={6} />
            </Grid>


            <ButtonBase
              focusRipple
                //   key={image.title}
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                    width: '100%',
                }}
            >
                <span
                  className={classes.imageSrc}
                  style={{
                        backgroundImage: `url(${url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                {/* <span className={classes.imageButton}> */}
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.imageButton}
                //   onClick={() => setMethod({ ...segmentProps, ...emptyTreatment })}
                >
                    take photo
                </Button>
                {/* </span> */}
            </ButtonBase>
        </>
    )
}

AffiliateImageCapture.propTypes = {
    // segmentProps: segment.isRequired,
    // setMethod: PropTypes.func.isRequired,
}

export default AffiliateImageCapture
