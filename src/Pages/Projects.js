import { Link } from 'react-router-dom';
import projects from '../Data/Projects.json';

const Projects = () => {
    const projectsMap = projects.map(project => {
        let { id, icon, title, demo_link, source_code } = project;

        return (
            <div key={id} className='col-lg-3 col-md-4 my-3 d-flex justify-content-center'>
                <div className="border border-light rounded text-center p-3">
                    <i className={icon} style={{ fontSize: '3.2em', padding: '10px' }}></i>
                    <p className='fs-5'>{title}</p>
                    <Link to={demo_link} target='_blank' className='btn border-light text-light px-3 py-2'>Live preview</Link>
                    <br/><br/>
                    <Link to={source_code} target='_blank' className='btn border-light text-light px-3 py-2'>Source Code</Link>
                </div>
            </div>
        );
    });

    return ( 
        <div id='projects' className='my-5'>
            <h1 className='text-uppercase text-center fw-bolder fs-2 text-decoration-underline my-4'>Projects completed</h1>
            <div className="container">
                <div className="row">
                    {projectsMap}
                </div>
            </div>
        </div>
    );
};
 
export default Projects;
