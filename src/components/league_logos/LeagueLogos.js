// LeagueLogosMUI.jsx
import React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MLSNextLogo from '../../images/logos/mls-next-logo.png';
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-7-no-bg.png';

export default function LeagueLogosMUI() {
  return (
    <Box id="league-logos">
      {/* MLS Next Logo */}
      <MUILink
        component={RouterLink}
        to="/"
        underline="none"
        sx={{ display: 'inline-block' }}
      >
        <Box
          component="img"
          src={MLSNextLogo}
          alt="MLS Next Logo"
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: '15px',
            zIndex: 999,
            width: '55px',
            mt: '10px',
            [theme.breakpoints.down('md')]: { left: '42%' },  // <= 992px
            [theme.breakpoints.down('sm')]: { width: '50px' }, // <= 600px
            [theme.breakpoints.down(450)]: { left: '34%' },    // <= 450px
          })}
        />
      </MUILink>

      {/* GA Aspire Logo */}
      <MUILink
        component={RouterLink}
        to="/"
        underline="none"
        sx={{ display: 'inline-block' }}
      >
        <Box
          component="img"
          src={GAAspireLogo}
          alt="GA Aspire Logo"
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: '50px',
            zIndex: 999,
            width: '95px',
            ml: '10px',
            mt: '-15px',
            [theme.breakpoints.down('md')]: { left: '47%' },   // <= 992px
            [theme.breakpoints.down('sm')]: { 
              width: '80px',
              top: '5px',
            }, // <= 600px
            [theme.breakpoints.down(450)]: { left: '41%' },    // <= 450px
          })}
        />
      </MUILink>
    </Box>
  );
}
