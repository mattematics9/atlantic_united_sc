import ProgramsCards from './ProgramsCards'
import ProgramsDescription from './ProgramsDescription'
import { Box } from '@mui/material'


const Programs = () => {
  return (
    <Box id="programs" sx={{pt: {xs: "80px", md: "100px"}, backgroundColor: "rgb(0, 0, 31,1)"}}>
        <ProgramsDescription/>
        <ProgramsCards/>
    </Box>
  )
}

export default Programs