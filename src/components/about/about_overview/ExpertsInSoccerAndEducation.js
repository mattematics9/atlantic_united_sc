import React from "react";
import {
  Box,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  Container
} from "@mui/material";

import wildlingsCones from "../../../images/wildlings_cones.png"


const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "rgb(0, 0, 31)" },
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
      <Box sx={{ bgcolor: "rgba(244, 244, 244, 1)", color: "#000f26ff" }}>
        <Box>
            <Grid container>
              <Grid size={{xs: 12, md: 5}} sx={{py: '70px', px: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" component="h1" gutterBottom 
                    sx={{
                        color: "#00054aff", 
                        textAlign: 'center', 
                        fontSize: {xs: "32px", sm: "40px", lg: "60px"},
                        border: '1px dotted red',
                        backgroundColor: 'rgba(240, 240, 240, 1)',
                        p: '10px'
                    }}>
                        Experts in Soccer <span style={{color: 'rgba(118, 186, 255, 1)'}}>AND</span> Education
                </Typography>
              </Grid>
              <Grid size={{xs: 12, md: 7}}>
                <Box 
                    sx={{
                        height: {xs: '400px', sm: '550px'},
                        backgroundImage: `linear-gradient(120deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.4) 100%), url(${wildlingsCones})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center'
                    }}>
                </Box>
              </Grid>
            </Grid>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
