import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import { RxHamburgerMenu } from "react-icons/rx";
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

<<<<<<< HEAD
                                            <div className="formesq">
                                                <label>
                                                    <p>Tipo de reparo</p>
                                                    <input className="campotxt" type="text" placeholder="Ex: Troca de resistência" required />
                                                </label>

                                                <label>
                                                    <p>Tipo de imóvel</p>
                                                    <input className="campotxt" type="text" placeholder="Ex: Casa" required />
                                                </label>
=======
                    <div className="formesq">
                    <label>
                        <p>Tipo de reparo</p>
                        <input type="text" placeholder="Ex: Troca de resistência" required />
                    </label>

                    <label>
                        <p>Tipo de imóvel</p>
                        <input type="text" placeholder="Ex: Casa" required />
                    </label>
>>>>>>> 8de693a06043651b71900ad2b654bf26c73cd0a9

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

<<<<<<< HEAD
                                                <label>
                                                    <p>Quais materiais?</p>
                                                    <input className="campotxt" type="text" placeholder="Ex: resistência, escada" required />
                                                </label>
=======
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
>>>>>>> 8de693a06043651b71900ad2b654bf26c73cd0a9

        </div>
        </div>
        </div>

            <div className="butal">
                <button className="btn modalbtn1" onClick={closeModal}>Fechar</button>
                <button className="btn modalbtn" onClick={closeModal}>Enviar</button>
            </div>

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
            </nav >
        </>
    )
}

export default NavBarCli