import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from 'modules/Firebase'
import Typography from '@material-ui/core/Typography'

const PatientReport = ({ match: { params: { id } } }) => {
    console.log(id)
    const firebase = useContext(FirebaseContext)

    const [doctor, setDoctor] = useState(null)
    const [overallHealth, setOverallHealth] = useState(null)
    const [risk, setRisk] = useState(null)
    const [summary, setSummary] = useState(null)
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        firebase.getPatientReportForPatient(id).then(
            doc => {
                if (doc.exists) {
                    const document = doc.data()
                    setDoctor(document.doctor)
                    setOverallHealth(document.overallHealth)
                    setRisk(document.risk)
                    setSummary(document.summary)
                    setTreatment(document.treatment)

                }
            }).catch(e => console.log(e))
    }, [])

    return (
        <>
            <Typography variant="h4">
                Hello
            </Typography>
            {doctor}
            {overallHealth}
            {risk}
            {summary}
            {treatment}

        </>
    )
}

export default PatientReport
