import Nav from 'react-bootstrap/Nav'
import './SimulationTabs.css'
import { useState } from 'react'

export default function SimulationTabs(){

    const [activeProduct, setActiveProduct] = useState('housing')
    
    return (
        <Nav className='gap-1' fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link style={activeProduct == 'housing' ? {backgroundColor: '#1A7D66', textDecoration: 'underline'} : {color: 'white'}} onClick={() => setActiveProduct('housing')} className='text-white simulationTab'>Imobiliário</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={activeProduct == 'vehicle' ? {backgroundColor: '#1A7D66', textDecoration: 'underline'} : {color: 'white'}} onClick={() => setActiveProduct('vehicle')}  className='text-white simulationTab'>Automotor</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}