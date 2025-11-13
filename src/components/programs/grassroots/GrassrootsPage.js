import React from "react";
import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ----- Theme ---------------------------------------------------------------
const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#000716ff" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
});

// ----- Utilities -----------------------------------------------------------
const PlaceholderImage = ({ label = "Add image", aspect = "16/9" }) => (
  <Paper
    variant="outlined"
    sx={{
      aspectRatio: aspect,
      display: "grid",
      placeItems: "center",
      borderStyle: "dashed",
      bgcolor: (t) => (t.palette.mode === "dark" ? "#0a0f1a" : "#f7f9fc"),
      color: "text.secondary",
      p: 2,
    }}
  >
    <Typography variant="body2">{label}</Typography>
  </Paper>
);

const FeatureItem = ({ children }) => (
  <ListItem sx={{ px: 0 }}>
    <ListItemIcon sx={{ minWidth: 36 }}>
      <CheckCircleIcon color="secondary" />
    </ListItemIcon>
    <ListItemText primaryTypographyProps={{ variant: "body1" }}>
      {children}
    </ListItemText>
  </ListItem>
);

// ----- Data ----------------------------------------------------------------
const clubs = [
  {
    name: "LGN Soccer Club",
    badge: "LGN",
    programs: [
      { title: "Little Kickers", ages: "Ages 2–5" },
    ],
  },
  {
    name: "Three Village Soccer Club",
    badge: "Three Village",
    programs: [
      { title: "Little Strikers", ages: "Ages 2–5" },
    ],
  },
  {
    name: "Middle Country Soccer Club",
    badge: "Middle Country",
    programs: [
      { title: "Micro Minis", ages: "Age 3" },
      { title: "Little Kickers", ages: "Age 4" },
      { title: "Big Kickers", ages: "Age 5" },
    ],
  },
];

const typicalFeatures = [
  "Fun-first environment with age-appropriate activities",
  "Professional curriculum aligned with U.S. Soccer Grassroots principles",
  "Small-sided games to maximize touches and decision-making",
  "Certified coaches and trained volunteers",
  "Focus on coordination, balance, and ball mastery",
  "Inclusive programming—new players welcome at any time",
  "Emphasis on teamwork, respect, and sportsmanship",
  "Seasonal festivals and jamborees",
  "Parent education and clear communication",
  "Safe facilities and sensible weather policies",
];

// ----- Page ----------------------------------------------------------------
const GrassrootsPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e8eefc", minHeight: "100vh" }}>
        {/* Hero */}
        <Box
          sx={{
            pt: { xs: 8, md: 10 },
            pb: { xs: 6, md: 8 },
            background: `radial-gradient(1200px 600px at 10% -10%, rgba(13,71,161,0.4), transparent 60%), radial-gradient(1000px 520px at 90% 10%, rgba(198,40,40,0.25), transparent 60%)`,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography variant="overline" sx={{ letterSpacing: 1.5, color: "secondary.main" }}>
                  Atlantic United Grassroots
                </Typography>
                <Typography variant="h2" sx={{ mt: 1, lineHeight: 1.1 }}>
                  Soccer for Our Youngest Players
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, color: "#cfd8ff" }}>
                  LGN, Three Village, and Middle Country operate under the Atlantic United umbrella—each with a program structure designed for ages 2–5.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}>
                  <Button variant="contained" color="secondary" size="large">
                    Register / Learn More
                  </Button>
                  <Button variant="outlined" color="primary" size="large">
                    Contact Us
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                {/* Replace with real hero image */}
                <PlaceholderImage label="Hero image – smiling players" aspect="4/3" />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Clubs under the Atlantic United umbrella */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Our Clubs
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#cfd8ff" }}>
            Atlantic United is comprised of three community clubs working together to deliver a consistent, high-quality grassroots experience.
          </Typography>

          <Grid container spacing={3}>
            {clubs.map((club) => (
              <Grid item xs={12} md={4} key={club.name}>
                <Card sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.04)", backdropFilter: "blur(4px)" }}>
                  <CardContent>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <Chip label={club.badge} color="primary" variant="filled" />
                      <Typography variant="h6">{club.name}</Typography>
                    </Stack>

                    {/* Optional club image/logo slot */}
                    <PlaceholderImage label={`${club.name} image/logo`} aspect="16/9" />

                    <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.08)" }} />

                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Programs
                    </Typography>
                    <Stack spacing={1}>
                      {club.programs.map((p) => (
                        <Box
                          key={`${club.name}-${p.title}`}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 1.25,
                            borderRadius: 2,
                            bgcolor: "rgba(13,71,161,0.12)",
                          }}
                        >
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {p.title}
                          </Typography>
                          <Chip label={p.ages} size="small" color="secondary" />
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Typical Features */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "rgba(13,71,161,0.08)" }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Typical Grassroots Features
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "#cfd8ff" }}>
                  A shared philosophy with room for each club’s local flavor.
                </Typography>
                <List>
                  {typicalFeatures.map((f) => (
                    <FeatureItem key={f}>{f}</FeatureItem>
                  ))}
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <PlaceholderImage label="Training session photo" />
                  <PlaceholderImage label="Small-sided games photo" aspect="1/1" />
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Sample Weekly Flow / What to Expect */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                What to Expect
              </Typography>
              <Typography variant="body1" sx={{ color: "#cfd8ff", mb: 2 }}>
                Sessions are short, energetic, and packed with ball touches. Parents are partners in the process—especially with our youngest age groups.
              </Typography>
              <List>
                <FeatureItem>45–60 minute sessions</FeatureItem>
                <FeatureItem>Ball-per-player activities</FeatureItem>
                <FeatureItem>Play-based learning and festivals</FeatureItem>
                <FeatureItem>Clear communication and seasonal calendars</FeatureItem>
              </List>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.04)" }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Equipment Checklist
                      </Typography>
                      <List>
                        <FeatureItem>Size 3 ball (ages 2–5)</FeatureItem>
                        <FeatureItem>Shin guards & socks</FeatureItem>
                        <FeatureItem>Water bottle</FeatureItem>
                        <FeatureItem>Weather-appropriate attire</FeatureItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.04)" }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ mb: 1 }}>
                        Program Goals
                      </Typography>
                      <List>
                        <FeatureItem>Develop a love of the game</FeatureItem>
                        <FeatureItem>Build physical literacy</FeatureItem>
                        <FeatureItem>Introduce fundamentals</FeatureItem>
                        <FeatureItem>Make friends and have fun</FeatureItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Callouts for each club – quick links/images */}
        <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "rgba(198,40,40,0.08)" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mb: 3 }}>
              Ready to Play?
            </Typography>
            <Grid container spacing={3}>
              {clubs.map((club) => (
                <Grid item xs={12} md={4} key={`cta-${club.name}`}>
                  <Card sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.04)" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {club.name}
                      </Typography>
                      <PlaceholderImage label="Club-specific image / field" aspect="21/9" />
                      <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
                        <Button size="small" variant="contained" color="secondary">
                          Register
                        </Button>
                        <Button size="small" variant="outlined" color="primary">
                          Details
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Contact / Footer */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Questions about Grassroots?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cfd8ff" }}>
                We’re here to help you find the perfect starting point for your player across LGN, Three Village, and Middle Country.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ md: "flex-end" }}>
                <Button variant="contained" color="secondary" size="large">
                  Email Us
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Club Contacts
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default GrassrootsPage;
