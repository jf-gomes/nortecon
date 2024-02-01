import automotor from '../img/automotor.jpg'
import imobiliario from '../img/imobiliario.jpg'
import './OurProducts.css'

export default function OurProducts(){
    return (
        <div className='d-flex flex-column justify-content-center mb-4 p-4'>
            <h3 className='text-center m-4'>Nossos produtos</h3>
            <div className='d-flex justify-content-center flex-wrap' style={{gap: '12rem'}}>
                <div className='d-flex flex-column'>
                    <img className='product p-4' src={imobiliario} alt="Imobiliário" />
                    <h4 className='text-center m-4'>Imobiliário</h4>
                    <button className='ourProductsBtn'>Saiba mais</button>
                </div>
                <div className='d-flex flex-column'>
                    <img className='product p-4' src={automotor} alt="Automotor" />
                    <h4 className='text-center m-4'>Automotor</h4>
                    <button className='ourProductsBtn'>Saiba mais</button>
                </div>
            </div>
        </div>
    )
}