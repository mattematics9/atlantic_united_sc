import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

//Images
import wildlingsCelebration from '../../images/wildlings_celebration_nationals.png'

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
        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: 420, md: 560 },
            display: "grid",
            alignItems: "center",
            overflow: "hidden",
          }}
          role="banner"
          aria-label="Atlantic United Travel Academy hero section"
        >
          <Box
            component="img"
            src={wildlingsCelebration}
            alt="Atlantic United players in action"
            sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                filter: "grayscale(20%) contrast(115%)",
                transform: "translateY(70px) scale(1.05)", // 👈 shifts image down
                objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, rgba(0,0,31,.9) 0%, rgba(198,40,40,0.75) 100%)",
            }}
          />

          <Container sx={{ position: "relative", zIndex: 1, py: {xs: 7, sm: 10} }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "40px", sm: "40px", lg: "60px"}}}>
                ATLANTIC UNITED<br/>SOCCER CLUB
              </Typography>
              <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}, opacity: 0.95, lineHeight: 1.6 }}>
                Atlantic United travel teams compete at the highest levels of youth soccer nationwide, while we also provide a full range of programs designed to support players of all ages, skill levels, and interests.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button size="large" variant="contained" color="secondary">
                  See Our Programs
                </Button>
                <Button size="large" variant="outlined" color="inherit">
                  Contact Us
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
