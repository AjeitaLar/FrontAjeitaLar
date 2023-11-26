import "./css/feedclient.css";
import NavBarCli from "./NavbarClie";
//PROPS
import FotoPerfil from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import Feed2 from '../imgs/feed2.png'
import PropsFeedCli from "../../props/PropsFeedclient";
import PerfilFoto from "../imgs/fotoperfilcli.png"
//IMG
import CurvaAzul from "../imgs/curvaazul.png"
import FotoPerfilCli from "../imgs/fotoperfilcli.png"
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { TbProgress } from "react-icons/tb";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { FaCrown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";




function Feedcli() {
    return (
        <>
            <NavBarCli />
            <section className="misolici">
                <img className="curvazul" src={CurvaAzul} alt="curva azul" />

                <div className="lateralfeed">
                    <div className="pinfo">
                        <img className="perfilfo" src={FotoPerfilCli} alt="foto de perfil" />
                        <h2>Teodoro Souza</h2>
                        <p><FaLocationDot /> Jardim d'abril, Osasco-SP</p>
                        <hr className="line" />
                    </div>
                    <div className="reque">
                        <h3>Requerimentos</h3>
                        <button><CiFilter /> Filtrar requerimentos</button>
                        <button><TbProgress /> Status de requerimento</button>
                        <button><IoPeopleCircleSharp /> Candidatos</button>
                        <hr className="line" />
                    </div>

                    <div className="plane">
                        <button> <FaCrown />  Planos e vantagens</button>

                    </div>
                    
                    <div className="config">
                        <button><IoSettingsOutline />  Configuração</button>
                    </div>
                </div>

                <div className="feedcon"></div>

            </section>
        </>
    )
}

export default Feedcli