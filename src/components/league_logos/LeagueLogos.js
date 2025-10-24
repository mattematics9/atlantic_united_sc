// LeagueLogosMUI.jsx
import React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import MLSNextLogo from '../../images/logos/mls-next-logo.png';
import GAAspireLogo from '../../images/logos/girls-aspire-logos/girls-aspire-logo-9.png';

export default function LeagueLogosMUI() {
  return (
    <Box id="league-logos">
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
          sx={(theme) => ({
            position: 'fixed',
            top: 0,
            left: '15px',
            zIndex: 999,
            width: '85px',
            mt: '10px',
            [theme.breakpoints.down('md')]: { left: '40%' },  // <= 992px 
            [theme.breakpoints.down(750)]: { width: '70px', left: '39%' }, // <= 600px
            [theme.breakpoints.down(550)]: { width: '60px', left: '36%' },    // <= 450px
          })}
        />
      </MUILink>

      {/* GA Aspire Logo */}
      <MUILink
        component={Link}
        to="https://girlsacademyleague.com/aspire/"
        target="_blank"
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
            left: '80px',
            zIndex: 999,
            width: '70px',
            ml: '20px',
            mt: '0px',
            [theme.breakpoints.down('md')]: { left: '48%' },   // <= 992px
            [theme.breakpoints.down(750)]: { width: '60px' }, // <= 600px
            [theme.breakpoints.down(550)]: { width: '53px', left: '47%' },    // <= 450px
          })}
        />
      </MUILink>
    </Box>
  );
}
