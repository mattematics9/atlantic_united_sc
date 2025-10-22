import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import wildlingsCelebration from '../../../images/wildlings_celebration_national_league.jpg'

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

export default function TravelHeader() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 420, md: 560 },
            display: "grid",
            alignItems: "center",
            overflow: "hidden",
          }}
          role="banner"
          aria-label="Atlantic United Travel Academy hero section"
        >
          <Box
            component="img"
            src={wildlingsCelebration}
            alt="Atlantic United players in action"
            sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                filter: "grayscale(20%) contrast(115%)",
                transform: "scale(1.05)", // 👈 shifts image down
                objectFit: "cover",
            }}
            // sx={{
            //   position: "absolute",
            //   inset: 0,
            //   width: "100%",
            // //   height: "100%",
            // //   objectFit: "cover",
            //   filter: "grayscale(20%) contrast(115%)",
            //   transform: "scale(1.05)",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center 0px",
            //   backgroundRepeat: "no-repeat",
            // }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                // "linear-gradient(120deg, rgba(13,71,161,0.85) 0%, rgba(198,40,40,0.75) 100%)",
                "linear-gradient(120deg, rgba(0,0,31,.9) 0%, rgba(198,40,40,0.75) 100%)",
            }}
          />

          <Container sx={{ position: "relative", zIndex: 1, py: {xs: 7, sm: 10} }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Travel Academy"
                // sx={{ bgcolor: "#fff", color: "#C62828", fontWeight: 800 }}
                sx={{ bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "40px", sm: "40px", lg: "60px"}}}>
                Elite Player Pathway. National Stage.
              </Typography>
              <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}, opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Travel Academy is a high-performance environment
                designed to develop complete soccer players—technically sharp, tactically
                intelligent, and relentlessly competitive. 
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button component={Link} to="https://system.gotsport.com/programs/D45748060?reg_role=player" target="_blank" size="large" variant="contained" color="secondary">
                  Join Our Travel Program
                </Button>
                <Button href="#achievements" size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}

