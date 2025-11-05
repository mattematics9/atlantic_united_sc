import React from "react";
import {
  Box
} from "@mui/material";
import CallToAction from '../call_to_action/CallToAction'
import CollegeServices from "./CollegeServices";
import Header from "./Header";

const College = () => {
  return (
    <Box id="college-page" sx={{pt: '65px'}}>
      <Header/>
      <CollegeServices/>
      <CallToAction/>
    </Box>
  );
};

export default College;






