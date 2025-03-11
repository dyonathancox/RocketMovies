import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components/'
import GlobalStyles from './styles/global'
import theme from './styles/theme'


import {Profile} from './pages/Profile/Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider  theme={theme}>
    <GlobalStyles />
    <Profile />
  </ThemeProvider>,
)