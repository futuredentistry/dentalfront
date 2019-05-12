import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    greedRow: {
        paddingBottom: '3%',
    },
    photoHeader: {
        textAlign: 'left',
        marginLeft: '3px',
    },
    headerButton: {
        marginBlockStart: '11px',
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
        textDecoration: 'underline',
    },
    headerRight: {
        justifyContent: 'flex-end',
    }
}))

const PhotoCaptureHeader = ({ header, onClick, buttonText }) => {
    const classes = useStyles()
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            className={classes.greedRow}
        >
            <Grid item xs={7}>
                <Typography variant="h5" className={classes.photoHeader}>
                    {header}
                </Typography>
            </Grid>

            <Grid item xs={5} >
                <Button
                    variant="text"
                    color="primary"
                    onClick={onClick}
                    className={`${classes.headerButton} ${classes.headerRight}`}
                >
                    {buttonText}
                </Button>
            </Grid>
        </Grid>
    )
}

PhotoCaptureHeader.propTypes = {
    header: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.node.isRequired,
}

export default PhotoCaptureHeader
