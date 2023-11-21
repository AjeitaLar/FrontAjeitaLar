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
                                <h4>Faça um novo requerimento</h4>

                                <div className="ModalCand">
                                    <h3>Descreva com detalhes o que você precisa</h3>
                                    <div className="cixtxt">
                                        <textarea name="detalhe" id="detalhe" rows="150" placeholder='Ex: Preciso trocar a resistência do meu chuveiro da marca...' required></textarea>

                                        <div className="imgicon">
                                            <div className="iconimg">
                                                i
                                            </div>

                                            <div className="plusicon">
                                                +
                                            </div>
                                        </div>


                                        <h3>Fixa Técnica</h3>

                                        <div className="fichacix">
                                            <label htmlFor="tipo de reparo">
                                                <div className="formesq">
                                                    <label>
                                                        Tipo de reparo
                                                        <input type="text" placeholder="Ex: Troca de resistência" required />
                                                    </label>

                                                    <label>
                                                        Tipo de imóvel
                                                        <input type="text" placeholder="Ex: Casa" required />
                                                    </label>

                                                    <label>
                                                        <p>Tem restrição de horário?</p>
                                                        <input type="radio" required /> Sim
                                                        <input type="radio" required /> Não
                                                    </label>

                                                    <label>
                                                        <p>O prestador necessita comprar ou trazer os materiais?</p>
                                                        <input type="radio" required /> Sim
                                                        <input type="radio" required /> Não
                                                    </label>

                                                    <label>
                                                        <p>Quais materiais?</p>
                                                        <input type="text" placeholder="Ex: resistência, escada" required />
                                                    </label>

                                                    <div className="formdi">
                                                        <h3>Endereço</h3>
                                                        <p>CEP:</p>
                                                        <input type="text" required />
                                                        <p>Rua</p>
                                                        <input type="text" required />
                                                        <p>Bairro:</p>
                                                        <input type="text" required />
                                                        <p>Cidade</p>
                                                        <input type="text" required />
                                                    </div>
                                                </div>

                                            </label>
                                        </div>
                                    </div>

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