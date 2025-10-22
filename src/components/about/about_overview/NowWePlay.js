import React from 'react'
import { Box, Typography } from "@mui/material";

const NowWePlay = () => {
  return (
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: 250,
          // eslint-disable-next-line 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          bgcolor: "rgb(250, 250, 250)",
          color: "rgb(0, 0, 31)",
          fontSize: "30px",
          p: 3,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        <Typography component="p" 
          sx={{ 
            fontSize: "inherit", 
            m: 0,
            border: "1px dotted red",
            padding: 2,
            backgroundColor: 'rgba(248, 248, 248, 1)'
          }}>
            "NOW WE PLAY"
        </Typography>
      </Box>
  )
}

export default NowWePlay