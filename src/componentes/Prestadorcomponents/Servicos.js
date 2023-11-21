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
            <NavBar/>

        <section className='Servicos'>
            <img className="curva2" src={CurvaLaranja} alt="Laranja" />

            <div className='SecaoLado'>

                <div className='T_Servico'>
                    <fieldset>
                        <legend>Tipo de serviço</legend>

                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Rapido</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Demorado</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Rapido</label>
                        </div>

                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Demorado</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Demorado</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Demorado</label>
                        </div>
                        <div>
                            <input type="checkbox" id="horns" name="horns" />
                            <label for="horns">Demorado</label>
                        </div>
                    </fieldset>

                </div>

                <div className='Regiao'>
                    <fieldset>
                        <legend>Regiões</legend>

                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Zona Norte</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Zona Sul</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Zona Leste</label>
                        </div>
                        <div>
                            <input type="checkbox" id="scales" name="scales" />
                            <label for="scales">Zona Oeste</label>
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
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br/> <br/>

                                <h1>O prestador necessita comprar os materiais?</h1> <br />
                                <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br/>
                                <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br/> <br/>

                                <h1>Quais materiais ? <p>Lampada de LED</p> </h1>

                            </form>
                        </div>
                        <div className='mapa'>
                            <h1>R. Tito, 45 - São Paulo/SP </h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58515.970146037456!2d-46.741999!3d-23.5595301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1695829855165!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br/> <br/> <br/>

                        <h1>Informações adicionais: </h1>
                        <h1>____________________________ </h1>

                        </div>

                    </div>

                    <div className="ModalFicha2">
                    <h1>Mande uma mensagem para o cliente </h1>
                        <textarea name="mensagem" id="message" placeholder='Digite sua mensagem' required></textarea>
                    </div>

                    <button className="BotaoCand" onClick={closeModal}>Fechar</button>
                    <button className="BotaoEnviar" onClick={closeModal}>Enviar</button>

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
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br/> <br/>

                                <h1>O prestador necessita comprar os materiais?</h1> <br />
                                <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Sim</label> <br/>
                                <input type="radio" class="form_new_input" id="masculino" name="sexo" value="Masculino" required="required" />
                                <label for="masculino" class="radio_label form_label"> <span class="radio_new_btn"></span> Não</label> <br/> <br/>

                                <h1>Quais materiais ? <p>Lampada de LED</p> </h1>

                            </form>
                        </div>
                        <div className='mapa'>
                            <h1>R. Tito, 45 - São Paulo/SP </h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58515.970146037456!2d-46.741999!3d-23.5595301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1695829855165!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br/> <br/> <br/>

                        <h1>Informações adicionais: </h1>
                        <h1>____________________________ </h1>

                        </div>

                    </div>

                    <div className="ModalFicha2">
                    <h1>Mande uma mensagem para o cliente </h1>
                        <textarea name="mensagem" id="message" placeholder='Digite sua mensagem' required></textarea>
                    </div>

                    <button className="BotaoCand" onClick={closeModal}>Fechar</button>
                    <button className="BotaoEnviar" onClick={closeModal}>Enviar</button>

                </Modal>
                <hr />

                <PropsServicos
                    titulo='Preciso de um reparo:'
                    Descr='A minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água '
                    imagem={fotoperfil}
                    nome='Larissa Silva'
                    publi={Feed1}
                />
                <button className="BotaoCandidatar" onClick={openModal}>Candidaturas</button>
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