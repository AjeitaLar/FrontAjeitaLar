import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-modal'
import Logo from '../../componentes/imgs/logo doido.png'
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Prestadorcomponents/Icons";
import MenuProfile from "../Prestadorcomponents/MenuProfile";

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
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    <span><img className="Logo" src={Logo} alt="Logo" /></span>
                </NavLink>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                            Minhas Solicitações
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <button className="BotaoCand" onClick={openModal}>Pedir um reparo</button>
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
    )
};

export default NavBarCli;