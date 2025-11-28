import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Paper,
} from "@mui/material";


export default function CallToAction() {
  return (
      <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>

        {/* CTA */}
        <Container sx={{ py: {xs: 3, sm: 8} }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              background:
                "linear-gradient(120deg, rgba(13,71,161,0.35), rgba(198,40,40,0.35))",
              border: (t) => `1px solid ${t.palette.primary.main}33`,
            }}
          >
            <Grid container spacing={3} alignItems="center" sx={{color: 'white'}}>
              <Grid item xs={12} md={8}>
                <Typography variant="h4" gutterBottom>
                  Ready to elevate your game?
                </Typography>
                <Typography variant="body1">
                  Trials run year round. Contact us to attend an open practice and be evaluated by one of our coaches.  
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={2}>
                  <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} size="large" variant="contained" color="secondary" component={Link} to="/programs">
                    See Our Programs
                  </Button>
                  <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" },}} size="large" variant="outlined" color="white" component={Link} to="/contact">
                    Contact Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Container>

      </Box>
  );
}
