import './About.css'
import SliderComponent from '../SliderComponent/SliderComponent'
import SimulationTabs from '../SimulationTabs/SimulationTabs'

export default function About(){
    return (
        <section id='aboutSection' className='aboutContainerDiv d-flex flex-column'>
            <h3 className='p-4 m-4 text-center'>Sobre a <span>NorteCon</span></h3>
            <div className='d-flex gap-4 p-4 m-4 align-items-center justify-content-center flex-wrap'>
                <div className='aboutLeftDiv p-4 rounded-4 d-flex flex-column align-items-center justify-content-center'>
                    <p className='text-white' style={{textAlign: 'justify'}}>A NorteCon surgiu em 2015 com o objetivo de simplificar a forma de planejamento financeiro, possibilitando aumento de patrimônio e realização de sonhos dos clientes.</p>
                    <p className='text-white' style={{textAlign: 'justify'}}>Nosso portifolio de produtos inclui o Consório Imobiliáro e de Veículos.</p>
                    <a href="#products"><button className='seeMoreAboutProductsBtn'>Veja mais sobre nossos produtos</button></a>
                </div>
                <div className='simulationDiv d-flex flex-column align-items-center gap-2 p-4 rounded-4'>
                    <h4 className='text-black'>Faça uma simulação!</h4>
                    <SliderComponent />
                    <SimulationTabs />
                    <button className='simulationBtn'>Simular</button>
                </div>
            </div>
        </section>
    )
}