import './FirstSection.css'
import firstSectionImg from '../img/firstSectionImg.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FirstSection(){
    return (
        <div className='firstSectionContainer d-flex align-items-center justify-content-center flex-wrap'>
            <div className='d-flex flex-column gap-4'>
                <h2 className='text-white'>Bem-vindo(a) à NorteCon!</h2>
                <button className='firstSectionBtn'>Saiba mais sobre o consórcio</button>
            </div>
            <img className='firstSectionLogo' src={firstSectionImg} alt="NorteCon" />
        </div>
    )
}