/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

import FirebaseContext from 'modules/Firebase'
import { segment } from 'modules/Dentist/props'
import CaptureContainer from 'ui/CaptureContainer'
import PhotoCaptureHeader from 'ui/PhotoCaptureHeader'
import Dialog from 'ui/Dialog'

import Issue from './Issue'
import ImageIssue from './ImageIssue'

const images = ['Top right', 'Top middle', 'Top left', 'Bottom right', 'Bottom middle', 'Bottom left']

// ToDo move to ui
const ImageSection = ({
    sectionName, segmentImg, setWorkingOnImg, setModalComponent, setModalOpen,
}) => {
    const [url, setUrl] = useState(null)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        const fetchData = async () => firebase
            .getImgDownloadURL(segmentImg[sectionName])
            .then(url => setUrl(url))

        fetchData()
    }, [sectionName])

    const handleWorkingOnIssue = (issue) => {
        setWorkingOnImg(sectionName)
        setModalComponent(issue)
        setModalOpen(true)
    }

    return (
        <>
            <PhotoCaptureHeader {...{
                header: sectionName,
                onClick: () => handleWorkingOnIssue(MODAL.IMAGE_ISSUE),
                buttonText: 'Report an issue'
            }} />

            <div
                style={{
                    cursor: 'pointer',
                    outline: 0
                }}
                tabIndex="0"
                role="button"
                type="button"
                onClick={() => handleWorkingOnIssue(MODAL.ISSUE)}
            >
                <CaptureContainer>
                    {url
                        ? <img
                            src={url}
                            alt=""
                            style={{ width: '100%' }}
                        />
                        : <CircularProgress />}
                </CaptureContainer>
            </div>
        </>
    )
}


const MODAL = {
    ISSUE: 'ISSUE',
    IMAGE_ISSUE: 'IMAGE_ISSUE',
}

// ToDo request imgs by report id
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

            {images.map(sectionName =>
                (
                    <div key={sectionName}>
                        <ImageSection {...{
                            sectionName,
                            segmentImg,
                            setWorkingOnImg,
                            setModalComponent,
                            setModalOpen
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
