import React, { useState } from 'react'

const HeaderFooterContext = React.createContext({
    show: true, setShow: e => e, dark: true, setDark: e => e,
})

const HeaderFooterProvider = (props) => {
    const [show, setShow] = useState(true)
    const [dark, setDark] = useState(true)
    return (
        <HeaderFooterContext.Provider value={{
            show, setShow, dark, setDark,
        }}
        >
            {props.children}
        </HeaderFooterContext.Provider>
    )
}

export { HeaderFooterContext, HeaderFooterProvider }
