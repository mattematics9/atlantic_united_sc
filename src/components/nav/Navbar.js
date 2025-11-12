// NavbarMUI.js — mobile drawer now includes dropdown items (collapsible About & Programs)
import React from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Box, ButtonBase, Paper, MenuList, MenuItem, Popper, Collapse, ListItemIcon
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useLocation } from 'react-router-dom';

const pages = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'RESOURCES', path: '/resources' },
  { label: 'PROGRAMS', path: '/programs' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'REGISTER', path: '/register' },
];

const aboutMenuItems = [
  { label: 'College', path: '/college' },
  { label: 'Fields', path: '/fields' },
  { label: 'Testimonials', path: '/testimonials' }
];

const programMenuItems = [
  { label: 'Travel Academy', path: '/programs/travel-academy' },
  { label: 'Pre-Travel Academy', path: '/programs/pre-travel-academy' },
  { label: 'Intramural', path: '/programs/intramural' },
  { label: 'Grassroots', path: '/programs/grassroots' }
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  const isActive = (p) => pathname === p || (p === '/' && pathname === '/');

  const aboutRef = React.useRef(null);
  const programsRef = React.useRef(null);

  const [aboutOpen, setAboutOpen] = React.useState(false);
  const [programsOpen, setProgramsOpen] = React.useState(false);

  // NEW: mobile collapses for About & Programs
  const [mobileAboutOpen, setMobileAboutOpen] = React.useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = React.useState(false);

  const HoverMenu = ({ open, anchorRef, onClose, items, overviewPath }) => (
    <Popper open={open} anchorEl={anchorRef.current} placement="bottom" disablePortal style={{ zIndex: 1300 }}>
      <Paper elevation={3} onMouseLeave={onClose} sx={{ mt: 0.5, minWidth: 180 }}>
        <MenuList autoFocusItem={false} sx={{ py: 0 }}>
          {overviewPath && (
            <MenuItem component={Link} to={overviewPath} onClick={onClose} sx={{ fontSize: '0.9rem', fontWeight: 500 }}>
              {overviewPath === '/about' ? 'About Overview' : 'Programs Overview'}
            </MenuItem>
          )}
          {items.map((item) => (
            <MenuItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={onClose}
              sx={{ fontSize: '0.9rem', fontWeight: 500 }}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Popper>
  );

  const drawer = (
    <Box sx={{ width: 280, bgcolor: 'rgba(248, 251, 255, 1)', height: '100%' }}>
      <List>
        {/* HOME first */}
        <ListItem key="/" disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={() => { setAboutOpen(false); setProgramsOpen(false); setMobileAboutOpen(false); setMobileProgramsOpen(false); toggleMobile(); }}
            sx={{ '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, bgcolor: isActive('/') ? 'rgba(238, 245, 255, 1)' : 'inherit' }}
          >
            <ListItemText primary="HOME" primaryTypographyProps={{ fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>

        {/* ABOUT with collapse */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMobileAboutOpen((v) => { setMobileProgramsOpen(false); return !v; })}
            sx={{ '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, bgcolor: pathname.startsWith('/about') ? 'rgba(238, 245, 255, 1)' : 'inherit' }}
            aria-expanded={mobileAboutOpen ? 'true' : 'false'}
            aria-controls="mobile-about-collapse"
          >
            <ListItemText primary="ABOUT" primaryTypographyProps={{ fontWeight: 500 }} />
            {mobileAboutOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileAboutOpen} timeout="auto" unmountOnExit id="mobile-about-collapse">
          <List component="div" disablePadding>
            {/* Overview link */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/about"
                onClick={() => { toggleMobile(); setMobileAboutOpen(false); }}
                sx={{ pl: 4 }}
              >
                <ListItemIcon sx={{ minWidth: 28 }}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="About Overview" />
              </ListItemButton>
            </ListItem>
            {aboutMenuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => { toggleMobile(); setMobileAboutOpen(false); }}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: 28 }}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        {/* PROGRAMS with collapse */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => setMobileProgramsOpen((v) => { setMobileAboutOpen(false); return !v; })}
            sx={{ '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, bgcolor: pathname.startsWith('/programs') ? 'rgba(238, 245, 255, 1)' : 'inherit' }}
            aria-expanded={mobileProgramsOpen ? 'true' : 'false'}
            aria-controls="mobile-programs-collapse"
          >
            <ListItemText primary="PROGRAMS" primaryTypographyProps={{ fontWeight: 500 }} />
            {mobileProgramsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileProgramsOpen} timeout="auto" unmountOnExit id="mobile-programs-collapse">
          <List component="div" disablePadding>
            {/* Overview link */}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/programs"
                onClick={() => { toggleMobile(); setMobileProgramsOpen(false); }}
                sx={{ pl: 4 }}
              >
                <ListItemIcon sx={{ minWidth: 28 }}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                <ListItemText primary="Programs Overview" />
              </ListItemButton>
            </ListItem>
            {programMenuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => { toggleMobile(); setMobileProgramsOpen(false); }}
                  sx={{ pl: 4 }}
                >
                  <ListItemIcon sx={{ minWidth: 28 }}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>

        {/* Remaining top-level items */}
        {pages.filter(p => !['HOME', 'ABOUT', 'PROGRAMS'].includes(p.label)).map((p) => (
          <ListItem key={p.path} disablePadding>
            <ListItemButton
              component={Link}
              to={p.path}
              onClick={() => { setAboutOpen(false); setProgramsOpen(false); setMobileAboutOpen(false); setMobileProgramsOpen(false); toggleMobile(); }}
              sx={{ '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, bgcolor: isActive(p.path) ? 'rgba(238, 245, 255, 1)' : 'inherit' }}
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
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(248, 251, 255, 1)', color: 'black', zIndex: 998 }}>
        <Toolbar disableGutters sx={{ height: 64, px: 0, alignItems: 'stretch' }}>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleMobile}
            sx={{ display: { md: 'none' }, mx: 1, '&:focus, &:active': { color: 'black', backgroundColor: 'transparent' }, '& .MuiTouchRipple-root': { color: 'transparent' } }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop nav */}
          <Box component="nav" sx={{ backgroundColor: 'transparent !important', display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', alignItems: 'stretch', height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
              {/* HOME */}
              <ButtonBase component={Link} to="/" disableRipple onMouseEnter={() => { setAboutOpen(false); setProgramsOpen(false); }} sx={{ height: '100%', display: 'flex', alignItems: 'center', px: 1.5, mx: 0.25, fontWeight: 550, fontSize: '0.9rem', color: 'black', textDecoration: 'none', '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, ...(isActive('/') && { bgcolor: 'rgba(244, 249, 255, 1)', borderLeft: '1px solid rgb(0,0,40)', borderRight: '1px solid rgb(0,0,40)' }) }}>HOME</ButtonBase>

              {/* ABOUT */}
              <Box onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <ButtonBase ref={aboutRef} disableRipple sx={{ height: '100%', display: 'flex', alignItems: 'center', px: 1.5, mx: 0.25, fontWeight: 550, fontSize: '0.9rem', color: 'black', textDecoration: 'none', '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, ...(isActive('/about') && { bgcolor: 'rgba(244, 249, 255, 1)', borderLeft: '1px solid rgb(0,0,40)', borderRight: '1px solid rgb(0,0,40)' }) }}>
                  ABOUT
                  <ExpandMoreIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                </ButtonBase>
                <HoverMenu open={aboutOpen} anchorRef={aboutRef} onClose={() => setAboutOpen(false)} items={aboutMenuItems} overviewPath="/about" />
              </Box>

              {/* PROGRAMS */}
              <Box onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)} sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                <ButtonBase ref={programsRef} disableRipple sx={{ height: '100%', display: 'flex', alignItems: 'center', px: 1.5, mx: 0.25, fontWeight: 550, fontSize: '0.9rem', color: 'black', textDecoration: 'none', '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, ...(isActive('/programs') && { bgcolor: 'rgba(244, 249, 255, 1)', borderLeft: '1px solid rgb(0,0,40)', borderRight: '1px solid rgb(0,0,40)' }) }}>
                  PROGRAMS
                  <ExpandMoreIcon sx={{ ml: 0.5, fontSize: '1rem' }} />
                </ButtonBase>
                <HoverMenu open={programsOpen} anchorRef={programsRef} onClose={() => setProgramsOpen(false)} items={programMenuItems} overviewPath="/programs" />
              </Box>

              {/* Remaining links */}
              {pages.filter(p => !['HOME', 'ABOUT', 'PROGRAMS'].includes(p.label)).map((p) => (
                <ButtonBase key={p.path} component={Link} to={p.path} disableRipple onMouseEnter={() => { setAboutOpen(false); setProgramsOpen(false); }} sx={{ height: '100%', display: 'flex', alignItems: 'center', px: 1.5, mx: 0.25, fontWeight: 550, fontSize: '0.9rem', color: 'black', textDecoration: 'none', '&:hover': { bgcolor: 'rgba(238, 245, 255, 1)' }, ...(isActive(p.path) && { bgcolor: 'rgba(244, 249, 255, 1)', borderLeft: '1px solid rgb(0,0,40)', borderRight: '1px solid rgb(0,0,40)' }) }}>{p.label}</ButtonBase>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={() => { setAboutOpen(false); setProgramsOpen(false); setMobileAboutOpen(false); setMobileProgramsOpen(false); toggleMobile(); }} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', md: 'none' } }}>
        {drawer}
      </Drawer>
    </>
  );
}
