import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components/'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Movie } from './pages/Movie/Movie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Movie />
    </ThemeProvider>
  </BrowserRouter>,
)