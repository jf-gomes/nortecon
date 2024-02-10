import Accordion from 'react-bootstrap/Accordion';

export default function AccordionMenu(){
    return (
        <Accordion>
            <Accordion.Item eventKey='0'>
                <Accordion.Header>Como funciona o consórcio?</Accordion.Header>
                <Accordion.Body>
                No consórcio, os participantes contribuem com pagamentos mensais, formando um fundo coletivo. Esse fundo é então utilizado para contemplar os membros, permitindo que eles realizem a aquisição desejada. Esse pode ser um carro, uma casa, ou qualquer outro bem específico.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>Quais as vantagens da NorteCon?</Accordion.Header>
                <Accordion.Body>
                <ul>
                    <li>Sem juros, apenas taxa de administração.</li>
                    <li>Pagamento do lance com a própria carta de crédito, limitado a 50%.</li>
                    <li>Reembolso de despesas cartorarias em até 10% do valor da carta de crédito.</li>
                    <li>Especialistas com certificação PCA-10 fornecida pela ABAC.</li>
                </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
                <Accordion.Header>Quais os produtos?</Accordion.Header>
                <Accordion.Body>
                Nosso portifólio de produtos, inclui o Consório Imobiliáro e de Veículos. <br />
                <span>CONSÓRCIO IMOBILIÁRIO</span> - você pode usar o seu crédito, após a contemplação, para comprar um imóvel, reformar, terreno ou até mesmo imóvel na planta. <br />
                <span>CONSÓRCIO VEÍCULO</span> - Após a contemplação você pode comprar carro, moto, aeronave e até embarcação.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}