import { ReactTyped } from "react-typed";

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-content">
                <h1 className="fade-in">Hi there!</h1>
                <h2 className="fade-in">My name is Samuel Muigai</h2>
                <p className="fade-in">I'm a</p>
                <ReactTyped
                    strings={[
                        "Front End Developer",
                        "Back End Developer",
                        "Full Stack Software Engineer"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    style={{fontSize: "1.5em"}}
                />
            </div>
        </div>
    );
};

export default Home;
