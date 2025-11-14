// LeagueLogosMUI.jsx
import React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import MLSNextLogo from '../../images/logos/mls-next-logo.png';
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-10.png'

export default function LeagueLogos() {
  return (
    <Box id="league-logos" sx={{display: 'flex', alignItems: 'center'}}>
      {/* MLS Next Logo */}
      <MUILink
        component={Link}
        to="https://www.mlssoccer.com/mlsnext/"
        target="_blank"
        underline="none"
        sx={{ display: 'inline-block' }}
      >
        <Box
          component="img"
          src={MLSNextLogo}
          alt="MLS Next Logo"
          sx={() => ({
            zIndex: 999,
            width: {xs: '65px', md: '85px'}
          })}
        />
      </MUILink>

      {/* GA Aspire Logo */}
      <MUILink
        component={Link}
        to="https://girlsacademyleague.com/aspire/"
        target="_blank"
        underline="none"
        sx={{  }}
      >
        <Box
          component="img"
          src={GAAspireLogo}
          alt="GA Aspire Logo"
          sx={() => ({
            zIndex: 999,
            width: {xs: '55px', md: '70px'},
            width: {xs: '110px', md: '140px'},
          })}
        />
      </MUILink>
    </Box>
  );
}
