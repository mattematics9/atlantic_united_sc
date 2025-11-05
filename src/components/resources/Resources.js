import React from 'react'
import CoachResources from './CoachResources'
import { Box } from '@mui/material'

const Resources = () => {
  return (
    <Box id='resources' sx={{
      pt: {xs: "100px"}, 
      pb: "40px"
    }}>
        <CoachResources/>
    </Box>
  )
}

export default Resources