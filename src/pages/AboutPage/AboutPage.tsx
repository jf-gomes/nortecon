import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import './AboutPage.css'
import SimulationTabs from '../../components/SimulationTabs/SimulationTabs'

export default function AboutPage(){

    return (
        <>
            <Header />
            <main className="aboutMain text-white d-flex flex-column align-items-center p-3">
                <h1 className="p-3">Sobre a NorteCon</h1>
                <div className="aboutTextDiv p-3">
                    <p>
                        Fundada em <span className="text-white text-bold">junho de 2015</span>, com foco principal em atender as necessidades dos brasileiros, nascemos com o objetivo de simplificar a forma de
                        planejamento financeiro para a realização dos desejos em <span className="text-white text-bold">
                            adquirir bens
                            duráveis
                        </span>.
                    </p>
                    <p>
                        A MN Oliveira Ltda, razão social da Nortecon, através dos seus sócios
                        diretores Ubirajara Marques Lima, Norma Heloisa de Oliveira Lima e Manoel Telles
                        de Oliveira Neto, vem com o propósito de apresentar ao mercado, uma forma
                        simplificada de planejamento associado a compra futura através do consórcio.
                    </p>
                    <p>
                        Bira, como gosta de ser chamado, foi executivo da CAIXA Seguradora SA
                        por 47 anos. Acompanhou a fundação da CAIXA Consórcios SA, empresa da
                        Holding do Grupo Caixa Seguradora, que administra os grupos de consórcios da NorteCon.
                    </p>
                    <p>
                        Enquanto executivo do Grupo CAIXA Seguradora, esteve na liderança
                        comercial das equipes da região Norte e Sul do país, adquirindo Know How,
                        para melhor atendimento aos clientes.
                    </p>
                </div>
                <div className='aboutPageSimulationDiv'>
                    <h3 className='text-black text-center'>Faça uma simulação!</h3>
                    <SliderComponent />
                    <SimulationTabs />
                    <button className='simulateBtn'>Simular</button>
                </div>
            </main>
            <Footer />
        </>
    )
}