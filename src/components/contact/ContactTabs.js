import React from "react";
import { Box, Container, Typography, Tabs, Tab, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TravelContacts from "./TravelContacts";
import PreTravelContacts from "./PreTravelContacts";
import IntramuralContacts from "./IntramuralContacts";
import GrassrootsContacts from "./GrassrootsContacts";

const ContactTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="contactTabs"
      sx={{
        pt: { xs: 10, sm: 15 },
        pb: "30px",
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
            fontWeight: 600,
            mb: {xs: 2, sm: 6},
            "&::after": {
              display: "block",
              height: "2px",
              bgcolor: "#d32a2a",
              content: '""',
              width: {xs: "70px", sm: "120px"},
              margin: "20px auto"
            },
          }}
        >
          We're happy to hear from you!
        </Typography>

        <Typography
          id="contact-page-description"
          align="center"
          sx={{ 
            fontSize: { xs: "16px", md: "20px" }, 
            fontWeight: 600,
            mb: 4 
          }}
        >
          There are different contacts for the various programs offered.  Select the program below you are interested in to see the contacts. If you would like to see more details about the programs we have to offer, visits our <Link component={RouterLink} to='/programs' sx={{fontSize: '20px', textDecoration: 'none', color: 'blue', '&:hover': {opacity: '.7', cursor: 'pointer'}}}>PROGRAMS OVERVIEW</Link> page.
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          textColor="error"
          indicatorColor="error"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center", // ✅ centers tabs
            "& .MuiTabs-flexContainer": {
              justifyContent: "center", // ✅ ensures actual tab labels are centered
            },
            "& .MuiTab-root": {
              fontSize: { xs: "9px", sm: "11px", md: "14px", lg: "18px", xl: "25px" },
              color: "red",
              minWidth: { xs: "60px", sm: "auto" }, // ✅ allows tab to shrink properly
              paddingX: { xs: 0.5, sm: 1, md: 2 }, // ✅ less padding on small screens
            },
            "& .Mui-selected": {
              backgroundColor: "rgba(255, 241, 241, 1)",
              border: "1px solid red"
            },
          }}
        >
          <Tab label="TRAVEL" sx={{fontWeight: 600, '&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="PRE-TRAVEL" sx={{fontWeight: 600, '&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="INTRAMURAL" sx={{fontWeight: 600, '&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
          <Tab label="GRASSROOTS" sx={{fontWeight: 600, '&:focus, &:active': {backgroundColor: 'rgba(255, 241, 241, 1)', border: '1px solid red'},'& .MuiTouchRipple-root': {color: 'transparent'}}}/>
        </Tabs>

        {value === 0 && <TravelContacts />}
        {value === 1 && <PreTravelContacts />}
        {value === 2 && <IntramuralContacts />}
        {value === 3 && <GrassrootsContacts />}
      </Container>
    </Box>
  );
};

export default ContactTabs;
