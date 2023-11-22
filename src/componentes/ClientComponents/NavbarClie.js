import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Prestadorcomponents/Icons";
import "../ClientComponents/css/NavBarcli.css";
import MenuProfile from "../Prestadorcomponents/MenuProfile";
import PropsOrcamento from '../../props/PropsOrcamento'
import LogoD from "../imgs/logo doido.png"
import fotoperfil from '../imgs/fotoperfil.png';
import { IoMdImages } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";


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
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span><img src={LogoD} alt="Logo AjeitaLaar" className="Logo" /></span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/PerCliente" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink exact to="/Feedcli" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Meus Posts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="Btn" onClick={openModal}>Novo Reparo</button>

                            <Modal
                                dal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content1">

                                <h4>Faça um novo requerimento</h4>

                                <div className="ModalCand">
                                    <div className="modalposition">
                                        <h3>Descreva com detalhes o que você precisa</h3>
                                        <div className="cixtxt">
                                            <textarea name="detalhe" id="detalhe" rows="150" placeholder='Ex: Preciso trocar a resistência do meu chuveiro da marca...' required></textarea>

                                            <div className="imgiconMo">
                                                <div className="iconimg">
                                                    <IoMdImages />
                                                </div>

                                                <div className="plusicon">
                                                    <FaCirclePlus />
                                                </div>
                                            </div>
                                        </div>

                                        <h3>Ficha Técnica</h3>

                                        <div className="fichacix">

                                            <div className="formesq">
                                                <label>
                                                    <p>Tipo de reparo</p>
                                                    <input className="campotxt" type="text" placeholder="Ex: Troca de resistência" required />
                                                </label>

                                                <label>
                                                    <p>Tipo de imóvel</p>
                                                    <input className="campotxt" type="text" placeholder="Ex: Casa" required />
                                                </label>

                                                <label>
                                                    <p>Tem restrição de horário?</p>
                                                    <input className="esco" name="grupoOpcoes" type="radio" required /> Sim <br />
                                                    <input className="esco" name="grupoOpcoes" type="radio" required /> Não
                                                </label>

                                                <label>
                                                    <p>O prestador necessita comprar ou trazer os materiais?</p>
                                                    <input className="esco" name="grupoOpcoes" type="radio" required /> Sim <br />
                                                    <input className="esco" name="grupoOpcoes" type="radio" required /> Não
                                                </label>

                                                <label>
                                                    <p>Quais materiais?</p>
                                                    <input type="text" placeholder="Ex: resistência, escada" required />
                                                </label>
                                            </div>

                                            <label>
                                                <p>Quais materiais?</p>
                                                <input className="campotxt" type="text" placeholder="Ex: resistência, escada" required />
                                            </label>

                                        </div>
                                    </div>
                                </div>

                                <div className="butal">
                                    <button className="btn modalbtn1" onClick={closeModal}>Fechar</button>
                                    <button className="btn modalbtn" onClick={closeModal}>Enviar</button>
                                </div>

                            </Modal>
                        </li>

                        <li className="menu-items">
                            <MenuProfile />
                        </li>
                    </ul>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icons">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icons">
                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBarCli