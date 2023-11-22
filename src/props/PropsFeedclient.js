import { useState } from "react";
import Modal from 'react-modal'

function PropsFeedCli({ Feddimg, Perfilname, Descri }) {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="feedcon">
            <h2 className="Perfilname">{Perfilname}</h2>
            <h3 className="descri">{Descri}</h3>

            <img src={Feddimg} alt="feed foto" className="Feddimg" />

            <div className="link">
                <span>2 pessoas gostariam de falar com você</span>
                <button onClick={openModal}>Veja quem aceitou o seu reparo</button>
            </div>

            <Modal dal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content1">
                <h4>Faça um novo requerimento</h4>
            </Modal>


        </div>
    )
};

export default PropsFeedCli