import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
  Avatar,
  Divider,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

//Logos
import MLSNextLogo from '../../images/logos/mls-next-logo.png'
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-9.png'
import NationalLeagueLogo from '../../images/logos/national-league-logo.png'
import EDPLogo from '../../images/logos/edp-logo.png'
import LIJSLlogo from '../../images/logos/lijsl-logo.png'

//Images
import wildlingsCelebration from '../../images/wildlings_celebration_nationals.png'
import wildlingsTraining from '../../images/wildlings-training.jpg'
import forceCelebration from '../../images/force.jpg'

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

const defaultImages = {
  hero:
    wildlingsCelebration,
  training1:
    wildlingsTraining,
  match1:
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1600&auto=format&fit=crop",
  team1:
    forceCelebration,
};

const defaultLeagueLogos = {
  mlsNext: MLSNextLogo,
  gaAspire: GAAspireLogo,
  nationalLeague: NationalLeagueLogo,
  edp: EDPLogo,
  lijsl: LIJSLlogo
};

const Stat = ({ icon, label, value, chipColor = "primary" }) => (
  <Paper
    elevation={8}
    sx={{
      p: 3,
      bgcolor: "rgba(13, 71, 161, 0.08)",
      border: (t) => `1px solid ${t.palette.primary.main}22`,
      backdropFilter: "blur(6px)",
    }}
  >
    <Stack spacing={1.5} alignItems="flex-start">
      <Chip
        icon={icon}
        label={label}
        color={chipColor}
        variant="filled"
        sx={{ fontWeight: 700 }}
      />
      <Typography variant="h4" fontWeight={800} color="white">
        {value}
      </Typography>
    </Stack>
  </Paper>
);

export default function Header({ images = defaultImages, leagueLogos = defaultLeagueLogos }) {
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
            src={images.hero}
            alt="Atlantic United players in action"
            sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                filter: "grayscale(20%) contrast(115%)",
                transform: "translateY(70px) scale(1.05)", // 👈 shifts image down
                objectFit: "cover",
            }}
            // sx={{
            //   position: "absolute",
            //   inset: 0,
            //   width: "100%",
            // //   height: "100%",
            // //   objectFit: "cover",
            //   filter: "grayscale(20%) contrast(115%)",
            //   transform: "scale(1.05)",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center 0px",
            //   backgroundRepeat: "no-repeat",
            // }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                // "linear-gradient(120deg, rgba(13,71,161,0.85) 0%, rgba(198,40,40,0.75) 100%)",
                "linear-gradient(120deg, rgba(0,0,31,.9) 0%, rgba(198,40,40,0.75) 100%)",
            }}
          />

          <Container sx={{ position: "relative", zIndex: 1, py: {xs: 7, sm: 10} }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Travel Academy"
                // sx={{ bgcolor: "#fff", color: "#C62828", fontWeight: 800 }}
                sx={{ bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "40px", sm: "40px", lg: "60px"}}}>
                Elite Player Pathway. National Stage.
              </Typography>
              <Typography variant="h6" sx={{ display: {xs: "none", sm: "block"}, opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Travel Academy is a high-performance environment
                designed to develop complete soccer players—technically sharp, tactically
                intelligent, and relentlessly competitive. 
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button size="large" variant="contained" color="secondary">
                  Join Our Travel Program
                </Button>
                <Button size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* ACHIEVEMENTS STRIP */}
        <Container sx={{ py: 6 }}>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={12} md={3} sx={{maxWidth: '500px'}}>
              <Stat icon={<EmojiEventsIcon />} label="National Titles" value="2 National Championships" chipColor="secondary" />
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '500px'}}>
              <Stat icon={<EmojiEventsIcon />} label="Regional Titles" value="6 Regional Championships" />
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '500px'}}>
              <Stat icon={<EmojiEventsIcon />} label="State Titles" value="22 NY State Championships" />
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '500px'}}>
              <Stat icon={<StarIcon />} label="National Ranking" value="#1 Ranked Teams in the Nation" chipColor="secondary" />
            </Grid>
          </Grid>
        </Container>

        <Divider sx={{ opacity: 0.1 }} />

        {/* COMPETITIONS / LEAGUES */}
        <Container sx={{ py: 8 }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
            <Chip icon={<PublicIcon />} color="primary" label="Elite Competition Platform" />
            <Typography variant="h3">Compete at the Highest Level</Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, opacity: 0.9 }}>
              Our teams battle weekly in the nation’s premier youth leagues.
            </Typography>
          </Stack>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {[{
              name: "MLS NEXT",
              src: leagueLogos.mlsNext,
            }, {
              name: "GA Aspire",
              src: leagueLogos.gaAspire,
            }, {
              name: "National League",
              src: leagueLogos.nationalLeague,
            }, {
              name: "EDP",
              src: leagueLogos.edp,
            }, {
              name: "LIJSL",
              src: leagueLogos.lijsl,
            }].map((l) => (
              <Grid key={l.name} item xs={6} sm={4} md={2}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "rgba(255,255,255,0.03)",
                    border: (t) => `1px solid ${t.palette.divider}`,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={l.src}
                    alt={`${l.name} logo`}
                    sx={{
                        width: 140,
                        height: 100,
                        bgcolor: "#fff",
                        img: {
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                        padding: '10px'
                        },
                    }}
                  />

                  <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.9, color: 'white' }}>
                    {l.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {[{
              title: "Proven Player Development",
              text:
                "Individual development plans, position-specific training, and a methodology grounded in modern football principles.",
              img: images.training1,
              icon: <SportsSoccerIcon />,
            },
            {
              title: "Relentless Game Model",
              text:
                "Aggressive pressing, quick transitions, and purposeful possession—our identity travels with every team.",
              img: images.match1,
              icon: <PublicIcon />,
            },
            {
              title: "Culture of Excellence",
              text:
                "Standards-driven environment where accountability, leadership, and teamwork are non-negotiable.",
              img: images.team1,
              icon: <StarIcon />,
            }].map((card) => (
              <Grid item xs={12} md={4} key={card.title} sx={{width: '100%'}}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: (t) => `1px solid ${t.palette.primary.main}22`,
                    color: 'white',
                  }}
                >
                  <CardMedia component="img" height="180" image={card.img} alt={card.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Chip icon={card.icon} color="secondary" label="Academy Standard" size="small" />
                    </Stack>
                    <Typography variant="h5" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>{card.text}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* COLLEGE PLACEMENT */}
        <Box sx={{
          py: 8,
          background:
            "linear-gradient(90deg, rgba(13,71,161,0.15), rgba(198,40,40,0.15))",
        }}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>
                  Pathway to Top Universities
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.95, mb: 2 }}>
                  Our graduates consistently earn roster spots at elite NCAA programs
                  and beyond. With dedicated recruiting support, showcase exposure,
                  and relationships nationwide, Atlantic United players take the next
                  step prepared and confident.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
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
                    Register For Travel
                  </Button>
                  <Button size="large" variant="outlined" color="white">
                    Contact Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <Box sx={{ py: 6, textAlign: "center", opacity: 0.6 }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Atlantic United Travel Academy • All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
