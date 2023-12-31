import "../ClientComponents/css/clienteperfil.css";
//PROPS
import FotoPerfi from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import PropsFeedCli from "../../props/PropsFeedclient";
import NavBarCli from "./NavbarClie";
import Maquina from "../imgs/maquina.jpeg"
import Aquecedor from "../imgs/aquecedor.jpeg"
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function PerfilCliente() {
    return (
        <>
            <NavBarCli />
            <section className="cliperfil">
                <div className="color">
                    <div className="perficontainer">
                        {/*FOTO DE PERFIL*/}
                        <div className="photoperfil"></div>
                        {/*FOTO DE PERFIL*/}


                        {/*INFORMAÇOES DO PERFIL*/}
                        <div className="infoper">
                            <h1>Teodoro Souza</h1>
                            <span>Desde 20/10/2023  <FaStar /> <FaStar /> <FaStar /> <FaStar /></span>
                            <div className="premiun">
                                Seja premium
                            </div>
                        </div>

                        <div className="avali">
                            {/*ELEMENTOS DE REPAROS REQUIRIDOS*/}
                            <div className="recreparos">
                                <h3>Reparos Requeridos</h3>
                                <div className="ain"><h2>10</h2> <span className="aindn">Ainda não foram reparados</span></div>
                                <div className="position"> <div className="ain"><div className="num">30</div> <span className="repacon">Reparos Concluidos</span></div></div>
                            </div>
                            {/*ELEMENTOS DE REPAROS REQUIRIDOS*/}

                        </div>
                    </div>
                    {/*INFORMAÇOES DO PERFIL*/}

                    <div className="cont"> {/*SECTION DE CONTEUDO CONTENDO O FEED E OS COMPONENTES DA LATERAL*/}

                        <section className="lateralcli"> {/*SECTION DOS COMPONENTES A ESQUERDA*/}

                            {/*SECTION DE LOCALIZAÇÃO*/}
                            <div className="loc">
                                <h3>Localização</h3>
                                <p><NavLink to="/FeedClient"><FaLocationDot /></NavLink> Jardim d'abril, Osasco-SP</p>
                            </div>
                            {/*SECTION DE LOCALIZAÇÃO*/}
                            <div className="esqava">{/*SECTION QUE CONTEM OS ELEMENTOS INFERIORES DA LATERAL*/}

                                {/*COMENTARIOS*/}

                                <div className="comen">
                                    <div className="title"><span className="reco">Recomendações de prestadores</span></div>
                                    <h3 className="comename"><BsEmojiLaughing /> Lorena Souza</h3>
                                    <p className="comentext">Recomendo a Lorena sem hesitação. Seu trabalho é excepcional, demonstrando comprometimento e habilidade excepcionais. Confie nela para resultados de alta qualidade.</p>
                                    <h3 className="comename"><BsEmojiLaughing /> Val Silva</h3>
                                    <p className="comentext">Recomendo Val Silva como prestador de serviços. Seu profissionalismo e eficiência são notáveis. Confie na experiência de Val Silva para resultados excepcionais.</p>

                                    <div className="more">
                                        ver mais+
                                    </div>
                                </div>

                                {/*COMENTARIOS*/}

                            </div>
                        </section>

                        {/*SECTION DO FEED*/}

                        <div className="feedcli">
                            <h3 className="titlefeedcli">Reparos Finalizados</h3>
                            <hr />
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Preciso de um reparo para a minha máquina de lavar Brastemp, modelo BWK13AB. Ela está fazendo um barulho muito estranho e está vazando muita água. "
                                Feddimg={Maquina}
                            />
                            
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Esse negócio aí do meu aquecedor está furado. Preciso de um reparo emergencial, pois está vazando gás e eu preciso tomar banho. "
                                Feddimg={Aquecedor}
                            />
                            
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Gostaria de solicitar a troca de uma lâmpada. "
                                Feddimg={Feed1}
                            />
                        </div>
                        {/*SECTION DO FEED*/}
                    </div>
                </div>

            </section>
        </>
    )
}

export default PerfilCliente