import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";

import wildlingsCelebration from '../../images/wildlings_celebration_nationals.png'
import LeagueLogos from "./LeagueLogos";

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
                pt: {xs: '210px', sm: '170px'},
                pb: {xs: '140px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(-120deg, rgba(0, 0, 49, 0.95) 0%, rgba(255, 0, 0, 0.5) 100%), url(${wildlingsCelebration})`,
                },
                backgroundPosition: "center 65px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
                <Grid size={{xs: 12, md: 7}} sx={{pl:{sm: '0px', md:'100px', lg: '150px'}}}>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
                        Atlantic United
                    </Typography>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
                        Soccer Club
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 5}} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}}}>
                    <LeagueLogos/>
                </Grid>
            </Grid>

            <Box sx={{display: {xs: 'none', sm: 'block'}, mt: '20px', fontStyle: 'italic'}}>
                <Typography variant="h6" sx={{pl: {xs: '20px', sm: '40px', md: '100px', lg: '140px'}, pr: {xs: '20px', sm: '70px', md: '100px', lg: '140px'}}}>
                    From aspiring young players to elite athletes, Atlantic United provides a home for every soccer enthusiast. We offer a comprehensive range of programs designed for all ages and skill levels, ensuring every player has the opportunity to grow, develop, and pursue their passion for the game. 
                </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{mt: '35px', pl: {xs: '20px'}, pr: {xs: '20px'}, display: 'flex', justifyContent: 'center'}}>
                <Button size="large" variant="contained" color="secondary" component={Link} to="/programs">
                    See Our Programs
                </Button>
                <Button size="large" variant="outlined" color="inherit" component={Link} to="/contact">
                    Contact Us
                </Button>
            </Stack>

        </Box>
    </ThemeProvider>
  );
}