import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Home.css'
import './assets/About.css'
import './assets/Navbar.css'
import './assets/Skills.css'
import './assets/Contacts.css'

import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import About from './Pages/About';

function App() 
{
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
    </>
  );
}

export default App;
