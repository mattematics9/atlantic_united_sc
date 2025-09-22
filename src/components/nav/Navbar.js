// NavbarMUI.js
import React from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Box, ButtonBase
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'RESOURCES', path: '/resources' },
  { label: 'PROGRAMS', path: '/programs' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'REGISTER', path: '/register' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  const isActive = (p) => pathname === p || (p === '/' && pathname === '/');

  const drawer = (
    <Box sx={{ width: 240, bgcolor: 'rgb(255,252,252)', height: '100%' }}>
      <List>
        {pages.map((p) => (
          <ListItem key={p.path} disablePadding>
            <ListItemButton
              component={Link}
              to={p.path}
              onClick={toggleMobile}
              sx={{
                '&:hover': { bgcolor: 'rgb(243,243,255)' },
                bgcolor: isActive(p.path) ? 'rgb(248,248,255)' : 'inherit',
                borderLeft: isActive(p.path) ? '3px solid rgb(0,0,40)' : 'none',
                borderRight: isActive(p.path) ? '3px solid rgb(0,0,40)' : 'none',
              }}
            >
              <ListItemText primary={p.label} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: 'white', color: 'black', zIndex: 998 }}>
        <Toolbar
          disableGutters
          sx={{
            // Make children (including our nav) stretch full height
            height: 64,            // match your desired bar height
            px: 0,                    // no side padding to avoid gaps
            alignItems: 'stretch',
          }}
        >
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleMobile}
            sx={{ 
              display: { md: 'none' }, 
              mx: 1,
              '&:focus, &:active': {
                color: 'black',          // keep it black instead of teal
                backgroundColor: 'transparent',
              },
              '& .MuiTouchRipple-root': {
                color: 'transparent',    // removes teal ripple
              }, 
            }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop nav (centered) */}
          <Box
            component="nav"
            sx={{
              backgroundColor: 'transparent !important',
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'stretch',   // critical: makes children fill Toolbar height
              height: '100%',
            }}
          >
            {pages.map((p) => (
              <ButtonBase
                key={p.path}
                component={Link}
                to={p.path}
                disableRipple
                sx={{
                  // Fill full height so bg + borders span the entire bar
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',

                  // Spacing (tighter):
                  px: 1.5,           // horizontal padding inside each item
                  mx: 0.25,          // small gap between items

                  // Typography/colors to match your CSS
                  fontWeight: 500,
                  color: 'black',
                  textDecoration: 'none',

                  // Hover + active styles ported from your CSS
                  '&:hover': { bgcolor: 'rgb(248,248,255)' }, // desktop hover
                  ...(isActive(p.path) && {
                    bgcolor: 'rgb(248,248,255)',
                    borderLeft: '1px solid rgb(0,0,40)',
                    borderRight: '1px solid rgb(0,0,40)',
                  }),
                }}
              >
                {p.label}
              </ButtonBase>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
