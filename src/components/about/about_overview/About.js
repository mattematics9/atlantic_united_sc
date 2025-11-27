import { Box } from "@mui/material";
import PicturesAndText2 from "./PicturesAndText2";
import NowWePlay from "./NowWePlay";
import TreeWithLogos from "./TreeWithLogos";
import UnifyingLongIsland from './UnifyingLongIsland'
import ExpertsInSoccerAndEducation from './ExpertsInSoccerAndEducation'
import Achievements from "../../achievements/Achievements";
import CallToAction from "../../call_to_action/CallToAction";
import StrongerTogether from "./StrongerTogether";
import Header from "./Header";

const About = () => {
  return (
    <Box sx={{ pt: "65px" }}>
      <Header/>
      <PicturesAndText2 />
      <Achievements/>
      <ExpertsInSoccerAndEducation/>
      <UnifyingLongIsland/>
      <StrongerTogether/>
      <TreeWithLogos/>
      <CallToAction/>
      <NowWePlay />
    </Box>
  );
};

export default About;

