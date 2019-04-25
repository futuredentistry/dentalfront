import React from 'react'
import PropTypes from 'prop-types'

import { segment } from 'modules/Dentist/props'
import ReportTreatment from './ReportTreatment'

const Report = ({
    topRight, setTopRight,
    topMiddle, setTopMiddle,
    topLeft, setTopLeft,
    bottomRight, setBottomRight,
    bottomMiddle, setBottomMiddle,
    bottomLeft, setBottomLeft,
}) => {
    const treatmentSegments = [
        { segmentProps: topRight, setMethod: setTopRight },
        { segmentProps: topMiddle, setMethod: setTopMiddle },
        { segmentProps: topLeft, setMethod: setTopLeft },
        { segmentProps: bottomRight, setMethod: setBottomRight },
        { segmentProps: bottomMiddle, setMethod: setBottomMiddle },
        { segmentProps: bottomLeft, setMethod: setBottomLeft },
    ]
    return (
        <>
            {
                treatmentSegments.map(treatment => treatment.segmentProps
                    && treatment.segmentProps.concern !== ''
                    && (
                        <div key={treatment.concern}>
                            <ReportTreatment {...treatment} />
                        </div>
                    ))
            }
        </>
    )
}

Report.propTypes = {
    topRight: segment.isRequired,
    setTopRight: PropTypes.func.isRequired,
    topMiddle: segment.isRequired,
    setTopMiddle: PropTypes.func.isRequired,
    topLeft: segment.isRequired,
    setTopLeft: PropTypes.func.isRequired,
    bottomRight: segment.isRequired,
    setBottomRight: PropTypes.func.isRequired,
    bottomMiddle: segment.isRequired,
    setBottomMiddle: PropTypes.func.isRequired,
    bottomLeft: segment.isRequired,
    setBottomLeft: PropTypes.func.isRequired,
}

export default Report
