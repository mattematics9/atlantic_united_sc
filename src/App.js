import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/nav/Navbar";
import Home from './components/Home';
import Footer from './components/footer/Footer';
import About from './components/about/about_overview/About';
import SocialMedia from './components/social_media/SocialMedia';
import Contact from './components/contact/Contact';
import Resources from './components/resources/Resources';
import Programs from './components/programs/Programs';
import Register from './components/register/Register';
import LeagueLogos from './components/league_logos/LeagueLogos';
import PreTravel from './components/programs/PreTravel'
import Travel from './components/programs/Travel'
import Testimonials from './components/testimonials/Testimonials';
import Fields from './components/about/fields/Fields'
import College from './components/college/College';



function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <LeagueLogos/>
        <SocialMedia/>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={ <Home/> }/>
            <Route path='/about' element={ <About/> }/>    
            <Route path='/contact' element={ <Contact/> }/>  
            <Route path='/programs' element={ <Programs/> }/>  
            <Route path='/resources' element={ <Resources/> }/>    
            <Route path='/register' element={ <Register/> }/>    
            <Route path='/testimonials' element={ <Testimonials/> }/>    
            <Route path='/fields' element={ <Fields/> }/>    
            <Route path='/programs/pre-travel-academy' element={ <PreTravel/> }/>    
            <Route path='/programs/travel-academy' element={ <Travel/> }/>    
            <Route path='/college' element={ <College/> }/>    
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;