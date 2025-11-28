import React from 'react'
import { Box, Card, CardContent, Typography, Chip } from '@mui/material'
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const About = () => {

// ---- FEATURE CHIP ----
function Feature({ label }) {
  return (
    <Chip
      icon={<SportsSoccerIcon />}
      label={label}
      color="primary"
      variant="outlined"
      sx={{ fontWeight: 600 }}
    />
  );
}

  return (
        <Box id="about-intramural">
            <Card sx={{ borderRadius: '0px', p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h4" color="primary" gutterBottom 
                        sx={{
                            textAlign: 'center', 
                            my: '20px',
                            "&::after": {
                                display: "block",
                                height: "2px",
                                backgroundColor: "red",
                                content: '" "',
                                width: "80px",
                                margin: "10px auto"
                            },
                        }}>
                    About Intramural
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                    A fun-focused initial step into soccer. At this age, the focus is on cultivating a player's love and interest of the game while demonstrating basic foundational skills - such as dribbling, passing, controlling the ball, and scoring.  The games are enjoyable and developmentally appropriate, and take place at consitent times and closeby locations to maximize time and community interaction.  Players will also learn the values of teamwork, confidence, and creativity on the field. We aim to create an environment where every child feels supported, learns to love the game, and develops the foundation for future success.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
  )
}

export default About