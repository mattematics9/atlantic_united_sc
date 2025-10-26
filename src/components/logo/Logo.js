// LeagueLogosMUI.jsx
import React from 'react';
import { Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import atlanticUnitedLogo from '../../images/logos/atlantic-united-logo-no-white-space.webp';

export default function Logo() {
  return (
    <Box id="logo">
      <MUILink
        component={Link}
        to="/"
        underline="none"
      >
        <Box
          component="img"
          src={atlanticUnitedLogo}
          alt="Atlantic United Logo"
          sx={() => ({
            position: 'fixed',
            top: '0px',
            left: {xs: '42%', sm: '45%', md: '0px'},
            zIndex: 999,
            width: {xs: '65px', sm: '90px', md: '135px'}
          })}
        />
      </MUILink>
    </Box>
  );
}
