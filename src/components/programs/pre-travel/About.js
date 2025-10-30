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
        <Box>
            <Card sx={{ p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h5" color="primary" gutterBottom>
                    About the Atlantic United Pre-Travel Academy Program
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                    A fun, skill-focused step beyond intramurals. At this age, the focus is on building basic techniques - such as dribbling, passing, controlling the ball, and scoring - while keeping the sessions enjoyable and developmentally appropriate. Players will also learn the values of teamwork, confidence, and creativity on the field. We aim to create an environment where every child feels supported, learns to love the game, and develops the foundation for future success.
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <Feature label="Dribbling" />
                        <Feature label="Passing" />
                        <Feature label="Ball Control" />
                        <Feature label="Finishing" />
                        <Feature label="Teamwork" />
                        <Feature label="Confidence" />
                        <Feature label="Creativity" />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    </ThemeProvider>
  )
}

export default About