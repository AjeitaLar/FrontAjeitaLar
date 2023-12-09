import "./css/feedclient.css";
import NavBarCli from "./NavbarClie";
import Modal from 'react-modal'
import { useState } from "react";
//PROPS
import FotoPerfil from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import Feed2 from '../imgs/feed2.png'
import PropsFeedCli from "../../props/PropsFeedclient";
import PropsOrcamento from "../../props/PropsOrcamento";
import Parede from "../imgs/parede.jpeg"
import Cano from "../imgs/cano.jpeg"
import Prateleira from "../imgs/quadro.jpeg"
//IMG
import CurvaAzul from "../imgs/curvaazul.png"
import FotoPerfilCli from "../imgs/fotoperfilcli.png"
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { TbProgress } from "react-icons/tb";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";




function Feedcli() {
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
        <>
            <NavBarCli />
            <section className="misolici">
                <div className="lateralfeed">
                    <div className="pinfo">
                        <img className="perfilfo" src={FotoPerfilCli} alt="foto de perfil" />
                        <h2>Teodoro Souza</h2>
                        <p><FaLocationDot /> Jardim d'abril, Osasco-SP</p>
                        <hr className="line" />
                    </div>
                    <div className="reque">
                        <h3>Requerimentos</h3>
                        <button className="latebtn"><CiFilter /> Filtrar requerimentos</button>
                        <button className="latebtn"><TbProgress /> Status de requerimento</button>
                        <button className="latebtn" onClick={openModal} ><IoPeopleCircleSharp /> Candidatos</button>
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
                                    img={FotoPerfil}
                                    btn2='Ver publi'
                                    btn3='Recusar'
                                />
                                <hr />


                                <PropsOrcamento
                                    title='Nome do Perfil'
                                    subtitle='Troca de lampada'
                                    mensa='Olá! gostaria de fazer um orçamento '
                                    img={FotoPerfil}
                                    btn2='Ver publi'
                                    btn3='Recusar'
                                />
                                <hr />


                                <PropsOrcamento
                                    title='Nome do Perfil'
                                    subtitle='Troca de lampada'
                                    mensa='Olá! gostaria de fazer um orçamento '
                                    img={FotoPerfil}
                                    btn2='Ver publi'
                                    btn3='Recusar'
                                />
                                <hr />


                                <PropsOrcamento
                                    title='Nome do Perfil'
                                    subtitle='Troca de lampada'
                                    mensa='Olá! gostaria de fazer um orçamento '
                                    img={FotoPerfil}
                                    btn2='Ver publi'
                                    btn3='Recusar'
                                />
                                <hr />


                            </div>
                            <button className="BotaoFechar" onClick={closeModal}>Fechar</button>
                        </Modal>

                        <hr className="line" />
                    </div>

                    <div className="plane">
                        <button className="latebtn"> <FaCrown />  Planos e vantagens</button>

                    </div>

                    <div className="config">
                        <button className="latebtn"><IoSettingsOutline />  Configuração</button>
                    </div>
                </div>

                <div className="feedcon">
                    <PropsFeedCli
                        perfoto={FotoPerfil}
                        Perfilname="Teodoro Souza"
                        Descri="Minha filha colou uns quadros com cola quente na parede e, ao retirá-los, o reboco também se soltou. Gostaria de solicitar um reparo para isso. Eu ainda tenho a tinta utilizada. "
                        Feddimg={Parede}
                    />

                    <PropsFeedCli
                        perfoto={FotoPerfil}
                        Perfilname="Teodoro Souza"
                        Descri="Gostaria de solicitar um reparo no encanamento. O cano da pia do meu banheiro está apresentando vazamento."
                        Feddimg={Cano}
                    />

                    <PropsFeedCli
                        perfoto={FotoPerfil}
                        Perfilname="Teodoro Souza"
                        Descri="Gostaria de solicitar a instalação de uma prateleira na parede do quarto da minha filha, por isso estou solicitando um serviço de reparo. Essa aqui é a parede."
                        Feddimg={Prateleira}
                    />



                </div>

            </section>
        </>
    )
}

export default Feedcli