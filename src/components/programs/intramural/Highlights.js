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
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";

//Images
import threeVillageIntramural1 from '../../../images/three_village_intramural_1.jpg'
import threeVillageIntramural2 from '../../../images/three_village_intramural_2.png'
import threeVillageIntramural3 from '../../../images/three_village_intramural_3.jpg'


const IntramuralImages = {
  img1: threeVillageIntramural1,
  img2: threeVillageIntramural3,
  img3: threeVillageIntramural2
};



export default function Highlights({ images = IntramuralImages }) {
  return (
      <Box id="travel-highlights" sx={{ bgcolor: "#0a0d14", color: "#e9eef6" }}>
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
              title: "Fundamentals",
              text:
                "Learn basic techniques and rules in an easygoing environment",
              img: images.img3,
              icon: <PublicIcon />,
            }].map((card) => (
              <Grid item xs={12} md={4} key={card.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#0a111eff",
                    border: (t) => `1px solid ${t.palette.primary.main}22`,
                    color: 'white',
                  }}
                >
                  <CardMedia component="img" height="180" image={card.img} alt={card.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '320px', opacity: 0.9 }}>{card.text}</Typography>
                    <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
                      <Chip icon={card.icon} color="secondary" label="Intramural" size="small" />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}
