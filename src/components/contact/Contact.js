import React from "react";
import { Box } from "@mui/material";
import ContactTabs from "./ContactTabs";

const Contact = () => {

  return (
    <Box
      id="contact"
      sx={{
        pt: {xs: '50px'},
      }}
    >
      <ContactTabs/>
    </Box>
  );
};

export default Contact;
