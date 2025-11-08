import { Box, Divider } from "@mui/material";
import PicturesAndText2 from "./PicturesAndText2";
import NowWePlay from "./NowWePlay";
import TreeWithLogos from "./TreeWithLogos";
import UnifyingLongIsland from './UnifyingLongIsland'
import ExpertsInSoccerAndEducation from './ExpertsInSoccerAndEducation'
import Achievements from "../../achievements/Achievements";
import CallToAction from "../../call_to_action/CallToAction";

const About = () => {
  return (
    <Box sx={{ pt: "65px" }}>
      <UnifyingLongIsland/>
      <TreeWithLogos/>
      <Divider/>
      <ExpertsInSoccerAndEducation/>
      <PicturesAndText2 />
      <Achievements/>
      <NowWePlay />
      <CallToAction/>
    </Box>
  );
};

export default About;

