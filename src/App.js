import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from "./components/nav/Navbar";
import Home from './components/Home';
import Footer from './components/footer/Footer';
import About from './components/about/about_overview/About';
import SocialMedia from './components/social_media/SocialMedia';
import Contact from './components/contact/Contact';
import Resources from './components/resources/Resources';
import Programs from './components/programs/overview/Overview';
import Register from './components/register/Register';
import AtlanticUnitedLogo from './components/logos/AtlanticUnitedLogo';
import PreTravel from './components/programs/pre-travel/PreTravel';
import Travel from './components/programs/travel/Travel';
import Testimonials from './components/testimonials/Testimonials';
import Fields from './components/about/fields/Fields';
import College from './components/college/College';
import Intramural from './components/programs/intramural/Intramural';
import Grassroots from './components/programs/grassroots/Grassroots';
import RegisterPreTravel from './components/register/RegisterPreTravel'
import RegisterIntramural from './components/register/RegisterIntramural';
import IntramuralTest from './components/programs/intramural/IntramuralTest'

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";


function App() {
  return (
    // <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <BrowserRouter>
          <AtlanticUnitedLogo/>
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
              <Route path='/programs/intramural' element={ <Intramural/> }/>    
              <Route path='/programs/grassroots' element={ <Grassroots/> }/>    
              <Route path='/college' element={ <College/> }/>    
              <Route path='/programs/pre-travel-academy/registration' element={ <RegisterPreTravel/> }/>
              <Route path='/programs/intramural/registration' element={ <RegisterIntramural/> }/>
              <Route path='/programs/intramural/test' element={ <IntramuralTest/> }/>
            </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    // </ThemeProvider>
  );
}

export default App;