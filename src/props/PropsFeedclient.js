import { useState } from "react";
import Modal from 'react-modal'
import PropsOrcamento from "./PropsOrcamento";
import fotoperfil from "../componentes/imgs/fotoperfil.png"
import "./PropsCSS/PropsFeddClient.css" 

function PropsFeedCli({ Feddimg, Perfilname, Descri, perfoto }) {

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
            <div className="toppost">
                <img src={perfoto} alt="perfoto" className="perfoto" />
                <h2 className="Perfilname">{Perfilname}</h2>
            </div>
            <h3 className="descri">{Descri}</h3>

            <img src={Feddimg} alt="feed foto" className="Feddimg" />

            <div className="link">
                <button className="linkvbu" onClick={openModal}>Veja quem aceitou o seu reparo</button>
            </div>

            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="modal-content1">
                <h4>Gostariam de fazer este serviço</h4>

                <div className="ModalCand">

                    <PropsOrcamento
                        title='Nome do Perfil'
                        subtitle='Troca de lampada'
                        mensa='Olá! gostaria de fazer um orçamento '
                        img={fotoperfil}
                        btn2='Ver publi'
                        btn3='Recusar'
                    />
                    <hr />
                    

                    <PropsOrcamento
                        title='Nome do Perfil'
                        subtitle='Troca de lampada'
                        mensa='Olá! gostaria de fazer um orçamento '
                        img={fotoperfil}
                        btn2='Ver publi'
                        btn3='Recusar'
                    />
                    <hr />
                    

                    <PropsOrcamento
                        title='Nome do Perfil'
                        subtitle='Troca de lampada'
                        mensa='Olá! gostaria de fazer um orçamento '
                        img={fotoperfil}
                        btn2='Ver publi'
                        btn3='Recusar'
                    />
                    <hr />
                    

                    <PropsOrcamento
                        title='Nome do Perfil'
                        subtitle='Troca de lampada'
                        mensa='Olá! gostaria de fazer um orçamento '
                        img={fotoperfil}
                        btn2='Ver publi'
                        btn3='Recusar'
                    />
                    <hr />


                </div>
                <button className="BotaoFechar" onClick={closeModal}>Fechar</button>
            </Modal>


        </div>
    )
};

export default PropsFeedCli