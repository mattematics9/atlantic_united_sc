import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

import wildlingsCones from "../../../images/wildlings_cones.png"


export default function ExpertsInSoccerAndEducation() {
  return (
      <Box sx={{ bgcolor: "rgba(246, 246, 255, 1)", color: "#000f26ff" }}>
        <Box>
            <Grid container>
              <Grid size={{xs: 12, md: 5}} sx={{py: '70px', px: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" component="h1" gutterBottom 
                    sx={{
                        color: "#00054aff", 
                        textAlign: 'center', 
                        fontSize: {xs: "32px", sm: "40px", lg: "60px"},
                        p: '10px'
                    }}>
                        Experts in Soccer and <span style={{color: 'rgba(83, 169, 255, 1)'}}>Education</span>
                </Typography>
              </Grid>
              <Grid size={{xs: 12, md: 7}}>
                <Box 
                    sx={{
                        height: {xs: '400px', sm: '550px'},
                        backgroundImage: `linear-gradient(120deg, rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0.4) 100%), url(${wildlingsCones})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center'
                    }}>
                </Box>
              </Grid>
            </Grid>
        </Box>

      </Box>
  );
}
