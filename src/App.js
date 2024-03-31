import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Home.css'
import './assets/About.css'
import './assets/Navbar.css'
import './assets/Skills.css'
import './assets/Contacts.css'

import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

function App() 
{
  const location=useLocation()

  //Array of paths where the footer will be excluded
  const excludePath=["/"]

  //Checking if the current location's path is in the excludes path array
  const  showFooter = excludePath.includes(location.pathname) ? true : false

  return (
    <>
      <NavBar/>
      <div style={{marginTop: "100px"}}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/skills' element={<Skills/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
      </div>
      {console.log(showFooter)}
      {!showFooter && <Footer/>}
    </>
  );
}

export default App;
