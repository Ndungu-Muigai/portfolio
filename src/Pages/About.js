import Profile from '../assets/Profile.png'
const About = () => 
{
    return ( 
        <>
            <div id='about' className="d-flex flex-row justify-content-evenly align-items-center m-5">
                <img src={Profile} alt='Profile' className="img-fluid" style={{ width: '700px', height: 'auto' }}/>
                <div className="intro m-5">
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
                    <a href="../Curriculum Vitae.pdf" target='_blank' download={"Curriculum Vitae.pdf"}>
                        <button className='btn btn-primary'>Download CV</button>
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default About;