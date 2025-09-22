import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import wildlingsCelebrationNationalLeague from '../../images/wildlings_celebration_national_league.jpg'

const Header = () => {
  return (
    <Box
      id="header"
      sx={{
        backgroundImage: {
          xs: `radial-gradient(rgba(0,0,31,0), rgba(0,0,31,0.3), rgba(0,0,31,0.8), rgba(0,0,31,1)),
                url(${wildlingsCelebrationNationalLeague})`,
          sm: `radial-gradient(rgba(0,0,31,0), rgba(0,0,31,0.3), rgba(0,0,31,0.8), rgba(0,0,31,1)),
                url(${wildlingsCelebrationNationalLeague})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center 0px",
        backgroundRepeat: "no-repeat",
        height: { xs: "420px", sm: "500px", md: "608px" },
        pt: { xs: "130px", sm: "200px" },
        "@media (max-width:450px)": {
          backgroundImage: `radial-gradient(rgba(0,0,31,0), rgba(0,0,31,0), rgba(0,0,31,0.3), rgba(0,0,31,0.7), rgba(0,0,31,1)),
                            linear-gradient(rgba(0,0,31,0), rgba(0,0,31,0), rgba(0,0,31,0), rgba(0,0,31,0), rgba(0,0,31,0.5), rgba(0,0,31,0.8), rgba(0,0,31,1)),
                            url(${wildlingsCelebrationNationalLeague})`,
          height: "610px",
          pt: "230px",
        }
      }}
    >
      <Container id="header-content">
        <Typography
          id="header-atlantic-united-text"
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "37px", sm: "40px", md: "70px" },
            fontStyle: "italic",
            fontWeight: "300",
            m: "5px",
          }}
        >
          ATLANTIC UNITED
        </Typography>
        <Typography
          id="header-soccer-club-text"
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            fontSize: { xs: "37px", sm: "40px", md: "70px" },
            fontStyle: "italic",
            fontWeight: "300",
            m: "5px",
          }}
        >
          SOCCER CLUB
        </Typography>

        <Box textAlign="center">
          <Button
            id="register-now-btn"
            component={Link}
            to="/register"
            sx={{
              borderStyle: "solid",
              borderWidth: 1,
              borderRadius: "80px",
              mt: "20px",
              mr: "20px",
              fontSize: { xs: "15px", sm: "22px" },
              backgroundColor: { xs: "transparent", sm: "red" },
              borderColor: { xs: "white", sm: "red" },
              color: "white",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: { sm: "red", xs: "transparent" },
              },
            }}
          >
            REGISTER NOW
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;


