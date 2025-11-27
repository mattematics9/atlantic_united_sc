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

const Header = () => {

  return (
    <ThemeProvider theme={theme}>
        <Box id='about-header'>
            <Box 
                sx={{ 
                    // background: "linear-gradient(120deg, rgba(234, 234, 234, 1), rgba(3, 0, 42, 1))",
                    backgroundColor: "rgba(251, 251, 255, 1)",
                    height: '250px',
                    // color: 'white',
                    color: 'rgba(0, 6, 91, 1)',
                    display: {xs: 'flex', sm: 'none'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h3" gutterBottom 
                    sx={{
                        mt: '30px',
                        textAlign: 'center', 
                          "&::after": {
                          display: "block",
                          height: "2px",
                          backgroundColor: "red",
                          content: '" "',
                          width: "80px",
                          margin: "10px auto",
                      },
                    }}>
                    History of Success
                </Typography>
                <Typography variant="h6" gutterBottom 
                    sx={{ 
                        px: '17px'
                    }}>
                    AUSC has a extensive track record of accomplishment at the highest levels of youth soccer in the nation.
                </Typography>
            </Box>
            <Box 
                sx={{ 
                    background: `linear-gradient(120deg, rgba(0, 17, 255, 0.35), rgba(0, 17, 255, 0.35)), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: {xs: '150px', sm: '350px'},
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
                        display: {xs: 'none', sm: 'block'}
                    }}>
                    History of Success
                </Typography>
            </Box>
        </Box>
    </ThemeProvider>
  )
}

export default Header