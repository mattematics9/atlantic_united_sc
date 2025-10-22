import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
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



export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* CTA */}
        <Container sx={{ py: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              background:
                "linear-gradient(120deg, rgba(13,71,161,0.35), rgba(198,40,40,0.35))",
              border: (t) => `1px solid ${t.palette.primary.main}33`,
            }}
          >
            <Grid container spacing={3} alignItems="center" sx={{color: 'white'}}>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom>
                  Ready to elevate your game?
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.95 }}>
                  Trials run year round. Contact us to attend an open practice and be evaluated by one of our coaches.  
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={2}>
                  <Button size="large" variant="contained" color="secondary">
                    See Our Programs
                  </Button>
                  <Button size="large" variant="outlined" color="white">
                    Contact Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>

      </Box>
    </ThemeProvider>
  );
}
