import Profile from '../assets/Profile.png'
import CV from '../CV/Curriculum Vitae.pdf'

const About = () => 
{
    return ( 
        <>
            <div id='about' className="container about-container">
                <img src={Profile} alt='Profile' className="img-fluid"/>
                <div className="intro mx-2 mt-2">
                    <h1>ABOUT ME</h1>
                    <p>
                        My name is Samuel Muigai, a fullstack software Developer.
                    </p>
                    <p>
                        I strive to bring ideas to reality through coding.
                        I believe in the power of collaboration and I enjoy working with others to bring out the full functionality of softwares and websites.
                    </p>
                    <p>
                        I have deep interest in ReactJS and Python and I have been able to  develop projects using these technologies. Feel free to look around.
                    </p>
                    <a href={CV} target='_blank' rel="noreferrer">
                        <button className='btn btn-primary'>Download CV</button>
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default About;