import Contact from '../Data/Contacts.json'

const Contacts = () => 
{
    return ( 
        <div id="contacts" className='mb-3'>
            <h1 className='text-center text-uppercase my-4'>Contacts</h1>
            <div className="container">
                <div className="row">
                    {Contact.map(contact =>
                        {
                            let {name, icon, link}=contact

                            return(
                                <div key={name} className='col-lg-3 col-md-4 my-2'>
                                    <div className="contact">
                                        <i className={icon}></i>
                                        <a href={link} target='_blank' rel='noreferrer'>{name}</a>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
     );
}
 
export default Contacts;