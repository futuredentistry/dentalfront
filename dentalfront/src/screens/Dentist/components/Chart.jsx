/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Dialog from 'ui/Dialog'
import Issue from './Issue'
import ImageIssue from './ImageIssue'

// ToDo request from db as a separate docs
const images = {
    'Top right': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/images%20(2).jpeg?alt=media&token=28fa66a7-3625-492b-ad4d-8eb04a193f6e',
    'Top middle': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/new-crown-biting-surface.jpg?alt=media&token=befcdfb3-df75-460e-bbef-4c1f77ef9afe',
    'Top left': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/Direct6.gif?alt=media&token=b07cb63c-40f6-4d0a-b27e-df024c37efab',
    'Bottom right': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/caries5.jpg?alt=media&token=3bd24a79-aee8-4784-848e-1f6d5c89731c',
    'Bottom middle': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/new-crown-biting-surface.jpg?alt=media&token=befcdfb3-df75-460e-bbef-4c1f77ef9afe',
    'Bottom left': 'https://firebasestorage.googleapis.com/v0/b/dental2-test.appspot.com/o/maxresdefault.jpg?alt=media&token=d34b37a3-29a6-47cc-9b01-a5246fe0adfb',
}

const MODAL = {
    ISSUE: 'ISSUE',
    IMAGE_ISSUE: 'IMAGE_ISSUE',
}

// ToDo request imgs by report id
const Chart = ({ reportId }) => {
    const [open, setModalOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState(null)
    const [workingOnImg, setWorkingOnImg] = useState(null)
    const [topRight, setTopRight] = useState(null)
    const [topMiddle, setTopMiddle] = useState(null)
    const [topLeft, setTopLeft] = useState(null)
    const [bottomRight, setBottomRight] = useState(null)
    const [bottomMiddle, setBottomMiddle] = useState(null)
    const [bottomLeft, setBottomLeft] = useState(null)

    const setImgProps = (newImgProps) => {
        switch (workingOnImg) {
            case 'Top right':
                return setTopRight({ ...topRight, ...newImgProps })
            case 'Top middle':
                return setTopMiddle({ ...topMiddle, ...newImgProps })
            case 'Top left':
                return setTopLeft({ ...topLeft, ...newImgProps })
            case 'Bottom right':
                return setBottomRight({ ...bottomRight, ...newImgProps })
            case 'Bottom middle':
                return setBottomMiddle({ ...bottomMiddle, ...newImgProps })
            case 'Bottom left':
                return setBottomLeft({ ...bottomLeft, ...newImgProps })
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
              onClose={() => {
                    setModalOpen(false)
                    setModalComponent(null)
                }}
            >
                <>
                    {modalComponent === MODAL.ISSUE && (
                        <Issue
                          setImgProps={setImgProps}
                          onClose={() => {
                                setModalOpen(false)
                                setModalComponent(null)
                            }}
                        />
                    )
                    }
                    {modalComponent === MODAL.IMAGE_ISSUE && <ImageIssue />}
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => {
                            setModalOpen(false)
                            setModalComponent(null)
                        }}
                    >

                        close without saving
                    </Button>
                </>
            </Dialog>

            {Object.keys(images).map(key => (
                // ToDo map for db objects
                <div key={key}>
                    <Grid
                      container
                      spacing={0}
                      direction="row"
                    >
                        <Grid item xs={6}>
                            <Typography variant="h5">
                                {key}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                              variant="text"
                              color="primary"
                              onClick={() => {
                                    setModalComponent(MODAL.IMAGE_ISSUE)
                                    setModalOpen(true)
                                }
                                }
                            >
                                Report an issue
                            </Button>
                        </Grid>
                    </Grid>
                    <div
                      style={{ cursor: 'pointer' }}
                      tabIndex="0"
                      role="button"
                      type="button"
                      onClick={() => {
                            setWorkingOnImg(key)
                            setModalComponent(MODAL.ISSUE)
                            setModalOpen(true)
                        }
                        }
                    >

                        <img
                          src={images[key]}
                          alt=""
                          style={{
                                maxWidth: '-webkit-fill-available',
                                padding: '5%',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            ))
            }

        </>
    )
}

Chart.propTypes = {
    reportId: PropTypes.string,
}

Chart.defaultProps = {
    reportId: null,
}


export default Chart
