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
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

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



export default function TravelAcademy({ images = defaultImages }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

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

      </Box>
    </ThemeProvider>
  );
}
