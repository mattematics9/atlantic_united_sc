import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import wildlingsCelebration1 from '../../images/wildlings_celebration_national_league.jpg'
import wildlingsCelebration2 from '../../images/test3.png'

export default function Header() {
  return (
        <Box
            sx={{
                pt: {xs: '235px', sm: '200px', md: '270px'},
                pb: {xs: '180px', sm: '100px', md: '170px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(45deg, rgba(0, 0, 49, 0.85) 0%, rgba(255, 0, 0, 0.38) 100%), url(${wildlingsCelebration2})`,
                    sm: `linear-gradient(225deg, rgba(0, 0, 49, 0.85) 0%, rgba(255, 0, 0, 0.3) 100%), url(${wildlingsCelebration1})`

                },
                backgroundPosition: {xs: "center 65px", sm: "center 0px"},
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box>
                <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, textAlign: 'center'}}>
                    Atlantic United
                </Typography>
            </Box>

            <Box sx={{ mt: '20px'}}>
                <Typography variant="h4" sx={{fontSize: {xs: '20px', sm: '26px', md: '33px', lg: '35px'}, textAlign: 'center', mt: '20px'}}>
                    The Highest Achieving, Fastest Growing Soccer Club on Long Island.
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
        </Box>
  );
}