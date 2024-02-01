import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../img/logo.jpg'
import './Header.css'

export default function Header(){
    return (
        <>
            <header>
                <Navbar className='navbar p-3' expand='md'>
                    <Container fluid style={{justifyContent: 'space-between'}}>
                        <Navbar.Brand>
                            <img className='logoHeader' src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
                        <Navbar.Offcanvas aria-labelledby='offcanvasNavbarLabel-expand-md' placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    NorteCon
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{backgroundColor: '#014A39'}}>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <Nav.Link className='text-white'>Sobre a NorteCon</Nav.Link>
                                    <Nav.Link className='text-white'>Nossos produtos</Nav.Link>
                                    <Nav.Link className='text-white'>Nossos profissionais</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}