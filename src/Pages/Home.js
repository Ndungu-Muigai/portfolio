import { ReactTyped } from "react-typed";
import Profile from '../assets/Profile.png'
import './CSS/Home.css'
const Home = () => 
{
    return ( 
        <>
            <div className="d-flex flex-row justify-content-around mb-3">
                <div className="intro">
                    <p>Hi there</p>
                    <p>My name is Samuel Muigai</p>
                    <p>I'm a</p>
                    <ReactTyped strings={[
                        "Front End Developer",
                        "Back End Developer",
                        "Full Stack Software Engineer"
                    ]} typeSpeed={40} backSpeed={50}/>
                </div>
                <div>
                    <img src={Profile} alt='Profile' className="img-fluid"/>
                </div>
            </div>
        </>
     );
}
 
export default Home;

