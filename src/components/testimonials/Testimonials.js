import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Avatar,
  Fade,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Images
import field from "../../images/ward_melville_hs2.png";
import AndrewTinari from "../../images/andrew-tinari-2.png";
import Telma from "../../images/telma2.png";
import Jillian from "../../images/jillian.jpg";

const testimonials = [
  {
    id: 1,
    name: "Andrew Tinari, Professional Soccer Player",
    text: "This club means the world to me and has helped shape me into the person and player I am today. It has provided a professional environment to develop my play, given me so many friends, and has become part of my family.",
    img: AndrewTinari,
  },
  {
    id: 2,
    name: "Telma Bonilla, Atlantic United Parent",
    text: "They are the best! Over the years I have watched my three boys progress more than I could have imagined. The trainers are so knowledgeable and great with children! I am so happy I found a second home for my kids.",
    img: Telma,
  },
  {
    id: 3,
    name: "Jillian Colucci, D1 College Player",
    text: "The competitive and hard working environment that this club creates helped develop my character and prepared me to be a D1 athlete. The coaches are sincerely invested in the success of their players on and off the field.",
    img: Jillian,
  },
];

  const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const intervalRef = useRef(null);
    const resumeTimeoutRef = useRef(null);

    useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [current]);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      handleNext(false);
    }, 10000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const pauseAndResumeLater = () => {
    stopAutoPlay();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoPlay();
    }, 10000);
  };

  const changeSlide = (newIndex, userAction = true) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(newIndex);
      setFade(true);
    }, 500);
    if (userAction) pauseAndResumeLater();
  };

  const handleNext = (userAction = true) => {
    const newIndex = (current + 1) % testimonials.length;
    changeSlide(newIndex, userAction);
  };

  const handlePrev = () => {
    const newIndex = current === 0 ? testimonials.length - 1 : current - 1;
    changeSlide(newIndex);
  };

  return (
    <Box
      id="testimonials"
      sx={{
        backgroundImage: `linear-gradient(120deg, rgba(1, 0, 33, 0.75), rgba(255, 0, 0, 0.35)), url(${field})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        pt: { xs: '150px', md: '180px' },
        pb: '30px',
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h3"
        sx={{
          color: "white",
          mb: 2,
          ml: 2,
          mr: 2,
          "&::after": {
            content: '""',
            display: "block",
            height: "2px",
            width: "120px",
            backgroundColor: "white",
            margin: "20px auto",
          },
        }}
      >
        WHAT OUR MEMBERS HAVE TO SAY
      </Typography>

      {/* Testimonial Wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6,
        }}
      >
        {/* Inner container restricts arrow positioning to card */}
        <Box sx={{ position: "relative", maxWidth: { xs: 350, sm: 500, md: 700, lg: 900 }, width: "100%" }}>
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 8, sm: -40 }, 
              top: "50%",
              transform: "translateY(-50%)",
              color: { xs: "black", sm: "white" },
              backgroundColor: "transparent",          // default
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)", // subtle hover (optional)
              },
              "&:focus": {
                backgroundColor: "transparent",        // stop teal circle
              },
              "&:active": {
                backgroundColor: "transparent",        // stop teal circle
              },
            }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>

          {/* Testimonial Card */}
          <Fade in={fade} timeout={500}>
            <Card
              elevation={6}
              sx={{
                borderRadius: 3,
                minHeight: 200,
                px: 4,
                py: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
                  “{testimonials[current].text}”
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  - {testimonials[current].name}
                </Typography>
                <Avatar
                  src={testimonials[current].img}
                  alt={testimonials[current].name}
                  sx={{
                    width: 120,
                    height: 120,
                    mx: "auto",
                    mt: 3,
                  }}
                />
              </CardContent>
            </Card>
          </Fade>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 8, sm: -40 }, 
              top: "50%",
              transform: "translateY(-50%)",
              color: { xs: "black", sm: "white" },
              backgroundColor: "transparent",          // default
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)", // subtle hover (optional)
              },
              "&:focus": {
                backgroundColor: "transparent",        // stop teal circle
              },
              "&:active": {
                backgroundColor: "transparent",        // stop teal circle
              },
            }}
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Navigation Dots */}
      <Box sx={{ mt: 2 }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => changeSlide(index)}
            sx={{
              display: "inline-block",
              height: 12,
              width: 12,
              borderRadius: "50%",
              mx: 0.5,
              cursor: "pointer",
              backgroundColor:
                index === current ? "rgb(255,63,63)" : "white",
              "&:hover": {
                backgroundColor:
                  index === current ? "rgb(255,63,63)" : "#f0f0f0",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;