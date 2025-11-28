import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

const About = () => {

  return (
        <Box id='about-pre-travel'>
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
                    About Pre-Travel Academy
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                    A fun, skill-focused step beyond intramurals. At this age, the focus is on building basic techniques - such as dribbling, passing, controlling the ball, and scoring - while keeping the sessions enjoyable and developmentally appropriate. Players will also learn the values of teamwork, confidence, and creativity on the field. We aim to create an environment where every child feels supported, learns to love the game, and develops the foundation for future success.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
  )
}

export default About