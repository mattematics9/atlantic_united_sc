import { Box, Typography, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import huddle from "../../../images/huddle.png";


const Huddle = () => {

  return (

    // Separate displays for larger and smaller screens
    <Box id="huddle">

    {/* Display 1: Larger Screens.  Huddle pic with About and College text overlapped */}
      <Box id="huddle-display-1"
        sx={{
          display: {xs: "none", md: "block"},
          position: "relative",
          height: "900px",
          backgroundImage: 
                `radial-gradient(rgba(0,0,31,0),rgba(0,0,31,0),rgba(0,0,31,.1), rgba(0,0,31,.5), rgba(0,0,31,.8),rgba(0,0,31,1), rgba(0,0,31,1), rgba(0,0,31,1)),
                 linear-gradient(rgba(0,0,31,0),rgba(0,0,31,0),rgba(0,0,31,0), rgba(0,0,31,.1), rgba(0,0,31,.3),rgba(0,0,31,.7), rgba(0,0,31,1), rgba(0,0,31,1)),
                 url(${huddle})`,
          backgroundPosition: "center 150px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          pt: "250px" ,
          pb: "100px",
          bgcolor: "rgb(0,0,31)",
        }}
      >
            {/*About Us*/}
            <Paper
                id="about-us-display-1"
                sx={{
                    position: { xs: "relative", md: "absolute" },
                    top: "-100px",
                    left: 0,
                    width: "490px",
                    p: 3,
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    borderTopLeftRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    border: "1px solid grey",
                    color: "rgb(0,0,31)",
                    bgcolor: "white",
                }}
                >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        mt: "30px",
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "red",
                            content: '" "',
                            width: "80px",
                            margin: "10px auto"
                        },
                        color: "#002c7dff",
                    }}
                >
                    ABOUT US
                </Typography>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: "18px", fontStyle: "italic" }}>
                    Atlantic United Soccer Club brings together the proud
                    traditions of three long-standing Long Island programs - LGN Soccer Club,
                    Three Village Soccer Club, and Middle Country Soccer Club. Our travel
                    teams compete at the highest levels of youth soccer nationwide, while
                    we also provide a full range of programs designed to support players of
                    all ages, skill levels, and interests.{" "}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button component={Link} to='/about' sx={{color: 'rgba(50, 146, 255, 1)', fontSize: '20px', fontWeight: 500, '&:hover': {opacity: '.8'}}}>
                        MORE ABOUT US
                    </Button>
                </Box>
            </Paper>

            {/*Pathway to College Soccer*/}
            <Box
                id="pathway-to-college-soccer-panel-home-page"
                sx={{
                    position: "absolute",
                    bottom: "30px" ,
                    right: "30px",
                    width: "500px",
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
                    mt: "30px",
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
                <Typography variant="h4" sx={{ fontSize: "24px", fontStyle: "italic" }}>
                    90% college placement track record
                </Typography>
                <Button component={Link} to='/college' sx={{fontSize: '20px', color: 'rgba(183, 213, 255, 1)', '&:hover': {opacity: '.8'}}}>
                    *MORE ON COLLEGE RECRUITMENT*
                </Button>
            </Box>

            {/*Stronger Together*/}
            <Box 
                sx={{
                    position: 'absolute',
                    top: '60px',
                    right: '60px',
                    color: 'white',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                    background: "linear-gradient(90deg,#fff,#90caf9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    letterSpacing: "2px",
                    textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
                    fontSize: {xs: '40px', sm: '50px', md: '60px', lg: '80px'}
                    }}
                >
                    Stronger
                </Typography>
        
                <Typography
                    variant="h1"
                    sx={{
                    ml: "30px",
                    mt: {xs: "-10px", md: "-20px"},
                    background: "linear-gradient(90deg,#fff,#90caf9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    letterSpacing: "2px",
                    textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
                    fontSize: {xs: '40px', sm: '50px', md: '60px', lg: '80px'}
                    }}
                >
                    Together
                </Typography>
            </Box>
      </Box>

    {/* Display 2: Smaller screens, no overlap with huddle pic and about and college */ }
      <Box id="huddle-display-2"
        sx={{display: { xs: "block", md: "none" }}}
      >
            <Paper
                id="about-us-display-2"
                sx={{
                    position: "relative",
                    p: 3,
                    color: "rgb(0,0,31)",
                    bgcolor: "white",
                    borderRadius: '0px'
                }}
                >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        mt: "30px",
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "red",
                            content: '" "',
                            width: "80px",
                            margin: "10px auto"
                        },
                        color: "#002c7dff",
                    }}
                >
                    ABOUT US
                </Typography>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, fontSize: "18px", fontStyle: "italic" }}>
                    Atlantic United Soccer Club brings together the proud
                    traditions of three long-standing Long Island programs - LGN Soccer Club,
                    Three Village Soccer Club, and Middle Country Soccer Club. Our travel
                    teams compete at the highest levels of youth soccer nationwide, while
                    we also provide a full range of programs designed to support players of
                    all ages, skill levels, and interests.{" "}
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button component={Link} to='/about' sx={{color: 'rgba(50, 146, 255, 1)', fontSize: '20px', '&:hover': {opacity: .8}}}>
                        MORE ABOUT US
                    </Button>
                </Box>
            </Paper>


            <Box
                sx={{
                    height: "500px",
                    backgroundImage: `linear-gradient(45deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0.2) 100%), url(${huddle})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {/*Stronger Together*/}
                <Box 
                    sx={{
                        color: 'white',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                        background: "linear-gradient(90deg,#fff,#90caf9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 900,
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        letterSpacing: "2px",
                        textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
                        fontSize: {xs: '60px', lg: '80px'}
                        }}
                    >
                        Stronger
                    </Typography>
            
                    <Typography
                        variant="h1"
                        sx={{
                        ml: "30px",
                        mt: {xs: "-10px", md: "-20px"},
                        background: "linear-gradient(90deg,#fff,#90caf9)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: 900,
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        letterSpacing: "2px",
                        textShadow: "0px 0px 12px rgba(255,255,255,0.35)",
                        fontSize: {xs: '60px', lg: '80px'}
                        }}
                    >
                        Together
                    </Typography>
                </Box>
            </Box>
      </Box>

    </Box>
  );
};

export default Huddle;

