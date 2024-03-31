import { useState } from 'react';
import skills from '../Data/Skills.json'
import { useEffect } from 'react';

const Skills = () => 
{
    const [languages, setLanguages] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [cssFrameworks, setCssFrameworks] = useState([]);
    const [databases, setDatabases]=useState([])

    useEffect(() => 
    {
        setLanguages(skills[0].languages);
        setFrameworks(skills[1].frameworks);
        setCssFrameworks(skills[2].css_frameworks);
        setDatabases(skills[3].databases)
    }, []);

    return ( 
        <>
            <h1 className='text-uppercase text-center fw-bolder text-decoration-underline my-4'>My skills</h1>
            <div className="container">
                <div className="row my-3">
                    <h2>Programming languages</h2>
                    {languages.map(language =>
                        {
                            return (
                                <>
                                    <div key={language.name} className='col my-3'>
                                        <div className="border border-light rounded text-center p-3">
                                            <i className={language.icon} style={{ color: language.color}}></i>
                                            <p className='mt-2 fs-4'>{language.name}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
                <div className="row">
                    <h2>CSS Frameworks</h2>
                    {cssFrameworks.map(framework =>
                        {
                            return (
                                <>
                                    <div key={framework.name} className='col my-3'>
                                        <div className="border border-light rounded text-center p-3">
                                            <i className={framework.icon} style={{ color: framework.color}}></i>
                                            <p className='mt-2 fs-4'>{framework.name}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
                <div className="row my-3">
                    <h2>Frameworks</h2>
                    {frameworks.map(framework =>
                        {
                            return (
                                <>
                                    <div key={framework.name} className='col my-3'>
                                        <div className="border border-light rounded text-center p-3">
                                            <i className={framework.icon} style={{ color: framework.color}}></i>
                                            <p className='mt-2 fs-4'>{framework.name}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
                
                <div className="row">
                    <h2>Databases</h2>
                    {databases.map(database =>
                        {
                            return (
                                <>
                                    <div key={database.name} className='col my-3'>
                                        <div className="border border-light rounded text-center p-3">
                                            <i className={database.icon} style={{ color: database.color}}></i>
                                            <p className='mt-2 fs-4'>{database.name}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
     );
}
 
export default Skills;