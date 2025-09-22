import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsIcon from "@mui/icons-material/Sports";

const features = [
  {
    title: "Proven Track Record",
    text: "Our players have gone on to play at top universities.",
    icon: <VerifiedIcon fontSize="large" color="primary" />
  },
  {
    title: "Recruitment Platforms",
    text: "We provide tools and guidance to connect with college coaches.",
    icon: <GroupIcon fontSize="large" color="primary" />
  },
  {
    title: "ID Clinics and Camps",
    text: "Get noticed at our specialized ID clinics and showcase camps.",
    icon: <SportsSoccerIcon fontSize="large" color="primary" />
  },
  {
    title: "Scholarships",
    text: "We help our student-athletes maximize scholarship opportunities.",
    icon: <SchoolIcon fontSize="large" color="primary" />
  },
  {
    title: "Showcases",
    text: "Participate in top showcases throughout the country designed to highlight your skills.",
    icon: <EmojiEventsIcon fontSize="large" color="primary" />
  },
  {
    title: "Coaching Staff",
    text: "Many of our staff members are also coaches at D1, D2, D3 and Community Colleges.",
    icon: <SportsIcon fontSize="large" color="primary" />
  }
];

// ✅ Reusable FeatureCard component with hover animation
const FeatureCard = ({ title, text, icon }) => (
  <Card
    sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      maxWidth: 320, // keeps columns consistent
      margin: "0 auto", // centers each card
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: 8
      }
    }}
  >
    <CardContent
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.2)" }
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h5"
        sx={{ color: "rgb(0, 0, 203)", mt: 1, mb: 1 }}
      >
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {text}
      </Typography>
    </CardContent>
  </Card>
);

const College = () => {
  return (
    <Box id="college-page">
      {/* Hero Section */}
      <Box sx={{ backgroundColor: "white", py: 8, textAlign: "center" }}>
        <Container
          sx={{
            border: "2px dotted red",
            borderRadius: 2,
            p: 4,
            backgroundColor: "#fdfdfd"
          }}
        >
          <Typography variant="h3" gutterBottom>
            College Pathway
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 2,
              backgroundColor: "#d32a2a",
              margin: "10px auto"
            }}
          />
          <Typography variant="h6" color="text.secondary">
            Helping student-athletes achieve their dreams through dedication,
            opportunity, and exposure.
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 6, backgroundColor: "rgb(0, 0, 31)", color: "white" }}>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="center" // ✅ center entire grid
            alignItems="stretch"   // ✅ makes rows align evenly
          >
            {features.map((f, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} display="flex">
                <FeatureCard {...f} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: "#f1f1f1", py: 8, textAlign: "center" }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your College Soccer Journey?
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            color="error"
            size="large"
            sx={{
              mt: 3,
              transition: "transform 0.3s, opacity 0.3s",
              "&:hover": { opacity: 0.85, transform: "scale(1.05)" }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default College;






