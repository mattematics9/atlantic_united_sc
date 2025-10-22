import Header from './header/Header'
import TreeWithLogos from './about/about_overview/TreeWithLogos'
import PicturesAndText from './about/about_overview/PicturesAndText'
import Contact from './contact/Contact'
import Achievements from './achievements/Achievements'
import Leagues from './leagues/Leagues'
import CallToAction from './call_to_action/CallToAction'

const Home = () => {
  return (
    <>
       <Header/> 
       <Achievements/>
       <PicturesAndText/>
       <TreeWithLogos/>
       <Leagues/>
       <CallToAction/>
       <Contact/>
    </>
  )
}

export default Home