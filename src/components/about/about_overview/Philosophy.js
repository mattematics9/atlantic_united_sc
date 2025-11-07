import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import backgroundImage from '../../../images/clouds3.png'


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
  },
});



export default function Header() {
  return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
                py: '100px',
                color: "#e9eef6",
                backgroundImage: {
                    xs: `url(${backgroundImage})`,

                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box container>
                <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, textAlign: 'center'}}>
                    Philosophy
                </Typography>
            </Box>

            <Box sx={{mt: '20px'}}>
                <Typography variant="h6" sx={{pl: {xs: '20px', sm: '40px', md: '100px', lg: '140px'}, pr: {xs: '20px', sm: '70px', md: '100px', lg: '140px'}}}>
                    From aspiring young players to elite athletes, Atlantic United provides a home for every soccer enthusiast. We offer a comprehensive range of programs designed for all ages and skill levels, ensuring every player has the opportunity to grow, develop, and pursue their passion for the game. 
                </Typography>
            </Box>

        </Box>
    </ThemeProvider>
  );
}