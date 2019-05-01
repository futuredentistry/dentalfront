import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from 'modules/Firebase'
import { Typography } from '@material-ui/core'
import List from '@material-ui/core/List'

import PrimaryListItem from 'ui/PrimaryListItem/PrimaryListItem'

const Beemo = () => {
    const firebase = useContext(FirebaseContext)
    const [content, setContent] = useState([])
    useEffect(() => {
        firebase.getPage('beemo').then(
            (doc) => {
                if (doc.exists) {
                    const fbContent = []
                    // @ts-ignore
                    Object.values(doc.data()).map((val, i) => fbContent.push({ key: i, text: val }))
                    setContent(fbContent)
                }
            },
        )
    }, [])
    return (
        <>
            <Typography variant="h4">
                What is Beemo?
            </Typography>

            <List>
                {content.map(item => (
                    <div key={item.key}>
                        <PrimaryListItem primary={item.text} />
                        <br />
                    </div>
                ))}
            </List>
        </>
    )
}

export default Beemo
