import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components/'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { CreateMovie } from './pages/CreateMovie/CreateMovie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CreateMovie />
    </ThemeProvider>
  </BrowserRouter>,
)