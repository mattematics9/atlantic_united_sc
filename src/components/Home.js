import Header from './header/Header'
import Contact from './contact/Contact'
import Achievements from './achievements/Achievements'
import Leagues from './leagues/Leagues'
import CallToAction from './call_to_action/CallToAction'
import About from './about/about_overview/About'

const Home = () => {
  return (
    <>
       <Header/> 
       <Achievements/>
       <About/>
       <Leagues/>
       <CallToAction/>
       <Contact/>
    </>
  )
}

export default Home