import "../ClientComponents/css/feedclient.css";
import FotoPerfil from '../imgs/fotoperfilcli.png'
import Feed1 from '../imgs/feed.png';
import Feed2 from '../imgs/feed2.png'
import PropsFeed from '../../props/PropsFeed'

function Feedcli() {
    return (
        <>
    
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