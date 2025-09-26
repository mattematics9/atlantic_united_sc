import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import * as d3 from "d3";

// Logos
import LGNLogo from "../../images/logos/lgn-logo-no-whitespace.png";
import MiddleCountryLogo from "../../images/logos/middle-country-logo.avif";
import ThreeVillageLogo from "../../images/logos/three-village-logo-no-white-space.png";
import AtlanticUnitedLogo from "../../images/logos/atlantic-united-logo-no-white-space.webp";
import huddle2 from "../../images/huddle2.png";

const TreeWithLogos = () => {
  useEffect(() => {
    const dims = { height: 300, width: 1100 };
    const data = [
      { name: "Portal", parent: "", logo: AtlanticUnitedLogo },
      { name: "Physical Therapy", parent: "Portal", logo: ThreeVillageLogo },
      { name: "Dental", parent: "Portal", logo: LGNLogo },
      { name: "Eye Care", parent: "Portal", logo: MiddleCountryLogo },
    ];

    // Clear old SVG if re-rendered
    d3.select("#tree-with-logos").selectAll("*").remove();

    const svg = d3
      .select("#tree-with-logos")
      .append("svg")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", "0 0 1200 600")
      .classed("tree-diagram-content", true);

    const graph = svg.append("g").attr("transform", "translate(50,150)");

    const stratify = d3
      .stratify()
      .id((d) => d.name)
      .parentId((d) => d.parent);

    const tree = d3.tree().size([dims.width, dims.height]);

    const rootNode = stratify(data);
    const treeData = tree(rootNode);

    const nodes = graph.selectAll(".node").data(treeData.descendants());
    const links = graph.selectAll(".link").data(treeData.links());

    // Draw connecting lines
    links
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("strokeWidth", 2)
      .attr(
        "d",
        d3
          .linkVertical()
          .x((d) => d.x)
          .y((d) => d.y)
      );

    // Responsive logo sizing
    const screenWidth = window.innerWidth;
    const nodeSize = screenWidth < 600 ? 300 : 200;

    // Draw logo nodes
    const enterNodes = nodes
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    enterNodes
      .append("image")
      .attr("xlink:href", (d) => d.data.logo)
      .attr("x", -nodeSize / 2)
      .attr("y", -nodeSize / 2)
      .attr("width", nodeSize)
      .attr("height", nodeSize);
  }, []);

  return (
    <>
      {/* Main Container with huddle background for desktop */}
      <Box
        id="tree-with-logos-about-us-titles-container"
        sx={{
          position: "relative",
          backgroundImage: {
            md: `radial-gradient(rgba(0,0,31,0),rgba(0,0,31,0),rgba(0,0,31,0), rgba(0,0,31,.1), rgba(0,0,31,.3),rgba(0,0,31,1), rgba(0,0,31,1), rgba(0,0,31,1)),
                 url(${huddle2})`,
            xs: "none", // remove on small screens
          },
          backgroundPosition: "center 150px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: { xs: 0, md: "250px" },
          pb: { xs: 0, md: "100px" },
          bgcolor: "rgb(0,0,31)",
        }}
      >
        {/* ABOUT US Panel */}
        <Paper
          id="about-us"
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, md: "-100px" },
            left: 0,
            width: { xs: "100%", md: "490px" },
            p: 3,
            borderTopRightRadius: { xs: 0, md: "20px" },
            borderBottomRightRadius: { xs: 0, md: "20px" },
            border: { xs: "none", md: "1px solid grey" },
            color: "rgb(0,0,31)",
            bgcolor: "white",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mt: {xs: "30px"},
              "&::after": {
                display: "block",
                height: "2px",
                backgroundColor: "red",
                content: '" "',
                width: "80px",
                margin: "10px auto"
              },
            }}
          >
            ABOUT US
          </Typography>
          <Typography sx={{ mt: 3, mb: 3, fontSize: "18px", fontStyle: "italic" }}>
            Atlantic United Soccer Club brings together the proud
            traditions of three long-standing Long Island programs—LGN Soccer Club,
            Stony Brook Soccer Club, and Middle Country Soccer Club. Our travel
            teams compete at the highest levels of youth soccer nationwide, while
            we also provide a full range of programs designed to support players of
            all ages, skill levels, and interests.{" "}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button component={Link} to='/programs' sx={{fontSize: '20px', '&:hover': {textDecoration: 'underline'}}}>
              SEE OUR PROGRAMS
            </Button>
          </Box>
        </Paper>

        {/* Titles Panel */}
        <Box
          id="titles"
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, md: "30px" },
            right: { xs: "unset", md: "30px" },
            width: { xs: "100%", md: "500px" },
            p: 3,
            border: "2px dotted white",
            color: "rgb(244,244,255)",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontStyle: "italic" }}>
            2 NATIONAL CHAMPIONSHIPS
          </Typography>
          <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontStyle: "italic" }}>
            6 REGIONAL CHAMPIONSHIPS
          </Typography>
          <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontStyle: "italic" }}>
            22 NY CHAMPIONSHIPS
          </Typography>
          <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontStyle: "italic" }}>
            #1 RANKED TEAMS IN THE NATION
          </Typography>
        </Box>

        {/* D3 Tree Mount Point */}
        <Box
          id="tree-with-logos"
          sx={{
            pt: { xs: 6, md: 12 },
            pb: { xs: 6, md: 12 },
          }}
        />
      </Box>

      {/* Mobile/Tablet huddle background (shown after tree) */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: "500px",
          backgroundImage: `url(${huddle2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    </>
  );
};

export default TreeWithLogos;

