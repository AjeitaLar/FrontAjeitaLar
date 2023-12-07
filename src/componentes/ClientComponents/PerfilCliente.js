import "../ClientComponents/css/clienteperfil.css";
//PROPS
import FotoPerfi from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import PropsFeedCli from "../../props/PropsFeedclient";
import NavBarCli from "./NavbarClie";
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
//IMGS
import CurvaAzul from "../imgs/curvaazul.png"
import FotodePcli from "../imgs/fotoperfilcli.png"

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
                                <div className="title"><span className="reco">Recomendações de prestadores</span></div>
                                <div className="comen">
                                    <h3 className="comename"><BsEmojiLaughing /> Lorena Souza</h3>
                                    <p className="comentext">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>
                                    <h3 className="comename"><BsEmojiLaughing /> Marcos Mion</h3>
                                    <p className="comentext">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>

                                    <div className="more">
                                        ver mais+
                                    </div>
                                </div>

                                {/*COMENTARIOS*/}

                            </div>
                        </section>

                        {/*SECTION DO FEED*/}

                        <div className="feedcli">
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
                                Feddimg={Feed1}
                            />
                            <hr />
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
                                Feddimg={Feed1}
                            />
                            <hr />
                            <PropsFeedCli
                                perfoto={FotoPerfi}
                                Perfilname="Teodoro Souza"
                                Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
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