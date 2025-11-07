import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

import backgroundImage from '../../../images/ward_melville_hs2.png'

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

const UnifyingLongIsland = () => {

  return (
    <ThemeProvider theme={theme}>
        <Box id='unifying-long-island'
            sx={{
                py: ''
              
            }}
        >
            <Card 
            sx={{ 
                p: { xs: 1, md: 2 },
                background: `linear-gradient(120deg, rgba(0, 12, 30, .5), rgba(128, 0, 0, .5)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <CardContent sx={{color: 'white'}}>
                    <Typography variant="h3" gutterBottom 
                      sx={{
                        textAlign: 'center', 
                        my: '50px',
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "white",
                            content: '" "',
                            width: "80px",
                            margin: "20px auto"
                        },
                      }}>
                    Unifying Long Island Soccer
                    </Typography>
                    <Typography sx={{ mt: 3, mb: 3, fontSize: "18px", fontWeight: 600, fontStyle: "italic" }}>
                        Atlantic United Soccer Club brings together the proud traditions of three long-standing Long Island programs - LGN Soccer Club, Three Village Soccer Club, and Middle Country Soccer Club. While maintaining the customs and community feel amongst our constituent clubs, we strategically come together to better serve our families with one unified pathway and curriculum that produces teams that compete at the state, regional, and national levels.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </ThemeProvider>
  )
}

export default UnifyingLongIsland