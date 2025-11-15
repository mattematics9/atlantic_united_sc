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

import sharks from '../../../images/sharks.jpg'

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
                    xs: `linear-gradient(120deg, rgba(0, 0, 49, 0.75) 0%, rgba(255, 0, 0, 0.4) 100%), url(${sharks})`,
                },
                backgroundPosition: {xs: 'center 60px'},
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Intramural"
                sx={{ bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "32px", sm: "40px", lg: "60px"}}}>
                Fun. <br/> Friends.  <br/>Fundamentals.  
              </Typography>
              <Typography variant="h6" sx={{ fontSize: {xs: '17px'}, opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Intramural program is a fun-focused program that helps players spark their love and understanding of soccer.   
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} href="#intramural-programs" size="large" variant="contained" color="secondary">
                  Join Our Intramural Program
                </Button>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} href="#about-intramural" size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>

        </Box>
    </ThemeProvider>
  );
}
