import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

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
  shape: { borderRadius: 16 },
});

theme = responsiveFontSizes(theme);

const StrongerTogether = () => {

  return (
    <ThemeProvider theme={theme}>
        <Box id='about-travel'>
            <Card sx={{ p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h3" color="primary" gutterBottom 
                      sx={{
                        textAlign: 'center', 
                        my: '20px',
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "red",
                            content: '" "',
                            width: "80px",
                            margin: "20px auto"
                        },
                      }}>
                        Stronger Together
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '20px', mb: 2 }}>
                        Atlantic United Soccer Club brings together the proud traditions of three long-standing Long Island programs - LGN Soccer Club, Three Village Soccer Club, and Middle Country Soccer Club. While maintaining the customs and community feel amongst our constituent clubs, we strategically come together to better serve our families with one unified pathway and curriculum that produces teams that compete at the state, regional, and national levels.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </ThemeProvider>
  )
}

export default StrongerTogether