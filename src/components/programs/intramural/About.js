import React from 'react'
import { Box, Card, CardContent, Typography, Stack, Chip } from '@mui/material'
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
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

const About = () => {

    // ---- FEATURE CHIP ----
function Feature({ label }) {
  return (
    <Chip
      icon={<SportsSoccerIcon />}
      label={label}
      color="primary"
      variant="outlined"
      sx={{ fontWeight: 600 }}
    />
  );
}

  return (
    <ThemeProvider theme={theme}>
        <Box id="about-intramural">
            <Card sx={{ p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h4" color="primary" gutterBottom sx={{textAlign: 'center', my: '20px'}}>
                    About Intramural
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                    A fun-focused initial step into soccer. At this age, the focus is on cultivating a player's love and interest of the game while demonstrating basic foundational skills - such as dribbling, passing, controlling the ball, and scoring.  The games are enjoyable and developmentally appropriate, and take place at consitent times and closeby locations to maximize time and community interaction.  Players will also learn the values of teamwork, confidence, and creativity on the field. We aim to create an environment where every child feels supported, learns to love the game, and develops the foundation for future success.
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent={'center'}>
                        <Feature label="Fun" />
                        <Feature label="Love for Soccer" />
                        <Feature label="Friendships" />
                        <Feature label="Dribbling" />
                        <Feature label="Passing" />
                        <Feature label="Shooting" />
                        <Feature label="Defending" />
                        <Feature label="Natural Creativity" />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    </ThemeProvider>
  )
}

export default About