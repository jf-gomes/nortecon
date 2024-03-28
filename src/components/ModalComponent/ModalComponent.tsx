import Modal from 'react-bootstrap/Modal';
import './ModalComponent.css'
import { useNavigate } from 'react-router-dom';

export interface productType{
    name: string,
    description: string,
    listItems: Array<string>
}

interface ModalComponentProps{
    product: productType,
    modalShow: boolean,
    setModalShow: (value: boolean) => void,
    src: string
}

export default function ModalComponent({ product, modalShow, setModalShow, src }: ModalComponentProps){

    const navigate = useNavigate()

    function handleSimulation(){
        if (src == 'products'){
            navigate('/')
        } else {
            setModalShow(false)
        }
    }

    if (!product){
        null
    } else {
        return (
            <Modal
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
            >
                <Modal.Header className='d-flex justify-content-center' style={{backgroundColor: '#014a39', color: 'white'}}>
                    <Modal.Title>
                        Consórcio {product.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody d-flex flex-column align-items-center gap-4'>
                    <p>{product.description}</p>
                    <img className='modalImg rounded' src={product.name == 'Imobiliário' ? 'https://i.imgur.com/mY5eQtM.jpg' : 'https://i.imgur.com/zYhTXRK.jpg'} alt="" />
                    <div className='d-flex justify-content-center flex-wrap gap-4'>
                        <a href="#aboutSection"><button className='modalBtn text-white rounded' onClick={handleSimulation}>Fazer uma simulação!</button></a>
                        <button className='modalBtn text-white rounded' onClick={() => setModalShow(false)}>Fechar</button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}