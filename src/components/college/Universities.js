import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
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


export default function Universities() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        <Box sx={{
          py: {xs: 5, sm: 8},
          background:
            "linear-gradient(90deg, rgba(13,71,161,0.15), rgba(255, 0, 0, 0.35))",
        }}>
          <Container>
            <Grid container spacing={4} alignItems="center" sx={{display: 'flex', justifyContent: 'center'}}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom sx={{fontSize: {xs: '33px', sm: '50px'}, textAlign: 'center', my: {xs: '30px', sm: '60px'}}}>
                  Pathway to College Soccer
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.95, mb: 4 }}>
                  Our graduates consistently earn roster spots at elite NCAA programs
                  and beyond. With dedicated recruiting support, showcase exposure,
                  and relationships nationwide, Atlantic United players take the next
                  step prepared and confident.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
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
              </Grid>
            </Grid>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
