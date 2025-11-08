import { Box } from '@mui/material'
import React from 'react'
import stonyBrookUniversityPlayers from '../../images/stony-brook-university-players.png'

const StonyBrookUniversityPlayers = () => {
  return (
    <Box id="stony-brook-university-players-pic"
        sx={{
            height: {xs: '280px', sm: '550px', lg: '800px'},
            backgroundImage: `linear-gradient(rgba(255, 0, 0,.15), rgba(255, 0, 0, 0.15)),url(${stonyBrookUniversityPlayers})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}
    
    >

    </Box>
  )
}

export default StonyBrookUniversityPlayers