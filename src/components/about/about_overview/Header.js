import React from 'react'
import { Box, Typography } from '@mui/material'

import backgroundImage from '../../../images/caso2.png'

const Header = () => {

  return (
        <Box id='about-header'>
            {/* Extra Small Screen */}
            <Box 
                sx={{ 
                    display: {xs: 'flex', sm: 'none'},
                    color: 'rgba(0, 6, 91, 1)',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pb: '17px'
                }}
            >
                <Typography variant="h4" gutterBottom 
                    sx={{
                        mt: '50px',
                        textAlign: 'center', 
                        fontFamily: 'Playfair Display',
                          "&::after": {
                          display: "block",
                          height: "2px",
                          backgroundColor: "red",
                          content: '" "',
                          width: "80px",
                          margin: "10px auto",
                      },
                    }}>
                    History of Success
                </Typography>
                <Typography variant="h6" gutterBottom 
                    sx={{ 
                        px: '17px',
                    }}>
                    AUSC has a extensive track record of accomplishment at the highest levels of youth soccer in the nation.
                </Typography>
            </Box>
            {/* Small Screen and Up */}
            <Box 
                sx={{ 
                    background: `linear-gradient(120deg, rgba(0, 17, 255, 0.35), rgba(0, 17, 255, 0.35)), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: {xs: '150px', sm: '350px'},
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    pb: {xs: '30px', sm: '0px'}
                }}
            >
                <Typography variant="h3" gutterBottom 
                    sx={{
                        textAlign: 'center', 
                        display: {xs: 'none', sm: 'block'},
                        fontFamily: 'Playfair Display'
                    }}>
                    History of Success
                </Typography>
            </Box>
        </Box>
  )
}

export default Header