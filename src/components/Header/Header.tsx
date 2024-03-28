import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../../img/logo.jpg'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export default function Header(){

    const navigate = useNavigate()

    return (
        <>
            <header>
                <Navbar className='navbar p-3' expand='md'>
                    <Container fluid style={{justifyContent: 'space-between'}}>
                        <Navbar.Brand>
                            <img className='logoHeader' src={logo} alt="NorteCon" onClick={() => navigate('/')} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
                        <Navbar.Offcanvas aria-labelledby='offcanvasNavbarLabel-expand-md' placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title onClick={() => navigate('/')}>
                                    NorteCon
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{backgroundColor: '#014A39'}}>
                                <Nav className='justify-content-end flex-grow-1 pe-3'>
                                    <Nav.Link className='navLink text-white' onClick={() => navigate('/sobre')}>
                                        SOBRE A NORTECON
                                    </Nav.Link>
                                    <Nav.Link className='navLink text-white' onClick={() => navigate('/produtos')}>
                                        PRODUTOS
                                    </Nav.Link>
                                    <Nav.Link className='navLink text-white' onClick={() => navigate('/profissionais')}>
                                        PROFISSIONAIS
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}