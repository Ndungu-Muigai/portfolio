import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => 
{
    return ( 
        <Navbar fixed='top' expand="lg" className='navbar'>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
                <Nav className='ms-auto p-2'>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;