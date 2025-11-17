import React from "react";
import {
  Box,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import wildlingsVsHotaStartersFront1 from '../../../images/wildlings_vs_hota_state_cup_finals_starters_front.png'
import wildlingsVsHotaStartersFront2 from '../../../images/test5.png'
import test from '../../../images/test7.png'
import test2 from '../../../images/test8.png'
import brandon from '../../../images/brandon-lopez.png'
import dylan from '../../../images/dylan2.png'
import force from '../../../images/test9.png'

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
                pt: {xs: '170px'},
                pb: {xs: '130px;'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(120deg, rgba(255, 0, 0, 0.4) 0%, rgba(255, 0, 0, 0.4) 100%), url(${force})`,
                    sm: `linear-gradient(45deg, rgba(0, 0, 49, 0.7) 0%, rgba(255, 0, 0, 0.3) 100%), url(${test})`

                },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box container>
                <Typography variant="h2" 
                    sx={{
                        p: '10px', 
                        fontSize: {xs: '40px', md: '50px', lg: '60px'}, 
                        textAlign: 'center',
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "rgba(255, 255, 255, 0.7)",
                            content: '" "',
                            width: "80px",
                            margin: "10px auto"
                        }
                    }}>
                        Programs Overview
                </Typography>
            </Box>

            <Box sx={{mt: '30px'}}>
                <Typography variant="body1" 
                    sx={{
                        fontSize: {xs: '16px', sm: '20px', md: '24px'}, 
                        px: {xs: '20px', sm: '40px', md: '100px', lg: '140px'},
                    }}>
                        Atlantic United Soccer Club provides a full range of programs designed to support players of all ages, skill levels, and interests.  From the "weekend warrior" to the "soccer is life" player, we have something for everyone.                
                </Typography>
            </Box>

        </Box>
    </ThemeProvider>
  );
}