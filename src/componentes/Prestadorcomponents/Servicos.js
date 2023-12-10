import '../Prestadorcomponents/css/Servicos.css'
import CurvaLaranja from '../imgs/Rectangle.png'
import PropsServicos from '../../props/PropsServicos'
import fotoperfil from '../imgs/avatar.png';

import Modal from 'react-modal'
import { useEffect, useState } from "react";
import NavBar from './NavBar';

Modal.setAppElement("#root");

function Serviços() {

    function formatarData(data) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const dataFormatada = new Date(data).toLocaleDateString('pt-BR', options);
        return dataFormatada;
    }

    const [modalIsOpen, setModalIsOpen] = useState(null);
    const [selectedPedido, setSelectedPedido] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const openModal = (index) => {
        setModalIsOpen(index);
        setSelectedPedido(ajeitalar[index]);
    };

    const closeModal = () => {
        setModalIsOpen(null);
        setSelectedPedido(null);
    };
    const handleOptionChange = (option) => {
        // Verifica se a opção já está na lista de opções selecionadas
        if (selectedOptions.includes(option)) {
            // Remove a opção da lista se já estiver presente
            setSelectedOptions((prevOptions) =>
                prevOptions.filter((prevOption) => prevOption !== option)
            );
        } else {
            // Adiciona a opção à lista se ainda não estiver presente
            setSelectedOptions((prevOptions) => [...prevOptions, option]);
        }
    };

    const shouldDisplayService = (ajeitalar) => {
        if (selectedOptions.length === 0) {
            return true; // Se nenhuma opção estiver selecionada, exiba todos os serviços
        }

        // Verifique se pelo menos uma opção selecionada corresponde ao pedi_tipo do serviço
        return selectedOptions.some((option) => ajeitalar.pedi_tipo === option);
    };
        //Backend

        const[ajeitalar,setAjeitalar]=useState([]);

        useEffect(()=>{
        fetch("https://backajeitalar.up.railway.app/AjeitaLar/ListarPedidos")
        .then(res=>res.json())
        .then((result)=>{
            setAjeitalar(result);
        }
        )
        },[])

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

                                <div>
                                    <input type="checkbox"
                                    id="Encanamento"
                                    name="scales"
                                    onChange={() => handleOptionChange("Encanamento")} />
                                    <label htmlFor="Encanamento" for="scales">Encanamento</label>
                                </div>

                                <div>
                                    <input type="checkbox"
                                    id="pintura"
                                    name="scales"
                                    onChange={() => handleOptionChange("Pintura")} />
                                    <label for="scales">Pintura</label>
                                </div>
                                
                                <div>
                                <input type="checkbox"
                                    id="Marcenaria"
                                    name="scales"
                                    onChange={() => handleOptionChange("Marcenaria")} />
                                    <label for="scales">Marcenaria</label>
                                </div>

                                <div>
                                <input type="checkbox"
                                    id="Alvenaria"
                                    name="scales"
                                    onChange={() => handleOptionChange("Alvenaria")} />
                                    <label for="scales">Alvenaria</label>
                                </div>

                                <div>
                                <input type="checkbox"
                                    id="Instalações"
                                    name="scales"
                                    onChange={() => handleOptionChange("Instalações")} />
                                    <label for="scales">Instalações</label>
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

                    {ajeitalar.map((ajeitalar, index) => (
                        shouldDisplayService(ajeitalar) && (
                        <div key={ajeitalar.PK_idpedi}>

                            <PropsServicos
                                imagem={fotoperfil}
                                nome='Teodoro Souza'
                                titulo='Preciso de um reparo:'
                                Descr={ajeitalar.pedi_descr}
                                publi={ajeitalar.pedi_img}
                            />

                            <button className="BotaoCandidatar" onClick={() => openModal(index)}>
                                Ver ficha
                            </button>
                            <hr />
                            <Modal
                                isOpen={modalIsOpen === index}
                                onRequestClose={closeModal}
                                contentLabel="Example Modal"
                                overlayClassName="modal-overlayy"
                                className="modal-contentt">
                                <h4>Ficha de Serviço</h4>

                                {selectedPedido && (

                                <>

                                    <div className="ModalFicha">
                                        <div className='forms'>
                                            <form>
                                                <h1>Descrição do serviço: </h1> <br /> <p>{selectedPedido.pedi_descr} </p> <br />
                                                <h1>Tipo de serviço: <p>{selectedPedido.pedi_tipo} </p></h1> <br />
                                                <h1>Tipo de imovel: <p>{selectedPedido.ped_tipo_imovel}</p> </h1> <br />

                                                <h1>O prestador necessita comprar os materiais?</h1> <br />
                                                <input
                                                    type="radio"
                                                    class="form_new_input"
                                                    id="sim"
                                                    name="comprarMateriais"
                                                    value="true"
                                                    checked={selectedPedido && selectedPedido.pedi_nece_material === true}
                                                    required="required"
                                                />
                                                <label for="sim" class="radio_label form_label">
                                                    <span class="radio_new_btn"></span> Sim
                                                </label> <br />
                                                <input
                                                    type="radio"
                                                    class="form_new_input"
                                                    id="nao"
                                                    name="comprarMateriais"
                                                    value="false"
                                                    checked={selectedPedido && selectedPedido.pedi_nece_material === false}
                                                    required="required"
                                                />
                                                <label for="nao" class="radio_label form_label">
                                                    <span class="radio_new_btn"></span> Não
                                                </label> <br /> <br />

                                                {selectedPedido && selectedPedido.pedi_nece_material === true && (
                                                    <>
                                                        <h1>Quais materiais? </h1>
                                                        <p>{selectedPedido.pedi_material}</p>
                                                    </>
                                                )}

                                            </form>
                                        </div>
                                        <div className='mapa'>
                                            <h1>R. Tito, 45 - São Paulo/SP </h1>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58515.970146037456!2d-46.741999!3d-23.5595301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1695829855165!5m2!1spt-BR!2sbr" title='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <br /> <br /> <br />

                                            <h1>Informações adicionais: </h1>
                                            <p>{selectedPedido.pedi_informacao}</p>
                                            <br></br>
                                            <h1>Pedido feito em: </h1>
                                            <p>{formatarData(selectedPedido.pedi_data)}</p>

                                        </div>

                                    </div>

                                    <div className="ModalFicha2">
                                        <h1>Mande uma mensagem para o cliente </h1>
                                        <textarea name="mensagem" id="message" placeholder='Digite sua mensagem' required></textarea>
                                    </div>

                                    <button className="BotaoEnviar" onClick={closeModal}>Enviar</button>
                                    <button className="BotaoFechar" onClick={closeModal}>Cancelar</button>

                                </>
                                )}
                                
                            </Modal>
                        </div>
                    )))}
                    </div>



                </section>
            </>
        )
    }

    export default Serviços