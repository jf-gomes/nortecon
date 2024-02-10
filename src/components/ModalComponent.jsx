import Modal from 'react-bootstrap/Modal';
import knowMoreHousing from '../img/knowMoreHousing.jpg'
import knowMoreVehicles from '../img/knowMoreVehicles.jpg'
import './ModalComponent.css'

export default function ModalComponent({ product, modalShow, setModalShow }){

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
                    <div>
                        <p>Possibilidades para utilização do crédito:</p>
                        <ol>
                            {product.listItems.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <img className='modalImg rounded' src={product.name == 'Imobiliário' ? knowMoreHousing : knowMoreVehicles} alt="" />
                    <div className='d-flex justify-content-center flex-wrap gap-4'>
                        <a href="#aboutSection"><button className='modalBtn text-white rounded' onClick={() => setModalShow(false)}>Fazer uma simulação!</button></a>
                        <button className='modalBtn text-white rounded' onClick={() => setModalShow(false)}>Fechar</button>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}