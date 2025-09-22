import React from 'react'
import CoachResources from './CoachResources'
import { Box } from '@mui/material'

const Resources = () => {
  return (
    <Box id='resources' sx={{pt: {md: "100px", xs: "50px"}, pb: "40px"}}>
        <CoachResources/>
    </Box>
  )
}

export default Resources