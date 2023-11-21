import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import { RxHamburgerMenu } from "react-icons/rx";
import "../ClientComponents/css/NavBarcli.css";
import MenuProfile from "../Prestadorcomponents/MenuProfile";
import PropsOrcamento from '../../props/PropsOrcamento'
import LogoD from "../imgs/logo doido.png"
import fotoperfil from '../imgs/fotoperfil.png';
Modal.setAppElement("#root");

function NavBarCli() {
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
            <nav className="clinav">
                <div className="clinav-contaiter">
                    <NavLink exact to="/" className="logo">
                        <span><img src={LogoD} alt="Logo AjeitaLaar" className="LogoD" /></span>
                    </NavLink>

                    <ul className={click ? "nav-climenu active" : "nav-climenu"}>
                        <li className="menu-item">
                            <NavLink exact to="/PerCliente" activeClassName="active" className="menu-links">
                                Inicio
                            </NavLink>
                        </li>

                        <li className="menu-item">
                            <NavLink exact to="/Feedcli" activeClassName="active" className="menu-links">
                                Meus Posts
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <button className="btn" onClick={openModal}>Novo Reparo</button>


                            <Modal
                                dal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content">
                                <h4>Querem entrar em contato</h4>

                                <div className="ModalCand">

                                    <PropsOrcamento
                                        title='Nome do Perfil'
                                        subtitle='Troca de lampada'
                                        mensa='Olá! gostaria de fazer um orçamento '
                                        img={fotoperfil}
                                        btn1='Contato'
                                        btn2='Ver publi'
                                        btn3='Recusar'
                                    />
                                    <hr />

                                    <PropsOrcamento
                                        title='Nome do Perfil'
                                        subtitle='Troca de lampada'
                                        mensa='Olá! gostaria de fazer um orçamento '
                                        img={fotoperfil}
                                        btn1='Contato'
                                        btn2='Ver publi'
                                        btn3='Recusar'
                                    />
                                    <hr />

                                    <PropsOrcamento
                                        title='Nome do Perfil'
                                        subtitle='Troca de lampada'
                                        mensa='Olá! gostaria de fazer um orçamento '
                                        img={fotoperfil}
                                        btn1='Contato'
                                        btn2='Ver publi'
                                        btn3='Recusar'
                                    />
                                    <hr />

                                    <PropsOrcamento
                                        title='Nome do Perfil'
                                        subtitle='Troca de lampada'
                                        mensa='Olá! gostaria de fazer um orçamento '
                                        img={fotoperfil}
                                        btn1='Contato'
                                        btn2='Ver publi'
                                        btn3='Recusar'
                                    />
                                    <hr />
                                </div>

                                <button className="btn" onClick={closeModal}>Fechar</button>
                            </Modal>
                        </li>

                        <li className="menu-item">
                            <MenuProfile />
                        </li>

                        <div className="menu-icon" onClick={handleClick}>
                            {click ? (
                                <span className="icons">
                                    <RxHamburgerMenu />{" "}
                                </span>
                            ) : (
                                <span className="icons">
                                    <RxHamburgerMenu />
                                </span>
                            )}
                        </div>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBarCli