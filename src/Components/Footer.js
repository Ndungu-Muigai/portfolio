import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => 
{
    const year=new Date().getFullYear()

    return ( 
        <Navbar fixed='bottom' className='navbar'>
            <Nav className='mx-auto p-2'>
                <Nav.Item className='text-light'>TM © {year} - Samuel Ndung'u Muigai - All Rights Reserved</Nav.Item>
            </Nav>
        </Navbar>
     );
}
 
export default Footer;