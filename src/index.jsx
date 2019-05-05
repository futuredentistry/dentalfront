import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import { HeaderFooterProvider } from 'modules/HeaderFooter/context'
import App from './App'

import MiuiTheme from 'modules/MiuiTheme'

import './style.scss'

// @ts-ignore
const theme = createMuiTheme(MiuiTheme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <HeaderFooterProvider>
      <App />
    </HeaderFooterProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
