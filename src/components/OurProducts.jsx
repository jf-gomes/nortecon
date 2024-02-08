import automotor from '../img/automotor.jpg'
import imobiliario from '../img/imobiliario.jpg'
import './OurProducts.css'
import ModalComponent from './ModalComponent'
import { useState } from 'react'

export default function OurProducts(){

    const [modalShow, setModalShow] = useState(false)
    const [displayedProduct, setDisplayedProduct] = useState()

    const productsData = [
        {
            name: "Imobiliário",
            description: "Você pode usar o seu crédito, após a contemplação, para comprar um imóvel, reformar, terreno ou até mesmo imóvel na planta."
        },
        {
            name: "Automotor",
            description: "Após a contemplação você pode comprar Carro, moto, aeronave e até embarcação."
        }
    ]
    
    return (
        <>
        <ModalComponent modalShow={modalShow} setModalShow={setModalShow} product={displayedProduct} />
        <div className='d-flex flex-column justify-content-center mb-4 p-4'>
            <h3 className='text-center m-4'>Nossos produtos</h3>
            <div className='d-flex justify-content-center flex-wrap' style={{gap: '12rem'}}>
                <div className='d-flex flex-column'>
                    <img className='product p-4' src={imobiliario} alt="Imobiliário" />
                    <h4 className='text-center m-4'>Imobiliário</h4>
                    <button onClick={() => {
                        setDisplayedProduct(productsData[0])
                        setModalShow(true)
                    }} className='ourProductsBtn'>Saiba mais</button>
                </div>
                <div className='d-flex flex-column'>
                    <img className='product p-4' src={automotor} alt="Automotor" />
                    <h4 className='text-center m-4'>Automotor</h4>
                    <button onClick={() => {
                        setDisplayedProduct(productsData[1])
                        setModalShow(true)
                    }} className='ourProductsBtn'>Saiba mais</button>
                </div>
            </div>
        </div>
        </>
    )
}