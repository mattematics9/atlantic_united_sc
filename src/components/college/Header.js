import React from "react";
import {
  Box,
  Typography,
  Grid,
  ThemeProvider,
  createTheme,
  Container
} from "@mui/material";

import brendan from "../../images/brendan-staten-island.jpeg"
import alyse from "../../images/alyse.jpg"


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


export default function Universities() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "rgba(244, 244, 244, 1)", color: "#000f26ff" }}>
        <Box>
            <Grid container>
              <Grid size={{xs: 12, md: 6}} sx={{py: '70px', px: '5px'}}>
                <Container>
                    <Typography variant="h2" component="h1" gutterBottom 
                        sx={{
                            color: "#00054aff", 
                            textAlign: 'center', 
                            fontSize: {xs: "32px", sm: "40px", lg: "60px"},
                            "&::after": {
                                display: "block",
                                height: "2px",
                                backgroundColor: "red",
                                content: '" "',
                                width: "80px",
                                margin: "10px auto"
                            }
                        }}>
                            Pathway to College Soccer
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: {xs: '17px'}, opacity: 0.95, lineHeight: 1.6 }}>
                        Our graduates consistently earn roster spots at elite NCAA programs and beyond. With dedicated recruiting support, showcase exposure, and relationships nationwide, Atlantic United players take the next step prepared and confident.
                    </Typography>
                </Container>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <Box 
                    sx={{
                        height: {xs: '300px', sm: '430px'},
                        backgroundImage: `linear-gradient(120deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.4) 100%), url(${brendan})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center'
                    }}>
                </Box>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <Box 
                    sx={{
                        height: {xs: '300px', sm: '430px'},
                        backgroundImage: `linear-gradient(120deg, rgba(0, 0, 49, 0.3) 0%, rgba(255, 0, 0, 0.4) 100%), url(${alyse})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center'
                    }}>
                </Box>
              </Grid>
              {/* <Grid size={{xs: 12, md: 6}}>
                <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
                  {[
                    "https://via.placeholder.com/120x120?text=U1",
                    "https://via.placeholder.com/120x120?text=U2",
                    "https://via.placeholder.com/120x120?text=U3",
                    "https://via.placeholder.com/120x120?text=U4",
                    "https://via.placeholder.com/120x120?text=U5",
                    "https://via.placeholder.com/120x120?text=U6",
                  ].map((logo, i) => (
                    <Grid item xs={4} key={i}>
                      <Paper
                        elevation={2}
                        sx={{ p: 2, display: "grid", placeItems: "center", bgcolor: "#fff" }}
                      >
                        <Avatar src={logo} alt={`University ${i + 1}`} sx={{ width: 72, height: 72 }} />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid> */}
            </Grid>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
