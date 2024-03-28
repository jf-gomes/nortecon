import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './Professionals.css'
import { Link } from 'react-router-dom'

export default function Professionals(){
    return (
        <>
            <Header />
            <main className="professionalsMain text-white d-flex flex-column align-items-center p-3">
                <h1 className="p-3">Nossos profissionais</h1>
                <div className="professionalsTextDiv p-3">
                    <p>
                        O quadro de colaboradores composto pela Nortecon, contempla profissionais com certificação PCA10. 
                    </p>
                    <p>
                        O PCA10 é um Programa de Certificação da ABAC (Associação Brasileira das Administradoras de Consórcio) e foi criada com o objetivo de atestar o nível de conhecimento técnico do profissional que atua na comercialização de consórcio. 
                    </p>
                    <p>
                        A ABAC conta com o apoio do Banco Central do Brasil, a autarquia que fiscaliza e regulamenta o Sistema de Consórcios. 
                    </p>
                    <Link to='/' className="text-white backBtn">Voltar</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}