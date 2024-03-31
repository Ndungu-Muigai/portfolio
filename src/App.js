import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Home.css'
import './assets/About.css'
import './assets/Navbar.css'
import './assets/Skills.css'
import './assets/Contacts.css'

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
      <div style={{marginTop: "80px", zIndex: "1000"}}>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
