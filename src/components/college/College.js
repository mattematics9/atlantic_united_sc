import React from "react";
import {
  Box
} from "@mui/material";
import Universities from "./Universities";
import CallToAction from '../call_to_action/CallToAction'
import CollegeServices from "./CollegeServices";

const College = () => {
  return (
    <Box id="college-page" sx={{pt: '50px'}}>
      <Universities/>
      <CollegeServices/>
      <CallToAction/>
    </Box>
  );
};

export default College;






