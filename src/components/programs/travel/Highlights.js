import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

//Images
import caso from '../../../images/caso2.png'
import force from '../../../images/force_espn_wwos.jpg'
import force2 from '../../../images/force_training.png'

export default function Highlights() {
  return (
      <Box id="travel-highlights" sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: {xs: 6, sm: 8 }}}>
          <Grid container spacing={4} justifyContent={'center'}>
            {[{
              title: "History of Success",
              text:
                "History of championships and success at the local, state, regional, and national levels.",
              img: force,
              icon: <StarIcon />,
            },
            {
              title: "Proven Player Development",
              text:
                "Track record of elevating players on and off the field - developing character, skills, and understanding of the game.",
              img: caso,
              icon: <SportsSoccerIcon />,
            },
            {
              title: "Training Intensity",
              text:
                "Pushing players to their limits to help them obtain their goals.  Intensity present throughout every session.",
              img: force2,
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
                  <CardMedia component="img" height="165px" image={card.img} alt={card.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
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
  );
}
