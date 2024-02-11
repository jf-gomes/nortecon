import automotor from '../img/automotor.jpg'
import imobiliario from '../img/imobiliario.jpg'
import './OurProducts.css'
import ModalComponent from './ModalComponent'
import { useState, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function OurProducts(){

    const [modalShow, setModalShow] = useState(false)
    const [displayedProduct, setDisplayedProduct] = useState()

    const productsData = [
        {
            name: "Imobiliário",
            description: "Você pode usar o seu crédito, após a contemplação, para comprar um imóvel, reformar, terreno ou até mesmo imóvel na planta.",
            listItems: [
                'Aquisição de imóvel novo ou usado, comercial ou misto',
                'Construção, ampliação ou reforma',
                'Aquisição de terreno com construção',
                'Quitação de financiamento'
            ]
        },
        {
            name: "Automotor",
            description: "Após a contemplação você pode comprar carro, moto, aeronave ou até embarcação.",
            listItems: [
                'Aquisição de veículo novo',
                'Aquisição de veículo usado, até 5 anos de uso',
                'Quitação de financiamento',
                'Aquisição de lancha',
                'Aquisição de placas fotovoltaicas'
            ]
        }
    ]

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.productLeftDiv', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#products',
                start: 'top 800px'
            }
        })
        gsap.to('.productRightDiv', {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '#products',
                start: 'top 800px'
            }
        })
    }, [])
    
    return (
        <>
        <ModalComponent modalShow={modalShow} setModalShow={setModalShow} product={displayedProduct} />
        <section id='products' className='d-flex flex-column justify-content-center mb-4 p-4'>
            <h3 className='text-center m-4'>Nossos produtos</h3>
            <div className='d-flex justify-content-center flex-wrap' style={{gap: '12rem'}}>
                <div className='productLeftDiv d-flex flex-column'>
                    <img className='product p-4' src={imobiliario} alt="Imobiliário" />
                    <h4 className='text-center m-4'>Imobiliário</h4>
                    <button onClick={() => {
                        setDisplayedProduct(productsData[0])
                        setModalShow(true)
                    }} className='ourProductsBtn'>Saiba mais</button>
                </div>
                <div className='productRightDiv d-flex flex-column'>
                    <img className='product p-4' src={automotor} alt="Automotor" />
                    <h4 className='text-center m-4'>Automotor</h4>
                    <button onClick={() => {
                        setDisplayedProduct(productsData[1])
                        setModalShow(true)
                    }} className='ourProductsBtn'>Saiba mais</button>
                </div>
            </div>
        </section>
        </>
    )
}