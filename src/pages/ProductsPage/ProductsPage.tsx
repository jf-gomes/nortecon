import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import OurProducts from "../../components/OurProducts/OurProducts"

export default function ProductsPage(){
    return (
        <>
            <Header />
            <main className="aboutMain text-white d-flex flex-column align-items-center p-3">
                <h1 className="p-3">Nossos produtos</h1>
                <div className="aboutTextDiv p-3">
                    <p>
                        O consórcio é uma modalidade planejada de aquisição de bens. Com acesso ao crédito necessário para compra de um imóvel, você paga de maneira parcelada e segue um caminho de forma segura para realização de um grande objetivo.
                    </p>
                    <p>
                        Essa modalidade reúne vantagens como economia quando comparada ao financiamento.
                    </p>
                    <p>
                        Entender o funcionamento do consórcio é muito importante 
                        para você que pretende investir na aquisição ou ampliação do seu 
                        patrimônio.
                    </p>
                    <p>
                        Com o consórcio você tem a possibilidade de ampliação ou 
                        valorização do patrimônio.
                    </p>
                </div>
                <OurProducts title={false} src="products" />
            </main>
            <Footer />
        </>
    )
}