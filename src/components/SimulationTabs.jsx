import Nav from 'react-bootstrap/Nav'

export default function SimulationTabs(){
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link className='text-black'>Imobiliário</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='text-black'>Automotor</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}