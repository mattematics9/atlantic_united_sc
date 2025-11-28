import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  Chip,
  Container
} from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

import wildlingsCelebration1 from '../../../images/wildlings_celebration_national_league.jpg'
import wildlingsCelebration2 from '../../../images/wildlings_celebration_nationals.png'


export default function Header() {
  return (
        <Box
            sx={{
                pt: {xs: '70px', sm: '100px'},
                pb: {xs: '100px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(120deg, rgba(0, 0, 49, 0.75) 0%, rgba(255, 0, 0, 0.5) 100%), url(${wildlingsCelebration1})`,
                    sm: `linear-gradient(120deg, rgba(0, 0, 49, 0.75) 0%, rgba(255, 0, 0, 0.4) 100%), url(${wildlingsCelebration2})`
                },
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center 65px'
            }}
        >

          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
              <Chip
                icon={<SportsSoccerIcon />}
                color="secondary"
                label="Atlantic United • Travel Academy"
                sx={{ display: {xs: 'none', sm: 'inherit'}, bgcolor: "transparent", color: "white", fontWeight: 800, border: "1px solid white", padding: '20px' }}
              />
              <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "32px", sm: "40px", lg: "60px"}}}>
                Elite Player Pathway. <br/>National Stage.
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
                The Atlantic United Travel Academy is a high-performance environment
                designed to develop complete soccer players - technical, intelligent, and competitive.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} component={Link} to="https://system.gotsport.com/programs/D45748060?reg_role=player" target="_blank" size="large" variant="contained" color="secondary">
                  Join Our Travel Program
                </Button>
                <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} href="#achievements" size="large" variant="outlined" color="inherit">
                  See More
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>
  );
}
