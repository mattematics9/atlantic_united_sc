import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  createTheme
} from "@mui/material";

import wildlingsCelebration1 from '../../images/wildlings_celebration_national_league.jpg'
import wildlingsCelebration2 from '../../images/test3.png'
import LeagueLogos from "../logos/LeagueLogos";

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
    h4: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
});



export default function Header() {
  return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
                pt: {xs: '235px', sm: '200px', md: '270px'},
                pb: {xs: '180px', sm: '100px', md: '170px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(45deg, rgba(0, 0, 49, 0.85) 0%, rgba(255, 0, 0, 0.38) 100%), url(${wildlingsCelebration2})`,
                    // sm: `linear-gradient(120deg, rgba(0, 0, 49, 0.75) 0%, rgba(255, 0, 0, 0.4) 100%), url(${wildlingsCelebration1})`                
                    // xs: `linear-gradient(180deg,rgba(0, 0, 49, 0.55) 0%, rgba(0, 0, 49, 0.55) 100%), url(${wildlingsCelebration2})`,
                    sm: `linear-gradient(225deg, rgba(0, 0, 49, 0.85) 0%, rgba(255, 0, 0, 0.3) 100%), url(${wildlingsCelebration1})`

                },
                backgroundPosition: {xs: "center 65px", sm: "center 0px"},
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
                <Grid size={{xs: 12, md: 7}} sx={{pl:{sm: '0px', md:'100px', lg: '150px'}}}>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center'}}>
                        Atlantic United
                    </Typography>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center'}}>
                        Soccer Club
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 5}} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}}}>
                    <LeagueLogos/>
                </Grid>
            </Grid> */}

            <Box>
                <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, textAlign: 'center'}}>
                    Atlantic United
                </Typography>
            </Box>

            <Box sx={{ mt: '20px'}}>
                <Typography variant="h4" sx={{fontSize: {xs: '20px', sm: '26px', md: '33px', lg: '40px'}, textAlign: 'center', mt: '20px'}}>
                    The Highest Achieving, Fastest Growing Soccer Club in NY.
                </Typography>
            </Box>

            <Box sx={{display: {xs: 'none', sm: 'block'}, mt: '20px'}}>
                <Typography variant="h6" sx={{pl: {xs: '20px', sm: '40px', md: '100px', lg: '140px'}, pr: {xs: '20px', sm: '70px', md: '100px', lg: '140px'}}}>
                    From aspiring young players to elite athletes, Atlantic United provides a home for every soccer enthusiast. We offer a comprehensive range of programs designed for all ages and skill levels, ensuring every player has the opportunity to grow, develop, and pursue their passion for the game. 
                </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{mt: '35px', pl: {xs: '20px'}, pr: {xs: '20px'}, display: 'flex', justifyContent: 'center'}}>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} size="large" variant="outlined" color="inherit" component={Link} to="/contact">
                    Contact Us
                </Button>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} size="large" variant="contained" color="secondary" component={Link} to="/programs">
                    See Our Programs
                </Button>
            </Stack>

            {/* <Box sx={{ mt: '20px'}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <LeagueLogos/>
                </Box>
            </Box> */}

        </Box>
    </ThemeProvider>
  );
}