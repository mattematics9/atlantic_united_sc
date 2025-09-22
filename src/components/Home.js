import Header from './header/Header'
import ProgramsCards from './programs/ProgramsCards'
import ProgramsDescription from './programs/ProgramsDescription'
import Testimonials from './testimonials/Testimonials'
import TreeWithLogos from './about/TreeWithLogos'
import PicturesAndText from './about/PicturesAndText'
import Contact from './contact/Contact'
import College from './college/College'

const Home = () => {
  return (
    <>
       <Header/> 
       <PicturesAndText/>
       <TreeWithLogos/>
       <ProgramsDescription/>
       <ProgramsCards/>
       <Testimonials/>
       <College/>
       <Contact/>
    </>
  )
}

export default Home