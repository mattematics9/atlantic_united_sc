import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
  Chip,
  Container
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import stonyBrookPreTravel from '../../../images/stony-brook-pre-travel.png'

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, 
    secondary: { main: "#C62828" }, 
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



export default function Header() {
  return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
                pt: {xs: '70px', sm: '100px'},
                pb: {xs: '100px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(120deg, rgba(0, 0, 49, 0.95) 0%, rgba(255, 0, 0, 0.5) 100%), url(${stonyBrookPreTravel})`,
                },
                backgroundPosition: {xs: 'center'},
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Pre-Travel Academy"
                sx={{ bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "32px", sm: "40px", lg: "60px"}}}>
                Bridge the gap between intramural and travel.
              </Typography>
              <Typography variant="h6" sx={{ fontSize: {xs: '17px'}, opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Pre-Travel Academy is a fun, skill-focused bridge to travel soccer from intramurals for 1st & 2nd graders.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button component={Link} to="https://system.gotsport.com/programs/D45748060?reg_role=player" target="_blank" size="large" variant="contained" color="secondary">
                  Join Our Pre-Travel Program
                </Button>
                <Button href="#pre-travel-highlights" size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>

        </Box>
    </ThemeProvider>
  );
}
