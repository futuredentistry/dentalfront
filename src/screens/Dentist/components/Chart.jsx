import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { segment } from 'modules/Dentist/props'
import PhotoCaptureHeader from 'ui/PhotoCaptureHeader'
import DentistImage from 'ui/DentistImage'
import Dialog from 'ui/Dialog'

import Issue from './Issue'
import ImageIssue from './ImageIssue'
import { Object } from 'es6-shim';

const MODAL = {
    ISSUE: 'ISSUE',
    IMAGE_ISSUE: 'IMAGE_ISSUE',
}

const Chart = ({
    topRight, setTopRight,
    topMiddle, setTopMiddle,
    topLeft, setTopLeft,
    bottomRight, setBottomRight,
    bottomMiddle, setBottomMiddle,
    bottomLeft, setBottomLeft,
    additionalImg, segmentImg,
}) => {
    const [open, setModalOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState(null)
    const [workingOnImg, setWorkingOnImg] = useState(null)

    // ImageIssue
    const getImageIssueProps = () => {
        switch (workingOnImg) {
            case 'Top right':
                return topRight
            case 'Top middle':
                return topMiddle
            case 'Top left':
                return topLeft
            case 'Bottom right':
                return bottomRight
            case 'Bottom middle':
                return bottomMiddle
            case 'Bottom left':
                return bottomLeft
            default:
                return null
        }
    }

    const getImageIssueSetMethod = () => {
        switch (workingOnImg) {
            case 'Top right':
                return setTopRight
            case 'Top middle':
                return setTopMiddle
            case 'Top left':
                return setTopLeft
            case 'Bottom right':
                return setBottomRight
            case 'Bottom middle':
                return setBottomMiddle
            case 'Bottom left':
                return setBottomLeft
            default:
                return null
        }
    }

    const handleWorkingOnIssue = (issue, sectionName) => {
        setWorkingOnImg(sectionName)
        setModalComponent(issue)
        setModalOpen(true)
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
                            segmentProps={getImageIssueProps()}
                            setSegment={getImageIssueSetMethod()}
                        />
                    )
                    }

                    {modalComponent === MODAL.IMAGE_ISSUE && (
                        <ImageIssue
                            onClose={() => setModalOpen(false)}
                            segmentProps={getImageIssueProps()}
                            setSegment={getImageIssueSetMethod()}
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
                                sectionName,
                                imagesObject: segmentImg,
                                onClick: () => handleWorkingOnIssue(MODAL.ISSUE, sectionName)
                            }} />
                        </div>
                    ))
            }

            {
                Object.keys(additionalImg).map(sectionName =>
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
    additionImg: PropTypes.shape({}),
    segmentImg: PropTypes.shape({}),
}

Chart.defaultProps = {
    additionImg: {},
    segmentImg: {},
}

export default Chart
