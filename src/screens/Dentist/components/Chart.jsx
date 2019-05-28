import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { propsSegments } from 'modules/Dentist/props'
import PhotoCaptureHeader from 'ui/PhotoCaptureHeader'
import DentistImage from 'ui/DentistImage'
import Dialog from 'ui/Dialog'

import Issue from './Issue'
import ImageIssue from './ImageIssue'
import TreatmentTable from './TreatmentTable';

const MODAL = {
    ISSUE: 'ISSUE',
    IMAGE_ISSUE: 'IMAGE_ISSUE',
}

const Chart = ({ segmentProps, handleSetSegmentProps, additionalImg, segmentImg, treatmentSelect, concernSelect, painMap }) => {
    const [open, setModalOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState(null)
    const [workingOnImg, setWorkingOnImg] = useState(null)

    const handleWorkingOnIssue = (issue, sectionName) => {
        setWorkingOnImg(sectionName)
        setModalComponent(issue)
        setModalOpen(true)
    }

    const handleSetSegmentIssue = (newProps) =>
        handleSetSegmentProps({ [workingOnImg]: { ...segmentProps[workingOnImg], ...{ treatment: newProps } } })

    const handleSetSegmentImageIssue = (newProps) =>
        handleSetSegmentProps({ [workingOnImg]: { ...segmentProps[workingOnImg], ...{ imageIssue: newProps } } })

    const getPatientPain = (sectionName) => {
        switch (sectionName) {
            case 'Top right':
                return painMap.painTopRight
            case 'Top middle':
                return painMap.painTopCenter
            case 'Top left':
                return painMap.painTopLeft
            case 'Bottom right':
                return painMap.painBottomRight
            case 'Bottom middle':
                return painMap.painBottomCenter
            case 'Bottom left':
                return painMap.painBottomLeft
            default:
                return false
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
                    {modalComponent === MODAL.ISSUE && (
                        <Issue
                            onClose={() => setModalOpen(false)}
                            segmentProps={segmentProps[workingOnImg].treatment}
                            setSegment={handleSetSegmentIssue}
                            treatmentSelect={treatmentSelect}
                            concernSelect={concernSelect}
                        />
                    )
                    }

                    {modalComponent === MODAL.IMAGE_ISSUE && (
                        <ImageIssue
                            onClose={() => setModalOpen(false)}
                            segmentProps={segmentProps[workingOnImg].imageIssue}
                            setSegment={handleSetSegmentImageIssue}
                        />
                    )}
                </>
            </Dialog>

            {
                Object.keys(segmentImg).reverse().map(sectionName =>
                    (
                        <div key={sectionName}>
                            <DentistImage {...{
                                header: <PhotoCaptureHeader {...{
                                    header: sectionName,
                                    onClick: () => handleWorkingOnIssue(MODAL.IMAGE_ISSUE, sectionName),
                                    buttonText: 'Report an issue'
                                }} />,
                                pain: getPatientPain(sectionName),
                                sectionName,
                                imagesObject: segmentImg,
                                onClick: () => handleWorkingOnIssue(MODAL.ISSUE, sectionName)
                            }} />
                        </div>
                    ))
            }

            <TreatmentTable {...{
                segmentProps,
                onClick: sectionName => handleWorkingOnIssue(MODAL.ISSUE, sectionName)
            }} />

            {
                Object.keys(additionalImg).map(sectionName => additionalImg[sectionName] &&
                    (
                        <div key={sectionName}>
                            <DentistImage {...{
                                header: <PhotoCaptureHeader {...{
                                    header: sectionName,
                                    onClick: () => { },
                                    buttonText: null,
                                }} />,
                                sectionName,
                                imagesObject: additionalImg,
                                onClick: () => { }
                            }} />
                        </div>
                    ))
            }

        </>
    )
}

Chart.propTypes = {
    segmentProps: propsSegments.isRequired,
    handleSetSegmentProps: PropTypes.func.isRequired,
    additionImg: PropTypes.shape({}),
    segmentImg: PropTypes.shape({}),
    treatmentSelect: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    concernSelect: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    painMap: PropTypes.shape({
        painTopRight: PropTypes.bool,
        painTopCenter: PropTypes.bool,
        painTopLeft: PropTypes.bool,
        painBottomRight: PropTypes.bool,
        painBottomCenter: PropTypes.bool,
        painBottomLeft: PropTypes.bool,
    }),
}

Chart.defaultProps = {
    additionImg: {},
    segmentImg: {},
    treatmentSelect: [],
    concernSelect: [],
    painMap: {},
}

export default Chart
