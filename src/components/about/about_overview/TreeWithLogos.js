import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import * as d3 from "d3";

// Logos
import LGNLogo from "../../../images/logos/lgn-logo-no-whitespace.png";
import MiddleCountryLogo from "../../../images/logos/middle-country-logo.avif";
import ThreeVillageLogo from "../../../images/logos/three-village-logo-no-white-space.png";
import AtlanticUnitedLogo from "../../../images/logos/atlantic-united-logo-no-white-space.webp";


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
      .attr("stroke", "black")
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
    <Box
      id="tree-with-logos"
      sx={{
        position: "relative",
        // backgroundImage: {
        //   xs: `linear-gradient(120deg, rgba(255, 0, 0, 0.4), rgba(0, 0, 120, 0.4)),
        //        url(${backgroundImage})`
        // },
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        pt: { xs: "30px", md: "30px" },
        pb: { xs: "30px", md: "30px" },
        bgcolor: "rgba(250, 250, 250, 1)"
      }}
    >
      {/* D3 Tree Mount Point */}
      <Box
        id="tree-with-logos"
        sx={{
          pt: { xs: 6, md: 12 },
          pb: { xs: 6, md: 12 },
        }}
      />
    </Box>
  );
};

export default TreeWithLogos;

