import React from "react";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

const ProgramsDescription = () => {
  return (
    <Box
      id="programs-description"
      sx={{
        backgroundColor: "rgb(0, 0, 31)",
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: 15, sm: 17, md: 24 },
          fontStyle: "italic",
          lineHeight: 1.6,
        }}
      >
        The{" "}
        <MuiLink
          component={Link}
          to="/programs/grassroots"
          sx={{ color: "rgb(196, 231, 255)", "&:hover": { opacity: 0.8 } }}
        >
          Grassroots Programs
        </MuiLink>{" "}
        (ages 2–5) introduce the game through fun, engaging activities that
        build coordination and a love for soccer. The{" "}
        <MuiLink
          component={Link}
          to="/programs/intramural"
          sx={{ color: "rgb(196, 231, 255)", "&:hover": { opacity: 0.8 } }}
        >
          Intramural Programs
        </MuiLink>{" "}
        (grades K-9) provide a recreational environment where players can
        develop their skills and enjoy the game in a team setting. For those
        preparing for higher levels of play, the{" "}
        <MuiLink
          component={Link}
          to="/programs/pre-travel"
          sx={{ color: "rgb(196, 231, 255)", "&:hover": { opacity: 0.8 } }}
        >
          Pre-Travel Programs
        </MuiLink>{" "}
        (grades 1-2) bridge the gap between recreational and competitive soccer.
        Finally, the{" "}
        <MuiLink
          component={Link}
          to="/programs/travel"
          sx={{ color: "rgb(196, 231, 255)", "&:hover": { opacity: 0.8 } }}
        >
          Travel Program
        </MuiLink>{" "}
        (grades 3-12) offers advanced training and competition, helping players
        maximize their potential on and off the field.
      </Typography>
    </Box>
  );
};

export default ProgramsDescription;
