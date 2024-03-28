import './FirstSection.css'
import firstSectionImg from '../../img/firstSectionImg.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function FirstSection(){

    const navigate = useNavigate()

    const [size, setSize] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize(){
            setSize(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if (size <= 870){
        return (
            <div className='firstSectionContainer d-flex flex-column align-items-center justify-content-center'>
                <img className='firstSectionLogo' src={firstSectionImg} alt="NorteCon" />
                <div className='d-flex flex-column gap-4'>
                    <h2 className='text-white'>Bem-vindo(a) à NorteCon!</h2>
                    <p className='slogan text-white'>Simplificando a forma de planejamento financeiro e possibilitando a realização de sonhos.</p>
                    <button className='firstSectionBtn' onClick={() => navigate('/sobre')}>Conheça a NorteCon</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='firstSectionContainer d-flex align-items-center justify-content-center flex-wrap'>
                <div className='d-flex flex-column gap-4'>
                    <h2 className='text-white'>Bem-vindo(a) à NorteCon!</h2>
                    <p className='slogan text-white'>Simplificando a forma de planejamento financeiro e possibilitando a realização de sonhos.</p>
                    <button className='firstSectionBtn' onClick={() => navigate('/sobre')}>Conheça a NorteCon</button>
                </div>
                <img className='firstSectionLogo' src={firstSectionImg} alt="NorteCon" />
            </div>
        )
    }
}