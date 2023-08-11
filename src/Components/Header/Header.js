import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Header.css'

const theme = createTheme ({
  palette: {
    primary: {
      main:'#333'
    }
  }
})

export default function Header(props) {
  return (
    <div id='header'>
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <div className="nav">
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained">Home</Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained">Cadastro</Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button color="primary" variant="contained">Registro</Button>
          </ThemeProvider>
        </div>
    </div>
  )
}
