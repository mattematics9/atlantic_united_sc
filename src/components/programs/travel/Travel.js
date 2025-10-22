import React from "react";
import {
  Box,
  Divider,
} from "@mui/material";

import TravelHeader from "./TravelHeader";
import Achievements from "../../achievements/Achievements";
import Leagues from "../../leagues/Leagues";
import TravelHighlights from "./TravelHighlights";
import College from "../../college/College";
import NowWePlay from "../../about/about_overview/NowWePlay";

export default function TravelAcademy() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        <TravelHeader/>
        <Achievements/>
        <NowWePlay/>
        <Leagues/>
        <Divider sx={{ opacity: 0.1 }} />
        <TravelHighlights/>
        <College/>
      </Box>
  );
}

