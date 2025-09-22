import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import img1 from '../../images/logan-ruggiero-darren-2.png'
import img2 from '../../images/stony-brook-pre-travel.png'
import img3 from '../../images/three_village_intramural_1.png'
import img4 from '../../images/stony-brook-grassroots.png'


const data = [
  {
    label: "TRAVEL ACADEMY",
    desc: "The Atlantic United Travel Program (grades 3-12) offers advanced training and competition, helping players maximize their potential on and off the field.  Our travel teams compete at the highest level of youth soccer in the United States.",
    color: "transparent",
    image: `${img1}`
  },
  {
    label: "PRE-TRAVEL ACADEMY",
    desc: "The Pre-Travel Program (grades 1-2) bridges the gap between recreational and competitive soccer.",
    color: "transparent",
    image: `${img2}`
  },
  {
    label: "INTRAMURAL",
    desc: "The Intramural Program (grades K-8) provides a recreational environment where players can develop their skills and enjoy the game in a team setting.",
    color: "transparent",
    image: `${img3}`
  },
  {
    label: "GRASSROOTS",
    desc: "Our Grassroots Program (ages 2–5) introduces the game through fun, engaging activities that build coordination and a love for soccer.",
    color: "transparent",
    image: `${img4}`
  }
];

export default function PyramidWithModalAndImages() {
  const svgRef = useRef();
  const tooltipRef = useRef();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const container = d3.select(svgRef.current).node().parentNode;
    const containerWidth = container.getBoundingClientRect().width;
    const width = containerWidth;
    const height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("width", "100%")
      .style("height", "auto");

    svg.selectAll("*").remove();

    const levelHeight = height / data.length;


      //Add Arrow going upwward through pyramid:

      // Add defs for arrowhead marker
      const defsArrow = svg.append("defs");
      defsArrow
        .append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 5)
        .attr("refY", 5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto-start-reverse")
        .append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 z")
        .attr("fill", "white");

      // Add dashed arrow line
      svg
        .append("line")
        .attr("x1", width / 2)
        .attr("y1", height - 10)
        .attr("x2", width / 2)
        .attr("y2", 10)
        .attr("stroke", "white")
        .attr("stroke-opacity", 0.4) 
        .attr("stroke-width", 3)
        .attr("stroke-dasharray", "8 6")   // dash pattern
        .attr("marker-end", "url(#arrowhead)");


  const tooltip = d3
      .select(tooltipRef.current)
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.75)")
      .style("color", "#fff")
      .style("padding", "6px 10px")
      .style("border-radius", "6px")
      .style("font-size", "14px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    data.forEach((d, i) => {
      const shrinkStep = width / 6;
      const topWidth = width - i * shrinkStep;
      const bottomWidth = width - (i + 1) * shrinkStep;
      const y = i * levelHeight;

      const points = [
        [(width - topWidth) / 2, y],
        [(width + topWidth) / 2, y],
        [(width + bottomWidth) / 2, y + levelHeight],
        [(width - bottomWidth) / 2, y + levelHeight]
      ];

      // Add glow filter once at the start
    const defs = svg.append("defs");
    const filter = defs
      .append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    filter
      .append("feDropShadow")
      .attr("dx", 0)
      .attr("dy", 0)
      .attr("stdDeviation", 4)   // blur size (bigger = stronger glow)
      .attr("flood-color", "white")
      .attr("flood-opacity", 1);

svg
  .append("polygon")
  .attr("points", points.map((p) => p.join(",")).join(" "))
  .attr("fill", d.color)
  .attr("stroke", "white")
  .attr("stroke-width", 1.5)
  .style("cursor", "pointer")
  .on("mousemove", (event) => {
    tooltip
      .style("opacity", 1)
      .style("left", event.pageX + 10 + "px")
      .style("top", event.pageY - 28 + "px")
      .html(`<strong>${d.label}</strong><br/>${d.desc}`);
  })
  .on("mouseenter", function () {
    d3.select(this)
      .transition()
      .duration(200)
      .attr("filter", "url(#glow)"); // Apply glow
  })
  .on("mouseleave", function () {
    tooltip.style("opacity", 0);
    d3.select(this)
      .transition()
      .duration(200)
      .attr("filter", null); // Remove glow
  })
  .on("click", () => {
    setSelected(d);
  });

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", y + levelHeight / 2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", Math.max(20, width / 40))
        .attr("fill", "white")
        .style("pointer-events", "none")
        .text(d.label);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", width: "100%", position: "relative" }}>
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef}></div>

      {/* Modal with image */}
      {selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              width: "400px",
              maxWidth: "90%",
              textAlign: "center",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h5>{selected.label}</h5>
            <img
              src={selected.image}
              alt={selected.label}
              style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }}
            />
            <p style={{fontSize: '20px'}}>{selected.desc}</p>
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
