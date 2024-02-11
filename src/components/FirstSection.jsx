import './FirstSection.css'
import firstSectionImg from '../img/firstSectionImg.png'
import { useState, useEffect } from 'react'


export default function FirstSection(){

    const [size, setSize] = useState()

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
                    <a href="#aboutSection"><button className='firstSectionBtn'>Saiba mais sobre o consórcio</button></a>
                </div>
            </div>
        )
    } else {
        return (
            <div className='firstSectionContainer d-flex align-items-center justify-content-center flex-wrap'>
                <div className='d-flex flex-column gap-4'>
                    <h2 className='text-white'>Bem-vindo(a) à NorteCon!</h2>
                    <a href="#aboutSection"><button className='firstSectionBtn'>Saiba mais sobre o consórcio</button></a>
                </div>
                <img className='firstSectionLogo' src={firstSectionImg} alt="NorteCon" />
            </div>
        )
    }
}