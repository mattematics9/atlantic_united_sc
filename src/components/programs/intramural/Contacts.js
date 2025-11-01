import * as React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";


// ---- THEME ----
let theme = createTheme({
  palette: {
    mode: "light",
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
    { name: "Three Village", location: "Stony Brook, NY", contact: "Deb Skartsiaris", email: "debskats@outlook.com" },
    { name: "Middle Country", location: "Centereach, NY", contact: "Frank Rudilosso", email: "Frank@mccsoccer.org" },
  ];

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        textColor="primary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderRadius: 1, boxShadow: 1, bgcolor: "background.paper" }}
      >
        {clubs.map((c) => (
          <Tab key={c.name} label={`${c.name}`} />
        ))}
      </Tabs>
      <Card sx={{ mt: 2, mb: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ my: '30px', textAlign: 'center', color: "#002c7dff"}}>
            Atlantic United at {clubs[tab].name}
          </Typography>
          <Typography variant="body1">
            Location: {clubs[tab].location}<br/>
            Contact: {clubs[tab].contact}<br/>
            Email: {clubs[tab].email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Each family is enouraged to participate within their town while following the unified curriculum that spans across all community clubs operating under the Atlantic United umbrella.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// ---- MAIN COMPONENT ----
export default function Contacts({ images }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        background: (t) => `linear-gradient(90deg, rgba(0,0,31,1) 0%, ${t.palette.secondary.main} 100%)`, color: "common.white",
        py: { xs: 5, sm: 10 },
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom sx={{ my: '30px', textAlign: 'center', color: "white"}}>
            Intramural Contacts
          </Typography>
          <Typography variant="body1" sx={{ my: '30px', color: "white"}}>
            Choose a club/location that is convenient for you geographically.  Atlantic United Intramural operates out of LGN (Selden), Three Village (Stony Brook), and Middle Country (Centereach). 
          </Typography>
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
