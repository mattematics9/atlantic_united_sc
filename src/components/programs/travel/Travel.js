import React from "react";
import {
  Box
} from "@mui/material";

import TravelHeader from "./TravelHeader";
import Achievements from "../../achievements/Achievements";
import Leagues from "../../leagues/Leagues";
import TravelHighlights from "./TravelHighlights";
import Universities from "../../college/Universities";
import CollegeServices from "../../college/CollegeServices";
import CallToAction from "../../call_to_action/CallToAction";
import NowWePlay from "../../about/about_overview/NowWePlay";

export default function TravelAcademy() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        <TravelHeader/>
        <TravelHighlights/>
        <NowWePlay/>
        <Achievements/>
        <Leagues/>
        <Universities/>
        <CollegeServices/>
        <CallToAction/>
      </Box>
  );
}

