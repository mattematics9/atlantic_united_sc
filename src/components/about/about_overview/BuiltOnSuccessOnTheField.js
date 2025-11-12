import React from 'react'
import { Box, Typography } from '@mui/material'
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

import backgroundImage from '../../../images/caso2.png'

// ---- THEME ----
let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#002c7dff" }, // Blue
    secondary: { main: "#e21d2b" }, // Red
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
  },
});

theme = responsiveFontSizes(theme);

const BuiltOnSuccessOnTheField = () => {

  return (
    <ThemeProvider theme={theme}>
        <Box id='unifying-long-island'>
            <Box 
                sx={{ 
                    background: `linear-gradient(120deg, rgba(0, 2, 128, 0.55), rgba(0,2,128, .55)), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: {xs: '250px', sm: '350px'},
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pb: {xs: '30px', sm: '0px'}
                }}
            >
                <Typography variant="h3" gutterBottom 
                    sx={{
                        textAlign: 'center', 
                    }}>
                    A Club Built on Success on the Field
                </Typography>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default BuiltOnSuccessOnTheField