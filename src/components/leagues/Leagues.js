import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Avatar,
  Paper,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";


//Logos
import MLSNextLogo from '../../images/logos/mls-next-logo.png'
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-10.png'
import NationalLeagueLogo from '../../images/logos/national-league-logo.png'
import EDPLogo from '../../images/logos/edp-logo.png'
import LIJSLlogo from '../../images/logos/lijsl-logo.png'


const leagueLogos = {
  mlsNext: MLSNextLogo,
  gaAspire: GAAspireLogo,
  nationalLeague: NationalLeagueLogo,
  edp: EDPLogo,
  lijsl: LIJSLlogo
};


export default function Leagues() {
  return (
    <Box>
      <Box sx={{ 
        color: "black",
        backgroundColor: "white",
        py: {xs: 2, sm: 8}
      }}>
        <Container sx={{ py: 8 }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 4 }}>
            <Chip icon={<PublicIcon />} color="primary" label="Multi-League" />
            <Typography variant="h3" sx={{fontSize: {xs: '33px', sm: '40px'}}}>Teams Across Many Leagues</Typography>
            <Typography variant="h6" sx={{ maxWidth: 800, opacity: 0.9 }}>
              Atlantic United forms travel teams for every level and league, catering to all players of variaying ages, skill levels, and interests.
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
                    bgcolor: "white",
                    border: `1px solid rgba(197, 197, 197, 0.03)`
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={l.src}
                    alt={`${l.name} logo`}
                    sx={{
                        width: 140,
                        height: 100,
                        bgcolor: "#edededff",
                        img: {
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                          padding: '10px'
                        },
                    }}
                  />

                  <Typography variant="h6" sx={{ mt: 1.5, opacity: 0.9, color: 'rgba(0,0,31,1)' }}>
                    {l.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
    </Box>
  );
}
