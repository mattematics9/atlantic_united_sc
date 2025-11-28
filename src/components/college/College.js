import React from "react";
import {
  Box
} from "@mui/material";
import CallToAction from '../call_to_action/CallToAction'
import CollegeServices from "./CollegeServices";
import Header from "./Header";
import StonyBrookUniversityPlayers from "./StonyBrookUniversityPlayers";

const College = () => {
  return (
    <Box id="college-page" sx={{pt: '64px'}}>
      <Header/>
      <CollegeServices/>
      <StonyBrookUniversityPlayers/>
      <CallToAction/>
    </Box>
  );
};

export default College;






