import React, { useState } from 'react'

const HeaderFooterContext = React.createContext([{}, () => { }])

const HeaderFooterProvider = (props) => {
    const [show, setShow] = useState(true)
    const [dark, setDark] = useState(true)
    return (
        <HeaderFooterContext.Provider value={[show, setShow]}>
            {props.children}
        </HeaderFooterContext.Provider>
    )
}

export { HeaderFooterContext, HeaderFooterProvider }
