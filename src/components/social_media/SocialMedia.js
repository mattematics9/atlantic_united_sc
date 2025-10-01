// SocialMediaMUI.jsx
import React from "react";
import { Box, IconButton, Link as MUILink } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

export default function SocialMedia() {
  return (
    <Box
      id="social-media-icons"
      sx={(theme) => ({
        position: "fixed",
        top: "5px",
        right: "5px",
        display: "flex",
        gap: 0,
        zIndex: 999,
        [theme.breakpoints.down("sm")]: {
          top: "5px",
          right: "5px",
          gap: 0, // tighter spacing on small screens
        },
      })}
    >
      {/* Facebook */}
      <MUILink
        href="https://www.facebook.com/AtlanticUnitedSC"
        target="_blank"
        rel="noreferrer"
        underline="none"
      >
        <IconButton
          id="icon-facebook-anchor"
          sx={(theme) => ({
            color: "#1877f2",
            padding: "2px",
            fontSize: { xs: "35px", md: "41px" },
            "&:hover": { opacity: 0.8 },
            '&:focus, &:active': {
              backgroundColor: 'transparent',
            },
            '& .MuiTouchRipple-root': {
              color: 'transparent',    // removes teal ripple
            }
          })}
        >
          <Facebook fontSize="inherit" />
        </IconButton>
      </MUILink>

      {/* Instagram */}
      <MUILink
        href="https://www.instagram.com/atlantic_unitedsc/"
        target="_blank"
        rel="noreferrer"
        underline="none"
      >
        <IconButton
          id="icon-instagram-anchor"
          sx={(theme) => ({
            color: "#1ba0ffff",
            padding: "2px",
            fontSize: { xs: "35px", md: "41px" },
            "&:hover": { opacity: 0.8 },
            '&:focus, &:active': {
              backgroundColor: 'transparent',
            },
            '& .MuiTouchRipple-root': {
              color: 'transparent',    // removes teal ripple
            }
          })}
        >
          <Instagram fontSize="inherit" />
        </IconButton>
      </MUILink>
    </Box>
  );
}

