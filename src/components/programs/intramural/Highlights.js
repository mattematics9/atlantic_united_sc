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
import threeVillageIntramural1 from '../../../images/three_village_intramural_1.jpg'
import threeVillageIntramural2 from '../../../images/three_village_intramural_2.png'
import threeVillageIntramural3 from '../../../images/three_village_intramural_3.jpg'

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#000716ff" },
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
  img1:
    threeVillageIntramural1,
  img2:
    threeVillageIntramural3,
  img3:
    threeVillageIntramural2
};



export default function Highlights({ images = defaultImages }) {
  return (
    <ThemeProvider theme={theme}>
      <Box id="travel-highlights" sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: {xs: 6, sm: 8 }}}>
          <Grid container spacing={4} justifyContent={'center'}>
            {[{
              title: "Have Fun",
              text:
                "An environment where kids cannot wait to return to each week.",
              img: images.img1,
              icon: <StarIcon />,
            },
            {
              title: "Friends and Mentors",
              text:
                "Create friendships with teammates and mentors to look up to.",
              img: images.img2,
              icon: <SportsSoccerIcon />,
            },
            {
              title: "Love to play",
              text:
                "Spark a love for the game that can last a lifetime.",
              img: images.img3,
              icon: <PublicIcon />,
            }].map((card) => (
              <Grid item xs={12} md={4} key={card.title}>
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
                      <Chip icon={card.icon} color="secondary" label="Intramural" size="small" />
                    </Stack>
                    <Typography variant="h5" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '320px', opacity: 0.9 }}>{card.text}</Typography>
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
