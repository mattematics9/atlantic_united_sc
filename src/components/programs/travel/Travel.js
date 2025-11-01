import React from "react";
import {
  Box,
  Divider
} from "@mui/material";

import Header from "./Header";
import Achievements from "../../achievements/Achievements";
import Leagues from "../../leagues/Leagues";
import Highlights from "./Highlights";
import Universities from "../../college/Universities";
import CollegeServices from "../../college/CollegeServices";
import CallToAction from "../../call_to_action/CallToAction";
import NowWePlay from "../../about/about_overview/NowWePlay";

export default function TravelAcademy() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        <Header/>
        <Achievements/>
        <Divider/>
        <Highlights/>
        <NowWePlay/>
        <Leagues/>
        <Universities/>
        <CollegeServices/>
        <CallToAction/>
      </Box>
  );
}

