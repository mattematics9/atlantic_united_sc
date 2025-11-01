import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import wildlingsVsHotaStartersFront from '../../../images/wildlings_vs_hota_state_cup_finals_starters_front.png'
import { rgb } from "d3";

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
                pt: {xs: '130px'},
                pb: {xs: '100px;'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(45deg, rgba(0, 0, 49, 0.7) 0%, rgba(255, 0, 0, 0.5) 100%), url(${wildlingsVsHotaStartersFront})`,
                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box container sx={{mb: {xs: '50px', sm: '70px'}}}>
                <Typography variant="h2" 
                    sx={{
                        border: '1px solid white', 
                        p: '10px', 
                        fontSize: {xs: '40px', md: '50px', lg: '60px'}, 
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, rgba(0, 0, 49, 0.2) 0%, rgba(0, 0, 49, 0.2) 100%)'
                    }}>
                        PROGRAMS OVERVIEW
                </Typography>
            </Box>

            <Box sx={{ mt: '20px', fontStyle: 'italic'}}>
                <Typography variant="body1" 
                    sx={{
                        fontSize: {xs: '16px', sm: '20px'}, 
                        px: {xs: '20px', sm: '40px', md: '100px', lg: '140px'},
                    }}>
                        Atlantic United Soccer Club provides a full range of programs designed to support players of all ages, skill levels, and interests.  From the "sunday weekend warrior" to the "soccer is life" player, we have a program for everyone.                
                </Typography>
            </Box>

        </Box>
    </ThemeProvider>
  );
}