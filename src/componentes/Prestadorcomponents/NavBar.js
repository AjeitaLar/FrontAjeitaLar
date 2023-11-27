import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Prestadorcomponents/css/NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import Logo from '../imgs/logo doido.png'
import MenuProfile from "./MenuProfile";
import Modal from 'react-modal'
import PropsCandidatura from '../../props/PropsCandidatura'
import fotoperfil from '../imgs/fotoperfil.png';


Modal.setAppElement("#root");

function NavBar() {
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
                        <span><img className="Logo" src={Logo} alt="Logo" /></span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink exact to="/PerfilPrestador" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/Servicos" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Serviços
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/Artigos" activeClassName="active" className="nav-links" onClick={handleClick}>
                                Artigos
                            </NavLink>
                        </li>
                        <li className="nav-items">
                            <button className="BotaoCand" onClick={openModal}>Candidaturas</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlay"
                                className="modal-content">
                                <h4>Suas Candidaturas</h4>

                                <div className="ModalCand">

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água  '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água  '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água  '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                <PropsCandidatura 
                                titulo='Preciso de um reparo:'
                                Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água  '
                                imagem={fotoperfil}
                                botao='Ver Publicação'
                                />
                                <hr/>

                                </div>
                                <button className="BotaoFechar" onClick={closeModal}>Fechar</button>
                            </Modal>
                        </li>
                        <li className="nav-items">
                            <MenuProfile />
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? (
                            <span className="icon">
                                <HamburgetMenuClose />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuOpen />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
