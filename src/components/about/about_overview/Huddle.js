import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import huddle from "../../../images/huddle.png";



const Huddle = () => {

  return (
    <>
      {/* Main Container with huddle background for desktop */}
      <Box
        id="huddle"
        sx={{
          position: "relative",
          height: "900px",
          backgroundImage: {
            md: `radial-gradient(rgba(0,0,31,0),rgba(0,0,31,0),rgba(0,0,31,0), rgba(0,0,31,.1), rgba(0,0,31,.3),rgba(0,0,31,1), rgba(0,0,31,1), rgba(0,0,31,1)),
                 linear-gradient(rgba(0,0,31,0),rgba(0,0,31,0),rgba(0,0,31,0), rgba(0,0,31,.1), rgba(0,0,31,.3),rgba(0,0,31,.7), rgba(0,0,31,1), rgba(0,0,31,1)),
                 url(${huddle})`,
            xs: "none", // remove on small screens
          },
          backgroundPosition: "center 150px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: { xs: 0, md: "250px" },
          pb: { xs: 0, md: "100px" },
          bgcolor: "rgb(0,0,31)",
        }}
      >
        {/* ABOUT US Panel */}
        <Paper
          id="about-us"
          sx={{
            position: { xs: "relative", md: "absolute" },
            top: { xs: 0, md: "-100px" },
            left: 0,
            width: { xs: "100%", md: "490px" },
            p: 3,
            borderTopRightRadius: { xs: 0, md: "20px" },
            borderBottomRightRadius: { xs: 0, md: "20px" },
            border: { xs: "none", md: "1px solid grey" },
            color: "rgb(0,0,31)",
            bgcolor: "white",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              mt: {xs: "30px"},
              "&::after": {
                display: "block",
                height: "2px",
                backgroundColor: "red",
                content: '" "',
                width: "80px",
                margin: "10px auto"
              },
            }}
          >
            ABOUT US
          </Typography>
          <Typography sx={{ mt: 3, mb: 3, fontSize: "18px", fontStyle: "italic" }}>
            Atlantic United Soccer Club brings together the proud
            traditions of three long-standing Long Island programs—LGN Soccer Club,
            Stony Brook Soccer Club, and Middle Country Soccer Club. Our travel
            teams compete at the highest levels of youth soccer nationwide, while
            we also provide a full range of programs designed to support players of
            all ages, skill levels, and interests.{" "}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Button component={Link} to='/programs' sx={{fontSize: '20px', '&:hover': {textDecoration: 'underline'}}}>
              SEE OUR PROGRAMS
            </Button>
          </Box>
        </Paper>

        {/* Titles Panel */}
        <Box
          id="titles"
          sx={{
            position: { xs: "relative", md: "absolute" },
            bottom: { xs: 0, md: "30px" },
            right: { xs: "unset", md: "30px" },
            width: { xs: "100%", md: "500px" },
            p: 3,
            border: "2px dotted white",
            color: "rgb(244,244,255)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontStyle: "italic",
              mt: {xs: "30px"},
              "&::after": {
                display: "block",
                height: "2px",
                backgroundColor: "red",
                content: '" "',
                width: "80px",
                margin: "10px auto"
              },
            }}
          >
            PATHWAY TO COLLEGE SOCCER
          </Typography>
          <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontStyle: "italic" }}>
            90% college placement track record
          </Typography>
          <Button component={Link} to='/college' sx={{fontSize: '20px', color: 'rgba(183, 213, 255, 1)', '&:hover': {opacity: '.8'}}}>
            *MORE ON COLLEGE RECRUITMENT*
          </Button>
        </Box>

      </Box>

      {/* Mobile/Tablet huddle background (shown after tree) */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: "500px",
          backgroundImage: `url(${huddle})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

    </>
  );
};

export default Huddle;

