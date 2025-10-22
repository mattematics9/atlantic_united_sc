import Header from './header/Header'
import Contact from './contact/Contact'
import Achievements from './achievements/Achievements'
import Leagues from './leagues/Leagues'
import CallToAction from './call_to_action/CallToAction'
import PicturesAndText from './about/about_overview/PicturesAndText'
import Huddle from './about/about_overview/Huddle'
import NowWePlay from './about/about_overview/NowWePlay'

const Home = () => {
  return (
    <>
       <Header/> 
       <Achievements/>
       <PicturesAndText/>
       <Huddle/>
       <NowWePlay/>
       <Leagues/>
       <CallToAction/>
       <Contact/>
    </>
  )
}

export default Home