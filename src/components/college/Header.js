import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container
} from "@mui/material";

import brendan from "../../images/brendan-staten-island.jpeg"
import alyse from "../../images/alyse.jpg"



export default function Header() {
  return (
      <Box sx={{ bgcolor: "rgba(244, 244, 244, 1)", color: "#000f26ff" }}>
        <Box>
            <Grid container>
              <Grid size={{xs: 12, md: 6}} sx={{pt: {xs: '60px', sm: '90px'}, pb: '30px', px: '5px'}}>
                <Container>
                    <Typography variant="h1" gutterBottom 
                        sx={{
                            color: "#00054aff", 
                            textAlign: 'center', 
                            fontSize: {xs: "32px", sm: "40px", lg: "60px"},
                            "&::after": {
                                display: "block",
                                height: "2px",
                                backgroundColor: "red",
                                content: '" "',
                                width: "80px",
                                margin: "10px auto"
                            }
                        }}>
                            Pathway to College Soccer
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.95, lineHeight: 1.6 }}>
                        Our graduates consistently earn roster spots at elite NCAA programs and beyond. With dedicated recruiting support, showcase exposure, and relationships nationwide, Atlantic United players take the next step prepared and confident.
                    </Typography>
                </Container>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <Box 
                    sx={{
                        height: {xs: '300px', sm: '450px'},
                        backgroundImage: `linear-gradient(120deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.4) 100%), url(${brendan})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: 'center'
                    }}>
                </Box>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <Box 
                    sx={{
                        height: {xs: '300px', sm: '450px'},
                        backgroundImage: `linear-gradient(120deg, rgba(0, 0, 49, 0.3) 0%, rgba(255, 0, 0, 0.4) 100%), url(${alyse})`,
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
