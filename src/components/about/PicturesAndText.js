import React from "react";
import { Box, Typography } from "@mui/material";

// Import images so bundlers resolve them correctly (fixes “background not displayed”)
import force3 from "../../images/force3.png";
import stonyBrookPlayers from "../../images/stony-brook-university-players.png";
import wildlingsCelebration from "../../images/wildlings_celebration_national_league.jpg";

/**
 * This mirrors the original Materialize layout exactly:
 * - Top row: two columns that are 50/50 on large (>=993px), stacked on medium/small (<993px).
 * - Right side contains two rows:
 *   Row A (visible on med & up): "Creating Unforgettable Moments" (left) | photo (right)
 *   Row B (visible on med & up): photo (left) | "Developing Elite Players" (right)
 *   Row C (visible on small only): "Developing Elite Players" (first) then photo (second)
 *
 * We use raw media queries (992/993 & 600/601) to match Materialize’s breakpoints,
 * instead of MUI’s default (600/900/1200), so behavior is identical.
 */
const PicturesAndTextMUI = () => {
  // Materialize-like breakpoints
  const upTo992 = "@media (max-width: 992px)";
  const from993 = "@media (min-width: 993px)";
  const smallOnly = "@media (max-width: 600px)";
  const medAndUp = "@media (min-width: 601px)";

  // Helpers that replicate col l6 m12 s12 exactly
  const colL6_M12_S12 = {
    [from993]: { flexBasis: "50%", maxWidth: "50%" }, // large: half width
    [upTo992]: { flexBasis: "100%", maxWidth: "100%" }, // med & small: full width
    padding: 0,
  };

  // Helpers that replicate col l6 m6 s12 for inner right-side rows
  const colL6_M6_S12 = {
    [medAndUp]: { flexBasis: "50%", maxWidth: "50%" }, // med & up: half width
    [smallOnly]: { flexBasis: "100%", maxWidth: "100%" }, // small only: full width
    padding: 0,
  };

  return (
    <Box id="pictures-and-text" sx={{ width: "100%" }}>
      {/* Top-level row (like .row) */}
      <Box sx={{ display: "flex", flexWrap: "wrap", margin: 0 }}>
        {/* Left Column: Big Picture (col l6 m12 s12) */}
        <Box sx={colL6_M12_S12}>
          <Box
            id="pictures-and-text-col-1-pic-div"
            sx={{
              backgroundImage: `url(${force3})`,
              backgroundPosition: "center 0px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: { xs: 500, sm: 500 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(212, 243, 255)",
              fontStyle: "italic",
              // Match font-size rules from your CSS (37px <=500px)
              fontSize: "50px",
              "@media (max-width: 500px)": { height: 400, fontSize: "37px" },
              textAlign: "center",
            }}
          />
        </Box>

        {/* Right Column (col l6 m12 s12) */}
        <Box sx={colL6_M12_S12}>
          {/* Row A: visible on med & up (matches .row with no "hide" and m6/l6 columns) */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: 0
            }}
          >
            {/* Text left */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="creating-unforgettable-moments-text"
                sx={{
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "rgb(250, 250, 250)",
                  color: "rgb(0, 0, 31)",
                  fontSize: "30px",
                  p: 3,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                <Typography component="p" sx={{ fontSize: "inherit", m: 0 }}>
                  CREATING UNFORGETTABLE MOMENTS
                </Typography>
              </Box>
            </Box>

            {/* Photo right */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="creating-unforgettable-moments-pic"
                sx={{
                  backgroundImage: `url(${wildlingsCelebration})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: 250,
                }}
              />
            </Box>
          </Box>

          {/* Row B: visible on med & up (matches .row.hide-on-small-only) */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: 0,
              [smallOnly]: { display: "none" }, // hide on small only
            }}
          >
            {/* Photo left */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="developing-elite-players-pic"
                sx={{
                  backgroundImage: `url(${stonyBrookPlayers})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: 250,
                }}
              />
            </Box>

            {/* Text right */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="developing-elite-players-text"
                sx={{
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "rgb(250, 250, 250)",
                  color: "rgb(0, 0, 31)",
                  fontSize: "30px",
                  p: 3,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                <Typography component="p" sx={{ fontSize: "inherit", m: 0 }}>
                  DEVELOPING ELITE PLAYERS
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Row C: small only version (matches .row.hide-on-med-and-up) */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              margin: 0,
              [medAndUp]: { display: "none" }, // hide on med & up
            }}
          >
            {/* Text first */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="developing-elite-players-text"
                sx={{
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "rgb(250, 250, 250)",
                  color: "rgb(0, 0, 31)",
                  fontSize: "30px",
                  p: 3,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                <Typography component="p" sx={{ fontSize: "inherit", m: 0 }}>
                  DEVELOPING ELITE PLAYERS
                </Typography>
              </Box>
            </Box>

            {/* Photo second */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="developing-elite-players-pic"
                sx={{
                  backgroundImage: `url(${stonyBrookPlayers})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: 250,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PicturesAndTextMUI;


