import { Box } from "@mui/material";
import PicturesAndText from "./PicturesAndText";
import Huddle from "./Huddle";
import NowWePlay from "./NowWePlay";

const About = () => {
  return (
    <Box sx={{ pt: "40px" }}>
      <PicturesAndText />
      <Huddle />
      <NowWePlay />
    </Box>
  );
};

export default About;










// import './styles.css'
// import PicturesAndText from "./PicturesAndText"
// import TreeWithLogos from "./TreeWithLogos"

// const About = () => {
//   return (
//     <div id="about">

//         <PicturesAndText/>
//         <TreeWithLogos/>
            
//     </div>
//   )
// }

// export default About