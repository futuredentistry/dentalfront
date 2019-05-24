import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/styles';
import NoSsr from '@material-ui/core/NoSsr'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { propsSegments } from 'modules/Dentist/props';

const useStyles = makeStyles(() => ({
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
    },
    hideCheck: {
        display: 'none',
    },
    button: {
        padding: 0,
        margin: 0,
        width: '100%'
    }
}))

const TreatmentTable = ({ segmentProps, onClick }) => {
    const classes = useStyles()

    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        Object.keys(segmentProps).forEach(segment => {
            const concernStr = segmentProps[segment].treatment.concern.join(', ')
            const treatmentStr = segmentProps[segment].treatment.treatment.join(', ')

            if (treatmentStr !== '' && concernStr !== '')
                setTreatment({
                    ...(treatment && treatment),
                    ...{ [segment]: { concern: concernStr, treatment: treatmentStr } },
                })

            // Handle close without saving input
            if (treatmentStr === '' && concernStr === '' && treatment && treatment[segment]) {
                const oldTreatment = treatment && { ...treatment }
                delete oldTreatment[segment]

                if (Object.keys(oldTreatment).length !== 0)
                    setTreatment(oldTreatment)
                else setTreatment(null)
            }

        })
    }, [segmentProps])

    return (
        <>
            {treatment && (
                <NoSsr>
                    <Typography variant="h5">
                        Treatments
                    </Typography>
                    <br />
                    <Paper className={classes.paper} elevation={2}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">concern</TableCell>
                                    <TableCell align="center">treatment</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(treatment).map(segment => (
                                    <TableRow hover key={segment}>
                                        <TableCell align="center">{treatment[segment].concern}</TableCell>
                                        <TableCell align="center">{treatment[segment].treatment}</TableCell>
                                        <TableCell align="center">
                                            <Button
                                                className={classes.button}
                                                color="primary"
                                                variant='text'
                                                onClick={() => onClick(segment)}
                                            >
                                                edit</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </NoSsr>
            )}
            <br />
        </>
    )
}

TreatmentTable.propTypes = {
    segmentProps: propsSegments.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TreatmentTable
