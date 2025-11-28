import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useEffect } from "react";
import * as d3 from "d3";

// Logos
import LGNLogo from "../../../images/logos/lgn-logo-no-whitespace.png";
import MiddleCountryLogo from "../../../images/logos/middle-country-logo.avif";
import ThreeVillageLogo from "../../../images/logos/three-village-logo-no-white-space.png";
import AtlanticUnitedLogo from "../../../images/logos/atlantic-united-logo-no-white-space.webp";

//Card Picture
import CardPicture from "../../../images/force_espn_wwos.jpg"



const TreeWithLogos = () => {
  useEffect(() => {
    const dims = { height: 300, width: 1100 };
    const data = [
      { name: "AtlanticUnitedLogo", parent: "", logo: AtlanticUnitedLogo },
      { name: "ThreeVillageLogo", parent: "AtlanticUnitedLogo", logo: ThreeVillageLogo },
      { name: "LGNLogo", parent: "AtlanticUnitedLogo", logo: LGNLogo },
      { name: "MiddleCountryLogo", parent: "AtlanticUnitedLogo", logo: MiddleCountryLogo },
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
      sx={{
        position: "relative",
        pt: { xs: "70px", md: "30px" },
        pb: { xs: "20px", md: "0px" },
        background: "radial-gradient( rgba(255, 255, 255),rgba(9, 9, 65))"
      }}
    >
      {/* D3 Tree Mount Point */}
      <Box
        id="tree-with-logos"
        sx={{
          pt: { xs: 6, md: 12 },
          pb: { xs: 3, md: 6 },
        }}
      />

      {/*Stronger Together Text*/}
      <Box 
        sx={{
          position: 'absolute',
          top: {xs: '20px', sm: '70px'},
          left: {xs: '20%', sm: '40px'},
          color: 'white',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            background: "linear-gradient(90deg,#fff,#90caf9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            letterSpacing: "2px",
            textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
            fontSize: {xs: '40px', sm: '50px', md: '60px', lg: '80px'}
          }}
        >
          Stronger
        </Typography>

        <Typography
          variant="h1"
          sx={{
            ml: "30px",
            mt: {xs: "-10px", md: "-20px"},
            background: "linear-gradient(90deg,#fff,#90caf9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            letterSpacing: "2px",
            textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
            fontSize: {xs: '40px', sm: '50px', md: '60px', lg: '80px'}
          }}
        >
          Together
        </Typography>
      </Box>

      {/*Card*/}
      <Box 
        sx={{
          position: {xs: 'relative', lg: 'absolute'},
          top: '20px',
          right: {xs: '0px', lg: '20px'},
          color: 'white',
        }}
      >
        <Card
          sx={{
            height: {xs: "420px", sm: "400px"},
            bgcolor: "rgba(255,255,255,0.04)",
            border: (t) => `1px solid ${t.palette.primary.main}22`,
            borderRadius: 0,
            color: 'white',
          }}
        >
          <CardMedia component="img" sx={{height: {xs: '200px', sm: '200px', md: '250px', lg: '200px'}}} image={CardPicture} alt="Card" />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom sx={{my: '10px', maxWidth: {xs: '1000px', lg: '350px'}, textAlign: 'center'}}>
              Uniting Communities
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: {xs: '1000px', lg: '350px'}, opacity: 0.9 }}>
              Implementing our proven philosophy with a larger player pool, Atlantic United is positioned to be one of the highest achieving soccer clubs on Long Island.
            </Typography>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
};

export default TreeWithLogos;
