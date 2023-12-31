import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components'
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
