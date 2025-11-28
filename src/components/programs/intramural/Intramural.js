import React from "react";
import {
  Box
} from "@mui/material";

import Header from "./Header";
import Highlights from "./Highlights";
import About from "./About";
import Contacts from "./Contacts";
// import IntramuralPrograms from "./IntramuralPrograms";

export default function Intramural() {
  return (
      <Box id="intramural-page">
        <Header/>
        <About/>
        <Highlights/>
        {/* <IntramuralPrograms/> */}
        <Contacts/>
      </Box>
  );
}

