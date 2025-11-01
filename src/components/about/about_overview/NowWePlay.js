import React from 'react'
import { Box, Typography } from "@mui/material";
import wildlingsNewWarmups from '../../../images/wildlings-new-warmups-cropped.jpeg';

const NowWePlay = () => {
  return (
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: {xs: '200px', sm: '400px', md: '550px'},
          // eslint-disable-next-line 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundImage: `linear-gradient( 90deg, rgba(0, 0, 49, 0.5) 0%, rgba(255, 0, 0, 0.5) 100%), url(${wildlingsNewWarmups})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: 'white',
          fontSize: "30px",
          p: 3,
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        <Typography component="p" 
          sx={{ 
            display: {xs: 'none', sm: 'block'},
            fontSize: "inherit", 
            border: "1px dotted white",
            padding: 2,
            backgroundColor: 'transparent',
          }}>
            "NOW WE PLAY"
        </Typography>
      </Box>
  )
}

export default NowWePlay