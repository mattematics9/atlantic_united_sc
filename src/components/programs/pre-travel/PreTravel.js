import React from "react";
import {
  Box
} from "@mui/material";

import Header from "./Header";
import Highlights from "./Highlights";
import About from "./About";
import Contacts from "./Contacts";

export default function PreTravelAcademy() {
  return (
      <Box>
        <Header/>
        <About/>
        <Highlights/>
        <Contacts/>
      </Box>
  );
}

