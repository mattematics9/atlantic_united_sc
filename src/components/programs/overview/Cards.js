import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

import travelImage from '../../../images/force_espn_wwos.jpg'
import preTravelImage from '../../../images/stony-brook-pre-travel.png'
import intramuralImage from '../../../images/sharks2.png'

const programs = [
  {
    id: "travel",
    title: "Travel Academy",
    grade: "Grades 3 - 12",
    image: travelImage,
    description: "Offers advanced training and competition, helping players maximize their potential on and off the field.",
    registerUrl:
      "https://system.gotsport.com/programs/D45748060?reg_role=player",
    learnMoreUrl: "/programs/travel-academy",
  },
  {
    id: "pre-travel-academy",
    title: "Pre-Travel Academy",
    grade: "Grades 1 - 2",
    image: preTravelImage,
    description: "Prepares players for higher levels of play, bridging the gap between recreational and competitive soccer.",
    registerUrl: "/programs/pre-travel-academy/registration",
    learnMoreUrl: "/programs/pre-travel-academy",
  },
  {
    id: "intramural",
    title: "Intramural",
    grade: "Ages 2-14",
    image: intramuralImage,
    description: "Provides a recreational environment where players can develop their skills and enjoy the game in a team setting.",
    registerUrl: "/programs/intramural/registration",
    learnMoreUrl: "/programs/intramural",
  }
];


export default function Cards() {
  return (
      <Box id="programs-cards" sx={{ py: '50px', bgcolor: "#0a0d14", color: "#e9eef6" }}>

          <Grid container spacing={2} justifyContent={'center'}>
            {programs.map((program) => (
              <Grid item xs={12} md={4} key={program.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    // bgcolor: "rgba(255,255,255,0.04)",
                    bgcolor: "#0a111eff",
                    border: (t) => `1px solid ${t.palette.primary.main}22`,
                    color: 'white',
                  }}
                >
                  <CardMedia component="img" height="200" image={program.image} alt={program.description} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                      {program.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{textAlign: 'center'}}>
                      {`(${program.grade})`}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: '320px', opacity: 0.9 }}>{program.description}</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: '20px'}}>
                        <Button
                            component={Link}
                            to={`${program.registerUrl}`}
                            target={program.id === "travel"? "_blank": ""}
                            variant="contained"
                            sx={{
                                fontSize: 15,
                                transition: "opacity 0.3s, transform 0.3s",
                                "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
                            }}
                        >
                            REGISTER
                        </Button>
                        <Button
                            component={Link}
                            to={`${program.learnMoreUrl}`}
                            variant="contained"
                            sx={{
                                fontSize: 15,
                                backgroundColor: 'transparent',
                                border: '1px solid white',
                                ml: '10px',
                                transition: "opacity 0.3s, transform 0.3s",
                                "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
                            }}
                        >
                            LEARN MORE
                        </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

      </Box>
  );
}
