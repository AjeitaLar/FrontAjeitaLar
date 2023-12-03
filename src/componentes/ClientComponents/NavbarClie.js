import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Prestadorcomponents/Icons";
import "../ClientComponents/css/NavBarcli.css";
import MenuProfileC from "./MenuProfileC";
import PropsOrcamento from '../../props/PropsOrcamento'
import LogoD from "../imgs/logo doido.png"
import fotoperfil from '../imgs/fotoperfil.png';
import { IoMdImages } from "react-icons/io";
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
            <nav className="navbar2">
                <div className="nav-container2">
                    <NavLink exact to="/" className="nav-logo2">
                        <span><img src={LogoD} alt="Logo AjeitaLaar" className="Logo2" /></span>
                    </NavLink>

                    <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
                        <li className="nav-item2">
                            <NavLink exact to="/PerCliente" activeClassName="active" className="nav-links2" onClick={handleClick}>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item2">
                            <NavLink exact to="/Feedcli" activeClassName="active" className="nav-links2" onClick={handleClick}>
                                Meus Posts
                            </NavLink>
                        </li>
                        <li className="nav-items2">
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
                                            <div className="file-input">
                                                <label htmlFor="arquivo" className="imgenvio">
                                                    <span className="file-icon"><IoMdImages/></span>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="arquivo"
                                                    id="arquivo"
                                                    className="input-hidden"
                                                    placeholder="Enviar imagem"
                                                />
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
                                                    <input className="campotxt" type="text" placeholder="Ex: resistência, escada" required />
                                                </label>

                                            </div>

                                            <div className="formdi">
                                                <p>CEP:</p>
                                                <input className="end" type="text" required />
                                                <p>Rua:</p>
                                                <input className="end" type="text" required />
                                                <p>Bairro:</p>
                                                <input className="end" type="text" required />
                                                <p>Cidade</p>
                                                <input className="end" type="text" required />
                                                <div className="infoadd">
                                                    <p>Informações adicionais</p>
                                                    <input className="end" type="text" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="butal">
                                    <button className=" modalbtn1" onClick={closeModal}>Fechar</button>
                                    <button className="BotaoFechar modalbtn" onClick={closeModal}>Enviar</button>
                                </div>

                            </Modal>
                        </li>

                        <li className="menu-items">
                            <MenuProfileC />
                        </li>
                    </ul>
                    <div className="nav-icon2" onClick={handleClick}>
                        {click ? (
                            <span className="icon2">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon2">
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