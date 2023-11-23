import '../Prestadorcomponents/css/Servicos.css'
import CurvaLaranja from '../imgs/Rectangle.png'
import PropsServicos from '../../props/PropsServicos'
import fotoperfil from '../imgs/fotoperfil.png';
import Feed1 from '../imgs/feed.png'
import Feed2 from '../imgs/feed2.png'
import Modal from 'react-modal'
import { useState } from "react";
import NavBar from './NavBar';
Modal.setAppElement("#root");

function Serviços() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

        return (
            <>
                <NavBar />

                <section className='Servicos'>
                    <img className="curva2" src={CurvaLaranja} alt="Laranja" />

                    <div className='SecaoLado'>

                        <div className='T_Servico'>
                            <fieldset>
                                <legend>Tipos de serviços</legend>

                                <div>
                                    <input className='Buscar' type="text" placeholder='Buscar tipos de serviços' />
                                </div>

                                <div className="Drop">
                                    <label htmlFor="dropdown">Encanamento</label>
                                    <select id="dropdown1">
                                        <option>Desentupir</option>
                                        <option>Vazamentos</option>
                                    </select>
                                </div>
                                <div className="Drop">
                                    <label htmlFor="dropdown">Pintura</label>
                                    <select id="dropdown1">
                                        <option>Parede</option>
                                        <option>Teto</option>
                                        <option>Portas</option>
                                        <option>Janelas</option>
                                        <option>Móveis</option>
                                    </select>
                                </div>
                                <div className="Drop">
                                    <label htmlFor="dropdown">Eletricidade</label>

                                    <select id="dropdown1">
                                        <option>Interruptores</option>
                                        <option>Tomadas</option>
                                        <option>Lampadas</option>
                                        <option>Afiação</option>
                                    </select>
                                </div>
                                <div className="Drop">
                                    <label htmlFor="dropdown">Marcenaria</label>

                                    <select id="dropdown1">
                                        <option>Cadeiras</option>
                                        <option>Mesas</option>
                                        <option>Portas</option>
                                        <option>Armários</option>
                                        <option>Gavetas</option>
                                        <option>Estantes</option>
                                    </select>
                                </div>
                                <div className="Drop">
                                    <label htmlFor="dropdown">Alvenaria</label>
                                    <select id="dropdown1">
                                        <option>Rachaduras</option>
                                        <option>Buracos</option>
                                        <option>Pisos</option>
                                    </select>
                                </div>
                                <div className="Drop">
                                    <label htmlFor="dropdown">Instalações</label>
                                    <select id="dropdown1">
                                        <option>Prateleiras</option>
                                        <option>Suportes</option>
                                        <option>Cortinas</option>
                                        <option>Chuveiro</option>
                                    </select>
                                </div>
                            </fieldset>

                        </div>

                        <div className='Estados'>
                            <fieldset>
                                <legend>Estados</legend>

                                <div>
                                    <input type="checkbox" checked id="scales" name="scales" />
                                    <label for="scales">São Paulo</label>
                                </div>
                            </fieldset>

                        </div>

                        <div className='Municipios'>
                            <fieldset>
                                <legend>Municípios</legend>

                                <div>
                                    <input className='Buscar' type="text" placeholder='Buscar municípios' />
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">São Paulo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Guarulhos</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Campinas</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">São Bernardo do Campo</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Santo André</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Osasco</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Sorocaba</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Ribeirão Preto</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">São José dos Campos</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">São José do Rio Preto</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Mogi das Cruzes</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Sorocaba</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Jundiaí</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Piracicaba</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Santos</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Mauá</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Diadema</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Carapicuíba</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="scales" name="scales" />
                                    <label for="scales">Bauru</label>
                                </div>

                            </fieldset>

                        </div>

                    </div>

                    <div className='M_Serviços'>

                        <PropsServicos
                            titulo='Preciso de um reparo:'
                            Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                            imagem={fotoperfil}
                            nome='Larissa Silva'
                            publi={Feed1}
                        />

                        <button className="BotaoCandidatar" onClick={openModal}>Candidaturas</button>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            overlayClassName="modal-overlayy"
                            className="modal-contentt">
                            <h4>Ficha de Serviço</h4>

                            <div className="ModalFicha">
                                <div className='forms'>
                                    <form>
                                        <h1>Tipo de serviço: <p>Trocar lampada</p></h1> <br />
                                        <h1>Tipo de imovel: <p>Apartamento</p> </h1> <br />

                                        <h1>Tem restrição de horário ?</h1> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br /> <br />

                                        <h1>O prestador necessita comprar os materiais?</h1> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br /> <br />

                                        <h1>Quais materiais ? <p>Lampada de LED</p> </h1>

                                    </form>
                                </div>
                                <div className='mapa'>
                                    <h1>R. Tito, 45 - São Paulo/SP </h1>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58515.970146037456!2d-46.741999!3d-23.5595301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1695829855165!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br /> <br /> <br />

                                    <h1>Informações adicionais: </h1>
                                    <h1>____________________________ </h1>

                                </div>

                            </div>

                            <div className="ModalFicha2">
                                <h1>Mande uma mensagem para o cliente </h1>
                                <textarea name="mensagem" id="message" placeholder='Digite sua mensagem' required></textarea>
                            </div>

                            <button className="BotaoEnviar" onClick={closeModal}>Enviar</button>
                            <button className="BotaoFechar" onClick={closeModal}>Cancelar</button>

                        </Modal>
                        <hr />

                        <PropsServicos
                            titulo='Preciso de um reparo:'
                            Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                            imagem={fotoperfil}
                            nome='Larissa Silva'
                            publi={Feed2}
                        />

                        <button className="BotaoCandidatar" onClick={openModal}>Candidaturas</button>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            overlayClassName="modal-overlayy"
                            className="modal-contentt">
                            <h4>Ficha de Serviço</h4>

                            <div className="ModalFicha">
                                <div className='forms'>
                                    <form>
                                        <h1>Tipo de serviço: <p>Trocar lampada</p></h1> <br />
                                        <h1>Tipo de imovel: <p>Apartamento</p> </h1> <br />

                                        <h1>Tem restrição de horário ?</h1> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br /> <br />

                                        <h1>O prestador necessita comprar os materiais?</h1> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br />
                                        <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                        <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br /> <br />

                                        <h1>Quais materiais ? <p>Lampada de LED</p> </h1>

                                    </form>
                                </div>
                                <div className='mapa'>
                                    <h1>R. Tito, 45 - São Paulo/SP </h1>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58515.970146037456!2d-46.741999!3d-23.5595301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1695829855165!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br /> <br /> <br />

                                    <h1>Informações adicionais: </h1>
                                    <h1>____________________________ </h1>

                                </div>

                            </div>

                            <div className="ModalFicha2">
                                <h1>Mande uma mensagem para o cliente </h1>
                                <textarea name="mensagem" id="message" placeholder='Digite sua mensagem' required></textarea>
                            </div>

                            <button className="BotaoEnviar" onClick={closeModal}>Enviar</button>
                            <button className="BotaoFechar" onClick={closeModal}>Cancelar</button>

                        </Modal>
                        <hr />

                        <PropsServicos
                            titulo='Preciso de um reparo:'
                            Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                            imagem={fotoperfil}
                            nome='Larissa Silva'
                            publi={Feed1}
                        />
                        <button className="BotaoCandidatar" onClick={openModal}>Candidatar-se</button>
                        <hr />

                        <PropsServicos
                            titulo='Preciso de um reparo:'
                            Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                            imagem={fotoperfil}
                            nome='Larissa Silva'
                            publi={Feed2}
                        />
                        <button className="BotaoCandidatar" onClick={openModal}>Candidaturas</button>
                        <hr />

                    </div>



                </section>
            </>
        )
    }

    export default Serviços