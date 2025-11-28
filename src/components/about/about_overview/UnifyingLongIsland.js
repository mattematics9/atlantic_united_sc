import React from 'react'
import { Box, Typography, Card, CardContent } from '@mui/material'

import backgroundImage from '../../../images/ward_melville_hs2.png'

const UnifyingLongIsland = () => {

  return (
        <Box id='unifying-long-island'>
            <Box 
                sx={{ 
                    background: `linear-gradient(120deg, rgba(0, 2, 128, 0.55), rgba(0,2,128, .55)), url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: {xs: '250px', sm: '350px'},
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h3"
                    sx={{
                        textAlign: 'center', 
                        fontSize: {xs: "32px", sm: "40px", lg: "55px"}
                    }}>
                    Unifying Long Island Soccer
                </Typography>
            </Box>
            <Card sx={{ p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h6">
                        Atlantic United Soccer Club brings together the proud traditions of three long-standing Long Island programs - LGN Soccer Club, Three Village Soccer Club, and Middle Country Soccer Club. While maintaining the customs and community feel amongst our constituent clubs, we strategically come together to better serve our families with one unified pathway and curriculum that produces teams that compete at the state, regional, and national levels.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
  )
}

export default UnifyingLongIsland