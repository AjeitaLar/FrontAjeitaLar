import "./css/feedclient.css";
import FotoPerfil from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import Feed2 from '../imgs/feed2.png'
import NavBarCli from "./NavbarClie";
import PropsFeedCli from "../../props/PropsFeedclient";
import PerfilFoto from "../imgs/fotoperfilcli.png"



function Feedcli() {
    return (
        <>
            <NavBarCli />
            <section className="misolici">
                <div className="feed-container">
                <PropsFeedCli
                        perfoto={PerfilFoto}
                        Perfilname="Teodoro Souza"
                        Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
                        Feddimg={Feed1}
                    />
                    <hr className="hri" />
                    <PropsFeedCli
                        perfoto={PerfilFoto}
                        Perfilname="Teodoro Souza"
                        Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
                        Feddimg={Feed1}
                    />
                    <hr className="hri" />
                    <PropsFeedCli
                        perfoto={PerfilFoto}
                        Perfilname="Teodoro Souza"
                        Descri="Preciso de um reparo para a minha maquina de lavar. Ela esta fazendo um barulho muito estranho e esta vazando muita água "
                        Feddimg={Feed1}
                    />
                </div>
            </section>
        </>
    )
}

export default Feedcli