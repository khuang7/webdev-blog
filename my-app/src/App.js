import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './Routes'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#3C4142'
    }
  },
  status: {
    danger: 'orange',
  },

  typography: {
    MuiTableCell: {
      fontSize: '10px'
    }
  },

  overrides: {

  }
});


export default function App() {
  return (
    <div> 
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes/>
      </ThemeProvider>
    </div>
  );
}

