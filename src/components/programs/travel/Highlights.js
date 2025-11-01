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
import antEnergy from '../../../images/ant-energy.jpg'
import rampage from '../../../images/rampage.jpeg'
import wildlings from '../../../images/wildlings_regionals_2023.jpg'


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
    wildlings,
  img2:
    antEnergy,
  img3:
    rampage
};



export default function Highlights({ images = defaultImages }) {
  return (
    <ThemeProvider theme={theme}>
      <Box id="travel-highlights" sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: {xs: 6, sm: 8 }}}>
          <Grid container spacing={4} justifyContent={'center'}>
            {[{
              title: "History of Success",
              text:
                "History of championships and success at the local, state, regional, and national levels.",
              img: images.img1,
              icon: <StarIcon />,
            },
            {
              title: "Proven Player Development",
              text:
                "Track record of elevating players on and off the field - developing character, skills, and understanding of the game.",
              img: images.img2,
              icon: <SportsSoccerIcon />,
            },
            {
              title: "Superior Game Model",
              text:
                "Purposeful possession, aggressive pressing, quick transitions - intensity present throughout every team",
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
                      <Chip icon={card.icon} color="secondary" label="Travel Academy" size="small" />
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
