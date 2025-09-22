import React from "react";
import { Box, Container, Typography, Tabs, Tab, Button } from "@mui/material";
import { Link } from "react-router-dom";
import TravelContacts from "./TravelContacts";
import PreTravelContacts from "./PreTravelContacts";
import IntramuralContacts from "./IntramuralContacts";
import GrassrootsContacts from "./GrassrootsContacts";

const Contact = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 4, md: 15 },
        px: { xs: 2, md: 0 },
        color: "black",
        overflowX: "auto",
      }}
    >
      <Container>
        <Typography
          id="contact-heading"
          align="center"
          sx={{
            fontSize: { xs: "34px", sm: "40px", md: "50px" },
            mb: 6,
            "&::after": {
              display: "block",
              height: "2px",
              bgcolor: "#d32a2a",
              content: '""',
              width: "120px",
              margin: "20px auto",
            },
          }}
        >
          We're happy to hear from you!
        </Typography>

        <Typography
          id="contact-page-description"
          align="center"
          sx={{ fontSize: { xs: "16px", md: "20px" }, mb: 4 }}
        >
          Select the program below you are interested in to see the contacts. If
          you would like to see more details about the programs we have to
          offer, click <Button component={Link} to='/programs' sx={{fontSize: '20px', '&:hover': {opacity: '.8'}}}>HERE</Button>
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="error"
          indicatorColor="error"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            "& .MuiTab-root": {
              fontSize: { xs: "9px", sm: "11px", md: "14px", lg: "18px", xl: "25px" },
              color: "red",
            }
          }}
        >
          <Tab label="TRAVEL" sx={{'&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="PRE-TRAVEL" sx={{'&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="INTRAMURAL" sx={{'&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="GRASSROOTS" sx={{'&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
        </Tabs>

        {value === 0 && <TravelContacts />}
        {value === 1 && <PreTravelContacts />}
        {value === 2 && <IntramuralContacts />}
        {value === 3 && <GrassrootsContacts />}
      </Container>
    </Box>
  );
};

export default Contact;
