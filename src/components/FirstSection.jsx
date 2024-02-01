import './FirstSection.css'
import firstSectionImg from '../img/firstSectionImg.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FirstSection(){
    return (
        <div className='firstSectionContainer'>
            <div className='firstSectionLeftDiv'>
                <h2>Bem-vindo(a) à NorteCon!</h2>
                <button>Saiba mais sobre o consórcio</button>
            </div>
            <img className='firstSectionLogo' src={firstSectionImg} alt="NorteCon" />
        </div>
    )
}