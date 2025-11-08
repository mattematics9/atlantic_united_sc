import React from "react";
import { Box, Typography } from "@mui/material";

// Import images so bundlers resolve them correctly (fixes “background not displayed”)
// import img1 from "../../../images/clouds3.png"
import img2 from "../../../images/logan-ruggiero-darren.png";
import img3 from "../../../images/huddle4.png";

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
const PicturesAndText2 = () => {
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
    <Box id="pictures-and-text-2" sx={{ width: "100%" }}>
      {/* Top-level row (like .row) */}
      <Box sx={{ display: "flex", flexWrap: "wrap", margin: 0 }}>
        {/* Left Column: Big Picture (col l6 m12 s12) */}
        <Box sx={colL6_M12_S12}>
            <Typography variant="h4" color="primary" gutterBottom 
                sx={{
                    fontWeight: 600,
                    textAlign: 'center', 
                    mt: '50px',
                    "&::after": {
                        display: "block",
                        height: "2px",
                        backgroundColor: "red",
                        content: '" "',
                        width: "80px",
                        margin: "10px auto",
                    },
                }}>
                History of Titles
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '17px', fontWeight: 600, p: '20px' }}>
                During the 2024-2025 seasonal year Atlantic United produced 4 New York State Champions and 2 New York State Finalists, qualified 4 teams to USYS Regionals, topping the year off with 1 Regional Finalist and 1 team appearance at USYS Nationals.  In the 2023-2024 seasonal year Atlantic United produced 5 New York State Champions and 1 Finalist, had 8 teams qualify for USYS Regionals (most in the Eastern Region), topping the year off with 2 Regional Finalists and 2 team appearances at USYS Nationals, where the club had a team make it the final 4 and earn 1 USYS National Semi-Finalist Title.  In the preceding years, we have captured numerous State, Regional, and National Titles, while consistently producing #1 ranked teams in the Nation, solidifying ourselves as one of the most successful USYS clubs in the country.
            </Typography>
          {/* <Box
            id="pictures-and-text-2-col-1-pic-div"
            sx={{
              backgroundImage: `url(${img1})`,
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
          /> */}
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
                id="winning-culture-text"
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
                  WINNING CULTURE
                </Typography>
              </Box>
            </Box>

            {/* Photo right */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="winning-culture-pic"
                sx={{
                  backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.15),rgba(255, 0, 0, 0.15)),url(${img2})`,
                  backgroundPosition: "center 0px",
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
                id="achieve-as-a-team-pic"
                sx={{
                  backgroundImage: `url(${img3})`,
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
                id="achieve-as-a-team-text"
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
                  ACHIEVE AS A TEAM
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
                id="achieve-as-a-team-text"
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
                  ACHIEVE AS A TEAM
                </Typography>
              </Box>
            </Box>

            {/* Photo second */}
            <Box sx={colL6_M6_S12}>
              <Box
                id="achieve-as-a-team-pic"
                sx={{
                  backgroundImage: `url(${img3})`,
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

export default PicturesAndText2;


