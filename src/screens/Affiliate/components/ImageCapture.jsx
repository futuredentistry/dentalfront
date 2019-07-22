import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import AffiliateImageCapture from 'ui/AffiliateImageCapture'

const ImageCapture = ({ reportId, segmentImg, setSegmentImg, additionalImg, setAdditionalImg }) => {
    const onSetSegment = (segmentName, url) => setSegmentImg({ ...segmentImg, ...{ [segmentName]: url } })
    const onSetAdditionalImg = (segmentName, url) => setAdditionalImg({ ...additionalImg, ...{ [segmentName]: url } })

    return (
        <>
            <Typography variant="h4">
                Let’s get started
            </Typography>
            <br />

            {
                Object.keys(segmentImg).map(
                    (segmentName, photoNumber) => (
                        <div key={segmentName}>
                            <AffiliateImageCapture
                                {...{
                                    photoNumber,
                                    segmentName,
                                    reportId,
                                    imageSrc: segmentImg[segmentName],
                                    setImageSrc: onSetSegment,
                                    reqiredImg: true,
                                }}
                            />
                        </div>
                    )
                )
            }

            <Typography variant="h5">
                Does the patient have any ulcers or sores they want a dentist to look at?
            </Typography>
            <br />

            {
                Object.keys(additionalImg).map(
                    (segmentName, photoNumber) => (
                        <div key={segmentName}>
                            <AffiliateImageCapture
                                {...{
                                    photoNumber,
                                    segmentName,
                                    reportId,
                                    imageSrc: additionalImg[segmentName],
                                    setImageSrc: onSetAdditionalImg,
                                    reqiredImg: false,
                                }}
                            />
                        </div>
                    )
                )
            }

            <Button
                variant="text"
                color="primary"
                onClick={() => {
                    const sdditionalKey = `Additional ${++Object.keys(additionalImg).length}`
                    setAdditionalImg({ ...additionalImg, ...{ [sdditionalKey]: null } })
                }
                }
            >
                {
                    Object.keys(additionalImg).length === 0
                        ? 'Yes, I’ll take an additional image'
                        : 'Any other additional images required'
                }
            </Button>

        </>
    )
}

ImageCapture.propTypes = {
    segmentImg: PropTypes.shape({}).isRequired,
    setSegmentImg: PropTypes.func.isRequired,
    additionalImg: PropTypes.shape({}).isRequired,
    setAdditionalImg: PropTypes.func.isRequired,
    reportId: PropTypes.string.isRequired,
}

export default ImageCapture
