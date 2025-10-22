// FooterMUI.tsx
import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box id="footer">

      {/* Bottom nav bar */}
      <Box
        id="footer-2"
        sx={{
          bgcolor: 'rgb(236, 236, 236)',
          height: '50px',
          fontSize: '10px',
          pt: '17px',
          textAlign: 'center',
          // Make links match original hover + spacing behavior
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            transition: 'opacity 0.2s ease',
          },
          '& a:hover': {
            opacity: 0.5,
          },
          // Add 10px left margin to every link after the first
          '& a + a': {
            ml: '10px',
          },
        }}
      >
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/resources">RESOURCES</Link>
        <Link href="/programs">PROGRAMS</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href="/register">REGISTER</Link>
      </Box>
      <Box sx={{ py: 6, textAlign: "center", color: 'white', backgroundColor: 'black' }}>
        <Typography variant="caption">
          © {new Date().getFullYear()} Atlantic United Soccer Club • All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}
