import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Navbar.css'

import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
      <NavBar/>
      <div style={{marginTop: "75px"}}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/skills' element={<Skills/>}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/contacts' element={<Contacts/>}></Route>
          <Route path='*' element={<div>Page not found</div>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
