import "../ClientComponents/css/clienteperfil.css";
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";

function Cliente() {
    return (
        <section className="cliperfil">
            <div className="perficontainer">
                <div className="photoperfil">
                    w
                </div>

                <div className="infoper">
                    <h1>Teodoro Souza</h1>
                    <span>Desde 20/10/2023</span>
                </div>

                <div className="avali">
                    em planejamento
                </div>
            </div>

            <section className="lateralcli">
                <div className="loc">
                    <h3>Localização</h3>
                    <p><FaLocationDot /> Jardim d'abril, Osasco-SP</p>
                </div>
                <div className="esqava">
                <div className="recreparos">
                        <h3>Reparos Requeridos</h3>
                        <div className="ain"><h2>10</h2> <span className="aindn">Ainda não foram repados</span></div>
                        <div className="position"> <div className="ain"><div className="num">30</div> <span className="repacon">Reparos Concluidos</span></div></div>
                    </div> 
                    <hr />
                    <div className="title"><span>Recomendações de prestadores</span></div>
                    <div className="comen">
                    <h3 className="comename"><BsEmojiLaughing /> Lorena Souza</h3>
                        <p className="comentext">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>
                        <h3 className="comename"><BsEmojiLaughing /> Marcos Mion</h3>
                        <p className="comentext">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>

                        <div className="more">
                            ver mais+
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Cliente