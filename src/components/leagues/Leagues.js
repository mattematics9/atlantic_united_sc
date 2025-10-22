import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

//Logos
import MLSNextLogo from '../../images/logos/mls-next-logo.png'
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-9.png'
import NationalLeagueLogo from '../../images/logos/national-league-logo.png'
import EDPLogo from '../../images/logos/edp-logo.png'
import LIJSLlogo from '../../images/logos/lijsl-logo.png'

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#0a0d14" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
});



const defaultLeagueLogos = {
  mlsNext: MLSNextLogo,
  gaAspire: GAAspireLogo,
  nationalLeague: NationalLeagueLogo,
  edp: EDPLogo,
  lijsl: LIJSLlogo
};


export default function Leagues({ leagueLogos = defaultLeagueLogos }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* COMPETITIONS / LEAGUES */}
        <Container sx={{ py: 8 }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
            <Chip icon={<PublicIcon />} color="primary" label="Elite Competition Platform" />
            <Typography variant="h3">Compete at the Highest Level</Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, opacity: 0.9 }}>
              Our teams battle weekly in the nation’s premier youth leagues.
            </Typography>
          </Stack>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {[{
              name: "MLS NEXT",
              src: leagueLogos.mlsNext,
            }, {
              name: "GA Aspire",
              src: leagueLogos.gaAspire,
            }, {
              name: "National League",
              src: leagueLogos.nationalLeague,
            }, {
              name: "EDP",
              src: leagueLogos.edp,
            }, {
              name: "LIJSL",
              src: leagueLogos.lijsl,
            }].map((l) => (
              <Grid key={l.name} item xs={6} sm={4} md={2}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: (t) => `1px solid ${t.palette.divider}`,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={l.src}
                    alt={`${l.name} logo`}
                    sx={{
                        width: 140,
                        height: 100,
                        bgcolor: "#fff",
                        img: {
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        padding: '10px'
                        },
                    }}
                  />

                  <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.9, color: 'white' }}>
                    {l.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
    </ThemeProvider>
  );
}
