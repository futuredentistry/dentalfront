import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from 'modules/Firebase'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const useStyles = makeStyles(() => ({
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
    },
    summary: {
        textAlign: 'left',
        paddingLeft: '12px',
    },
}))

const PatientReport = ({ match: { params: { id } } }) => {
    const classes = useStyles()
    const firebase = useContext(FirebaseContext)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [doctor, setDoctor] = useState(null)
    const [overallHealth, setOverallHealth] = useState(null)
    const [risk, setRisk] = useState(null)
    const [summary, setSummary] = useState(null)
    const [treatment, setTreatment] = useState(null)

    const [treatmentsCollection, setTreatmentsCollection] = useState(null)

    useEffect(() => {
        let collection = {}
        const promises = []

        promises.push(firebase.getTreatmentCollection()
            .then(
                querySnapshot => querySnapshot.forEach(doc => {
                    collection = { ...collection, ...{ [doc.id]: `$${doc.data().minprice}-$${doc.data().maxprice}` } }
                }
                )).then(() => setTreatmentsCollection(collection)))

        promises.push(firebase.getPatientReportForPatient(id)
            .then(
                doc => {
                    if (doc.exists) {
                        const document = doc.data()
                        setDoctor(document.doctor)
                        setOverallHealth(document.overallHealth)
                        setRisk(document.risk)
                        setSummary(document.summary)
                        setTreatment(document.treatment)

                    } else setError(true)
                }))

        Promise.all(promises).finally(() => {
            setLoading(false)
        }).catch(() => setError(true))
    }, [])

    return (
        <>
            <Typography variant="h4">
                Hello
            </Typography>

            {
                error && !loading && <Typography variant="body2" >Something went wrong</Typography>
            }
            {
                loading && <Typography variant="h5"><CircularProgress /></Typography>
            }
            {
                !loading && !error && (
                    <>
                        <Typography variant="body2">
                            {`${capitalizeFirstLetter(doctor)} took a look at your teeth and has given you the following dental plan.`}
                        </Typography>

                        <Typography variant="h5">Your dental health risk profile is</Typography>
                        <Typography variant="body2">
                            {risk === "no" && "No risk - You have good oral health"}
                            {risk === "low" && "Low - You have some corrective measures to implement"}
                            {risk === "medium" && "Medium - There are items that left untreated will causes serious distress"}
                            {risk === "high" && "High - You should seek immediate treatment"}
                        </Typography>

                        <Typography variant="h5">Your overall summary</Typography>
                        <Typography variant="body2" className={classes.summary}>
                            {summary}
                        </Typography>

                        <Typography variant="h5">Do you need to go to the dentist?</Typography>
                        <Typography variant="body2">
                            {overallHealth === 'outstanding' ? 'Nothing wrong, come back in 3 months' : 'Yes'}
                        </Typography>

                        {treatment && treatment.length > 0 && (
                            <>
                                <Typography variant="h5">What treatments do you need?</Typography>
                                <br />
                                <Paper className={classes.paper} elevation={2}>
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">treatment</TableCell>
                                                <TableCell align="center">average cost</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {treatment.map((value, i) => (
                                                <TableRow hover key={`${value}${i}`}>
                                                    <TableCell align="center">{value}</TableCell>
                                                    <TableCell align="center">{treatmentsCollection[value]}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Paper>
                            </>
                        )}
                    </>
                )
            }
            
        </>
    )
}

export default PatientReport
