import { Box } from "@mui/material";
import PicturesAndText2 from "./PicturesAndText2";
import NowWePlay from "./NowWePlay";
import TreeWithLogos from "./TreeWithLogos";
import UnifyingLongIsland from './UnifyingLongIsland'
import Philosophy from './Philosophy'
import ExpertsInSoccerAndEducation from './ExpertsInSoccerAndEducation'
import Achievements from "../../achievements/Achievements";
import CollegeHeader from "../../college/Header"
import CollegeServices from "../../college/CollegeServices";
import CallToAction from "../../call_to_action/CallToAction";

const About = () => {
  return (
    <Box sx={{ pt: "65px" }}>
      <UnifyingLongIsland/>
      <TreeWithLogos/>
      <PicturesAndText2 />
      <ExpertsInSoccerAndEducation/>
      <Achievements/>
      <CollegeHeader/>
      <CollegeServices/>
      <CallToAction/>
      <NowWePlay />
    </Box>
  );
};

export default About;

