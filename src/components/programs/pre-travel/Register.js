import * as React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";


// ---- THEME ----
let theme = createTheme({
  palette: {
    mode: "light",
    // primary: { main: "#0b5fff" }, // Blue
    primary: { main: "#002c7dff" }, // Blue
    secondary: { main: "#e21d2b" }, // Red
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    subtitle1: { fontWeight: 600 },
  },
  shape: { borderRadius: 16 },
});

theme = responsiveFontSizes(theme);

// ---- CLUB TABS ----
function ClubTabs() {
  const [tab, setTab] = React.useState(0);
  const clubs = [
    { name: "LGN", location: "Selden, NY", contact: "Dave Hickman", email: "davidhickman886@yahoo.com" },
    { name: "Three Village", location: "Stony Brook, NY", contact: "Leigh Pilkington", email: "trainasap@yahoo.com" },
    { name: "Middle Country", location: "Centereach, NY", contact: "Middle Country players looking to join the Pre-Travel Academy will register through LGN or Three Village", email: "See LGN or Three Village Contacts" },
  ];

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        textColor="primary"
        indicatorColor="secondary"
        variant="fullWidth" 
        sx={{ borderRadius: 1, boxShadow: 1, bgcolor: "background.paper" }}
      >
        {clubs.map((c) => (
          <Tab key={c.name} label={`${c.name}`} />
        ))}
      </Tabs>
      <Card sx={{ mt: 2, mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{my: '30px', textAlign: 'center', color: "#002c7dff"}}>
            Atlantic United at {clubs[tab].name} - Pre-Travel Academy
          </Typography>
          <Typography variant="body1">
            Location: {clubs[tab].location}<br/>
            Contact: {clubs[tab].contact}<br/>
            Email: {clubs[tab].email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Each child is enouraged to train within their town while following the unified curriculum that spans across all community clubs under the Atlantic United umbrella.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// ---- MAIN COMPONENT ----
export default function Register({ images }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        background: (t) => `linear-gradient(90deg, rgba(0,0,31,1) 0%, ${t.palette.secondary.main} 100%)`, color: "common.white",
        py: { xs: 10 },
      }}>
        <Container maxWidth="lg">
          {/* Register Tabs */}
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={5}>
              <ClubTabs />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
