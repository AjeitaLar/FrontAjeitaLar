import './PropsCSS/PropsOrcamento.css'
import Modal from 'react-modal'
import { useState } from "react";
import { HiMiniPaperAirplane } from "react-icons/hi2";

function PropsOrcamento({ img, title, mensa, btn2, btn3 }) {
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
        <div className="cx">
            <img src={img} alt="Imagem" className="imgP" />
            <div className="posi">
                <h2 className="title">{title}</h2>
                <h3 className="mensa">{mensa}</h3>
            </div>
            <div className="posi2">
                <button className="btn1" onClick={openModal}>Contato</button>
                <button className="btn2" >{btn2}</button>
                <button className="btn3" >{btn3}</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    overlayClassName="modal-overlay"
                    className="modal-content1">
                    <h4>Chat</h4>

                    <div className="ModalCandchat">
                        <div className="topchat">
                            <div className="perfilchat">
                                u
                            </div>
                            <h3>Teodora Souza</h3>

                        </div>
                        <hr />


                        <div className="chatlocal">
                            <div className="mensagem">
                                <p>Bom dia, podemos fazer um orçamento?</p>
                            </div>
                            <div className="resposta">Claro!</div>
                        </div>
                        <div className="enviochat">
                            <textarea name="chat" id="chat"></textarea>
                            <div className="shere">
                                <HiMiniPaperAirplane />
                            </div>
                        </div>

                    </div>
                    <button className="BotaoFechar" onClick={closeModal}>Fechar</button>
                </Modal>
            </div>

        </div>
    )
}

export default PropsOrcamento;