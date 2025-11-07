import Header from './header/Header'
import ContactTabs from './contact/ContactTabs'
import Achievements from './achievements/Achievements'
import Leagues from './leagues/Leagues'
import CallToAction from './call_to_action/CallToAction'
import PicturesAndText1 from './about/about_overview/PicturesAndText1'
import Huddle from './about/about_overview/Huddle'
import NowWePlay from './about/about_overview/NowWePlay'

const Home = () => {
  return (
    <>
       <Header/> 
       <Achievements/>
       <PicturesAndText1/>
       <Huddle/>
       <CallToAction/>
       <Leagues/>
       <NowWePlay/>
       <ContactTabs/>
    </>
  )
}

export default Home