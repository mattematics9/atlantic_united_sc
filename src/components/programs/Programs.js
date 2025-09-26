import ProgramsCards from './ProgramsCards'
import ProgramsDescription from './ProgramsDescription'
import { Box } from '@mui/material'


const Programs = () => {
  return (
    <Box id="programs" sx={{pt: {sm: "100px", xs: "50px"}, backgroundColor: "rgb(0, 0, 31,1)"}}>
        <ProgramsDescription/>
        <ProgramsCards/>
    </Box>
  )
}

export default Programs