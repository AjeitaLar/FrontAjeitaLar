import fotoperfil from '../imgs/fotoperfil.png';
import user from '../imgs/user.png';
import edit from '../imgs/edit.png';
import inbox from '../imgs/envelope.png';
import settings from '../imgs/settings.png';
import help from '../imgs/question.png';
import logout from '../imgs/log-out.png';
import '../../App.css';
import '../Prestadorcomponents/css/MenuProfile.css'
import DropdownItem from '../../props/PropsMenuP'

import { NavLink } from "react-router-dom";

import React, { useState, useEffect, useRef } from 'react';

function MenuProfile() {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className="App">
            <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                    <img src={fotoperfil}></img>
                </div>

                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                    <h3>Lorena Silva<br /><span>Prestadora</span></h3>
                    <ul>
                        <NavLink exact to="/" activeClassName="active" className="nav-links">
                            <DropdownItem img={user} text={"Meu Perfil"} />
                        </NavLink>
                        
                        <DropdownItem img={edit} text={"Editar Perfil"} />
                        <DropdownItem img={inbox} text={"Mensagens"} />
                        <DropdownItem img={settings} text={"Configurações"} />
                        <DropdownItem img={help} text={"Ajuda"} />

                        <NavLink exact to="/PerCliente" activeClassName="active" className="nav-links">
                            <DropdownItem img={logout} text={"Sair"} /> 
                        </NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuProfile;