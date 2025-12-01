import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Container
} from "@mui/material";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import stonyBrookPreTravel from '../../../images/stony-brook-pre-travel.png'


export default function Header() {
  return (
        <Box
            sx={{
                pt: {xs: '70px', sm: '100px'},
                pb: {xs: '100px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(120deg, rgba(0, 0, 49, 0.95) 0%, rgba(255, 0, 0, 0.5) 100%), url(${stonyBrookPreTravel})`,
                },
                backgroundPosition: {xs: 'center'},
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >

          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Pre-Travel Academy"
                sx={{ bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "32px", sm: "40px", lg: "60px"}}}>
                Bridge the Gap Between Intramural and Travel.
              </Typography>
              <Typography variant="h6" sx={{ fontSize: {xs: '17px'}, opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Pre-Travel Academy is a fun, skill-focused bridge to travel soccer from intramurals for 1st & 2nd graders.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} href="#pre-travel-contacts" size="large" variant="contained" color="secondary">
                  Join Our Pre-Travel Program
                </Button>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} href="#about-pre-travel" size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>

        </Box>
  );
}