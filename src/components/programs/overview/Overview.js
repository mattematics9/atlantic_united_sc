import Cards from './Cards'
import { Box } from '@mui/material'
import Header from './Header'


const Overview = () => {
  return (
    <Box id="programs-overview" sx={{pt: "65px"}}>
        <Header/>
        <Cards/>
    </Box>
  )
}

export default Overview