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
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import preTravelAcademy1 from '../../images/stony-brook-pre-travel.png'
import preTravelAcademy2 from '../../images/sharks.jpg'
import preTravelAcademy3 from '../../images/three_village_intramural_1.png'

// ---- THEME ----
let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0b5fff" }, // Blue
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

// ---- SIMPLE CAROUSEL ----
function ImageCarousel({ images = [], interval = 5000, height = 360, rounded = 16, fit = "contain", ratio = "16/9" }) {
  const [index, setIndex] = React.useState(0);
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (!images.length) {
    images = [
      preTravelAcademy1,
      preTravelAcademy2,
      preTravelAcademy3,
    ];
  }

  // --- Robust ratio box to guarantee height ---
  const [rw, rh] = String(ratio).split("/").map(Number);
  const padTop = rw && rh ? `${(rh / rw) * 100}%` : undefined;

  return (
    <Box sx={{ position: "relative", borderRadius: rounded, boxShadow: 3, overflow: "hidden", width: "100%" }}>
      <Box sx={{ position: "relative", width: "100%", pt: padTop ?? 0, height: padTop ? 0 : { xs: height * 0.7, sm: height }, bgcolor: "#000" }}>
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: `${Math.max(images.length, 1) * 100}%`,
              transform: `translateX(-${index * (100 / Math.max(images.length, 1))}%)`,
              transition: "transform 600ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            {images.map((src, i) => (
              <Box key={i} sx={{ width: `${100 / Math.max(images.length, 1)}%`, minWidth: `${100 / Math.max(images.length, 1)}%`, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#000" }}>
                <img
                  src={src}
                  alt={`Academy slide ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: fit === "contain" ? "contain" : "cover", objectPosition: "center", display: "block", userSelect: "none", pointerEvents: "none" }}
                />
              </Box>
            ))}
          </Box>

          {/* Controls */}
          <IconButton
            aria-label="previous slide"
            onClick={prev}
            size={isSmall ? "small" : "medium"}
            sx={{ position: "absolute", top: "50%", left: 8, transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,.8)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
          >
            <ArrowBackIosNewIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="next slide"
            onClick={next}
            size={isSmall ? "small" : "medium"}
            sx={{ position: "absolute", top: "50%", right: 8, transform: "translateY(-50%)", bgcolor: "rgba(255,255,255,.8)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
          >
            <ArrowForwardIosIcon fontSize="inherit" />
          </IconButton>

          {/* Dots */}
          <Stack direction="row" spacing={1} sx={{ position: "absolute", bottom: 10, left: 0, right: 0, justifyContent: "center" }}>
            {images.map((_, i) => (
              <Box
                key={i}
                role="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                sx={{ width: 10, height: 10, borderRadius: 999, bgcolor: i === index ? "primary.main" : "common.white", boxShadow: 1, cursor: "pointer", border: (theme) => `1px solid ${theme.palette.grey[300]}` }}
              />
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

// ---- CLUB TABS ----
function ClubTabs() {
  const [tab, setTab] = React.useState(0);
  const clubs = [
    { name: "LGN", location: "Selden, NY" },
    { name: "Three Village", location: "Stony Brook, NY" },
    { name: "Middle Country", location: "Centereach, NY" },
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
          <Typography variant="h6" color="primary" gutterBottom>
            {clubs[tab].name} Pre-Travel Academy Location
          </Typography>
          <Typography variant="body1">
            {clubs[tab].location}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Each child trains within their community club while following the unified Atlantic United curriculum and pathway.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// ---- FEATURE CHIP ----
function Feature({ label }) {
  return (
    <Chip
      icon={<SportsSoccerIcon />}
      label={label}
      color="primary"
      variant="outlined"
      sx={{ fontWeight: 600 }}
    />
  );
}

// ---- MAIN COMPONENT ----
export default function AtlanticUnitedPreTravelAcademy({ images }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        background: `linear-gradient(180deg, rgba(11,95,255,0.06) 0%, rgba(226,29,43,0.06) 100%)`,
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
      }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4, mt: 6 }}>
            <Chip label="Atlantic United" color="secondary" sx={{ fontWeight: 500, fontSize: '30px', padding: '20px' }} />
            <Typography variant="h2" component="h1">
              Pre-Travel Academy Program
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" maxWidth={900}>
              A fun, skill-focused bridge beyond intramurals for 1st & 2nd graders across LGN, Three Village, and Middle Country.
            </Typography>
          </Stack>

          {/* About & Highlights */}
          <Grid container spacing={4} sx={{ mt: 7 }}>

            {/* Club Tabs */}
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
              <ClubTabs />
            </Grid>

            {/* Carousel */}
            <ImageCarousel images={images} height={420} fit="contain" ratio="16/9" />

            <Grid item xs={12} md={7}>
              <Card sx={{ p: { xs: 1, md: 2 } }}>
                <CardContent>
                  <Typography variant="h5" color="primary" gutterBottom>
                    About the Atlantic United Pre-Travel Academy Program
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    We’re excited to open our Academy to players who are ready for a fun, skill-focused step beyond intramurals. At this age, the focus is on building basic techniques—such as dribbling, passing, controlling the ball, and scoring—while keeping the sessions enjoyable and developmentally appropriate. Players will also learn the values of teamwork, confidence, and creativity on the field. We aim to create an environment where every child feels supported, learns to love the game, and develops the foundation for future success.
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Feature label="Dribbling" />
                    <Feature label="Passing" />
                    <Feature label="Ball Control" />
                    <Feature label="Finishing" />
                    <Feature label="Teamwork" />
                    <Feature label="Confidence" />
                    <Feature label="Creativity" />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

          {/* Program Pillars */}
          <Grid container spacing={4} sx={{ mt: 4 }}>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="overline" color="secondary">Ages & Stages</Typography>
                  <Typography variant="h6" gutterBottom>
                    1st & 2nd Grade Fundamentals
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Crucial years for motor skills. Our curriculum emphasizes movement, coordination, and simple ball-mastery activities to match each child’s stage.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="overline" color="secondary">Environment</Typography>
                  <Typography variant="h6" gutterBottom>
                    Fun, Active, Inclusive
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sessions are designed so every child can engage, feel supported, and grow confidently at their own pace.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Pathway Banner */}
          <Box sx={{ mt: 4, p: { xs: 3, md: 4 }, borderRadius: 3, background: (t) => `linear-gradient(90deg, ${t.palette.primary.main} 0%, ${t.palette.secondary.main} 100%)`, color: "common.white" }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={9}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>Pathway to Travel Teams</Typography>
                <Typography variant="body1" sx={{ opacity: 0.95 }}>
                  This Academy is the direct preparation track for Atlantic United travel teams.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                  <Chip label="Academy" sx={{ bgcolor: "rgba(255,255,255,.16)", color: "white", borderColor: "white" }} variant="outlined" />
                  <Chip label="Advanced Training" sx={{ bgcolor: "rgba(255,255,255,.16)", color: "white", borderColor: "white" }} variant="outlined" />
                  <Chip label="Travel Teams" sx={{ bgcolor: "rgba(255,255,255,.16)", color: "white", borderColor: "white" }} variant="outlined" />
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {/* Footer Note */}
          <Stack spacing={1} sx={{ mt: 4 }}>
            <Typography variant="caption" color="text.secondary">
              * Atlantic United unifies LGN (Selden), Three Village (Stony Brook), and Middle Country (Centereach) clubs under one shared development framework.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
