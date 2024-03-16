import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => 
{
    const year=new Date().getFullYear()

    return ( 
        <Navbar bg='dark' data-bs-theme="dark">
        <Navbar.Collapse id="navbar" className='flex flex-col'>
            <Nav className='mx-auto p-2'>
                <Nav.Link href="#">
                    TM © {year} - Samuel Ndung'u Muigai - All Rights Reserved
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
     );
}
 
export default Footer;