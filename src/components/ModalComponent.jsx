import Modal from 'react-bootstrap/Modal';

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
                <Modal.Header>
                    <Modal.Title>
                        Consórcio {product.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{product.description}</p>
                    <button>Fazer uma simulação!</button>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => setModalShow(false)}>Fechar</button>
                </Modal.Footer>
            </Modal>
        )
    }
}