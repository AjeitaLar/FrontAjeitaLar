<<<<<<< HEAD
import "./css/feedclient.css";
=======
import "../ClientComponents/css/feedclient.css";
>>>>>>> 900b0b08d5db259a111885f859f4464e21a6273d
import FotoPerfil from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import Feed2 from '../imgs/feed2.png'
import PropsFeed from '../../props/PropsFeed'
import NavBarCli from "./NavbarClie";

function Feedcli() {
    return (
        <>
            <NavBarCli/>
            <section className="misolici">
                <div className="feed-container">
                <PropsFeed
                        titulo='Solicitando um reparo'
                        Descr='Troca de lâmpada com descarte ecológico '
                        imagem={Feed1}
                    />
                    <hr />

                    <PropsFeed
                        titulo='Solicitando um reparo'
                        Descr='Troca de lâmpada com descarte ecológico '
                        imagem={Feed2}
                    />
                    <hr />

                    <PropsFeed
                        titulo='Solicitando um reparo' 
                        Descr='Troca de lâmpada com descarte ecológico '
                        imagem={Feed1}
                    />
                </div>
            </section>
        </>
    )
}

export default Feedcli