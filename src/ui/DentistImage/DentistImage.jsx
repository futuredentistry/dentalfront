import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

import FirebaseContext from 'modules/Firebase'
import CaptureContainer from 'ui/CaptureContainer'

const DentistImage = ({ header, sectionName, imagesObject, onClick, }) => {
    const [url, setUrl] = useState(null)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        const fetchData = async () => firebase
            .getImgDownloadURL(imagesObject[sectionName])
            .then(url => setUrl(url))

        fetchData()
    }, [sectionName])

    return (
        <>
            {header}
            <div
                style={{ cursor: 'pointer', outline: 0, }}
                tabIndex={0}
                role="button"
                // @ts-ignore
                type="button"
                onClick={onClick}
            >
                <CaptureContainer>
                    {
                        url
                            ? <img src={url} alt="" style={{ width: '100%' }} />
                            : <CircularProgress />
                    }
                </CaptureContainer>
            </div>
        </>
    )
}

DentistImage.propsType = {
    header: PropTypes.node,
    sectionName: PropTypes.string.isRequired,
    imagesObject: PropTypes.shape({}).isRequired,
    onClick: PropTypes.func.isRequired,
}

DentistImage.defaultProps = {
    header: null,
}

export default DentistImage