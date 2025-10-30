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
import tsunami from '../../../images/tsunami3.png'
import rampage from '../../../images/rampage.jpeg'

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
  img1:
    antEnergy,
  img2:
    rampage,
  img3:
    tsunami,
};



export default function Highlights({ images = defaultImages }) {
  return (
    <ThemeProvider theme={theme}>
      <Box id="pre-travel-highlights" sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent={'center'}>
            {[{
              title: "Ages and Stages",
              text:
                "Emphasizes movement, coordination, and simple ball-mastery activities to match each child’s stage.",
              img: images.img1,
              icon: <SportsSoccerIcon />,
            },
            {
              title: "Fun, Active, Inclusive.",
              text:
                "Sessions are designed so every child can engage, feel supported, and grow confidently at their own pace.",
              img: images.img2,
              icon: <PublicIcon />,
            },
            {
              title: "Pathway to Travel Teams",
              text:
                "The Pre-Travel Academy is the direct preparation track for Atlantic United travel teams.",
              img: images.img3,
              icon: <StarIcon />,
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
                      <Chip icon={card.icon} color="secondary" label="Pre-Travel Academy Standard" size="small" />
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
