import Style from "./Esq.module.css";
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";


function EsquerdaComp() {
    return (
        <div className={Style.esqLoc}>
            <div className={Style.loc}>
                <h3>Localização</h3>
                <p><FaLocationDot /> Jardim d'abril, Osasco-SP</p>
            </div>
            <div className={Style.esqava}>
                <div className={Style.recreparos}>
                    <h3>Reparos Requeridos</h3>
                    <div className={Style.ain}><h2>10</h2> <span className={Style.aindn}>Ainda não foram repados</span></div>
                    <div className={Style.position}> <div className={Style.ain}><h3 className={Style.num}>30</h3> <span className={Style.repacon}>Reparos Concluidos</span></div></div>
                </div>
                <hr/>
                <div className={Style.title}><span>Opniões dos Reparadores</span></div>
                <div className={Style.aval}>
                    <h3><BsEmojiLaughing /> BOM</h3>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>
                    <h3><BsEmojiLaughing /> BOM</h3>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>
                    <h3><BsEmojiLaughing /> BOM</h3>
                    <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde</p>
                </div>
            </div>

        </div>
    )
};
export default EsquerdaComp