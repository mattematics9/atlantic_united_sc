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
import img1 from '../../../images/pre-travel-old.jpg'
import img2 from '../../../images/lucas_nate_shane.png'
import img3 from '../../../images/tsunami3.png'


const PreTravelImages = {
  img1: img1,
  img2: img2,
  img3: img3,
};


export default function Highlights({ images = PreTravelImages }) {
  return (
      <Box id="pre-travel-highlights" sx={{ bgcolor: "#0a0d14", color: "#e9eef6" }}>

        {/* HIGHLIGHTS / IMAGES */}
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4} justifyContent={'center'}>
            {[{
              title: "Technique and Skills",
              text:
                "Emphasizes movement, coordination, and simple ball-mastery activities to match each child’s learning stage.",
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
                    bgcolor: "#0a111eff",
                    border: (t) => `1px solid ${t.palette.primary.main}22`,
                    color: 'white',
                  }}
                >
                  <CardMedia component="img" height="180" image={card.img} alt={card.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{maxWidth: '330px', textAlign: 'center'}}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '320px', opacity: 0.9 }}>{card.text}</Typography>
                      <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ my: 2 }}>
                        <Chip icon={card.icon} color="secondary" label="Pre-Travel Feature" size="small" />
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
