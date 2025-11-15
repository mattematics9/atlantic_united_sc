import React from "react";
import {
  Box
} from "@mui/material";

import Header from "./Header";
import Highlights from "./Highlights";
import CallToAction from "../../call_to_action/CallToAction";
import About from "./About";
import Contacts from "./Contacts";
import IntramuralPrograms from "./IntramuralPrograms";

export default function Intramural() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
        <Header/>
        <About/>
        <Highlights/>
        <IntramuralPrograms/>
        <Contacts/>
      </Box>
  );
}

