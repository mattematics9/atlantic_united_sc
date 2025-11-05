import React from "react";
import {Box} from "@mui/material";

import Header from "./Header";
import Achievements from "../../achievements/Achievements";
import Leagues from "../../leagues/Leagues";
import Highlights from "./Highlights";
import CollegeServices from "../../college/CollegeServices";
import CallToAction from "../../call_to_action/CallToAction";
import NowWePlay from "../../about/about_overview/NowWePlay";
import About from "./About"
import CollegeHeader from "../../college/Header"

export default function TravelAcademy() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        <Header/>
        <Achievements/>
        <NowWePlay/>
        <About/>
        <Highlights/>
        <CollegeHeader/>
        <CollegeServices/>
        <Leagues/>
        <CallToAction/>
      </Box>
  );
}

