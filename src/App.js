import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Home.css'
import './assets/About.css'
import './assets/Navbar.css'
import './assets/Skills.css'
import './assets/Contacts.css'

import { Routes, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <div id="about" style={{marginTop: "250px"}}>
        <About/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contacts">
        <Contacts/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
