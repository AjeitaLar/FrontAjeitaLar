import { useState } from "react";
import React, { useEffect } from 'react';
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

    // BACKEND

    const [pedi_descr, setPedido] = useState('')
    const [pedi_img, setImg] = useState('')
    const [pedi_nece_material, setNeceListamaterial] = useState('')
    const [pedi_material, setListamaterial] = useState('')
    const [pedi_tipo, setTipo] = useState('')
    const [ped_tipo_imovel, setTipoimovel] = useState('')
    const [pedi_informacao, setInformacao] = useState('')
    const [pedi_data] = useState(new Date().toISOString().split('T')[0]);
    const [pedi_status] = useState('pendente')

    const handleClickCadastro = (e)=>{

        e.preventDefault()
        const ajeitalar = {pedi_descr, pedi_img, pedi_material,pedi_status,pedi_nece_material,pedi_tipo,ped_tipo_imovel,pedi_informacao,pedi_data}
        console.log(ajeitalar)

        fetch("https://backajeitalar.up.railway.app/AjeitaLar/CadastroPedido",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(ajeitalar)
      
        }).then(()=>{
          console.log("O ajeitalar foi adicionado")
        })

        setPedido('')
        setImg('')
        setListamaterial('')
        setInformacao('')
        setTipo('Selecione')
        setTipoimovel('Selecione')
    }

    return (
        <>
            <nav className="navbar2">
                <div className="nav-container2">
                    <NavLink exact to="" className="nav-logo2">
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

                                            <textarea name="detalhe" id="detalhe" rows="150" placeholder='Ex: Preciso trocar a resistência do meu chuveiro da marca...' required
                                              value ={pedi_descr}
                                              onChange={(e)=>setPedido(e.target.value)}>
                                              </textarea>

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
                                                    <select id="dropdown1" value={pedi_tipo} onChange={(e) => setTipo(e.target.value)}>
                                                        <option value="Selecione" >Selecione</option>
                                                        <option value="Encanamento" >Encanamento</option>
                                                        <option value="Pintura" >Pintura</option>
                                                        <option value="Eletricidade" >Eletricidade</option>
                                                        <option value="Alvenaria" >Alvenaria</option>
                                                        <option value="Marcenaria" >Marcenaria</option>
                                                        <option value="Instalações" >Instalações</option>
                                                    </select>
                                                </label>

                                                <label>
                                                    <p>Tipo de imóvel</p>
                                                    <select id="dropdown1" value={ped_tipo_imovel} onChange={(e) => setTipoimovel(e.target.value)}>
                                                        <option value="Selecione" >Selecione</option>
                                                        <option value="Casa" >Casa</option>
                                                        <option value="Apartamento" >Apartamento</option>
                                                        <option value="Kitnet" >Kitnet</option>
                                                        <option value="Sobrado" >Sobrado</option>
                                                        <option value="Flat" >Flat</option>
                                                    </select>
                                                </label>

                                                <label>
                                                    <p>O prestador necessita comprar ou trazer os materiais?</p>
                                                    <input className="esco" name="grupoOpcoes" type="radio" required 
                                                    value = {true}
                                                    onChange={(e)=>setNeceListamaterial(e.target.value) == true}
                                                    /> Sim <br />

                                                    <input className="esco" name="grupoOpcoes" type="radio" required 
                                                    value = {false}
                                                    onChange={(e)=>setNeceListamaterial(e.target.value == false)}
                                                    defaultChecked={false}
                                                    /> Não
                                                </label>

                                                {pedi_nece_material && (
                                                    <label>
                                                        <p>Quais materiais?</p>
                                                        <input
                                                        className="campotxt"
                                                        type="text"
                                                        placeholder="Ex: resistência, escada"
                                                        required
                                                        value={pedi_material}
                                                        onChange={(e) => setListamaterial(e.target.value)}
                                                        />
                                                    </label>
                                                )}
                                            </div>

                                            <div className="formdi">

                                                <p>URL da Imagem:</p>

                                                <input className="end" type="text" required 
                                                value ={pedi_img}
                                                onChange={(e)=>setImg(e.target.value)}/>

                                                <div className="infoadd">
                                                    <p>Informações adicionais</p>
                                                    <input className="end" type="text" 
                                                    value ={pedi_informacao}
                                                    onChange={(e)=>setInformacao(e.target.value)}/>
                                                </div>
                                                <div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="butal">
                                    <button className=" modalbtn1" onClick={closeModal}>Fechar</button>
                                    <button className="BotaoFechar modalbtn" onClick={handleClickCadastro}>Enviar</button>
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