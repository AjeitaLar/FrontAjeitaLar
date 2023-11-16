import Style from "./Esq.module.css";
//ICONS
import { FaLocationDot } from "react-icons/fa6";
import { BsEmojiLaughing } from "react-icons/bs";


function EsquerdaComp(){
    return(
        <div className={Style.esqLoc}>
            <div className={Style.loc}>
                <h3>Localização</h3>
                <p><FaLocationDot /> Jardim d'abril, Osasco-SP</p>
            </div>
            <div className={Style.esqava}>
                <h3>Reparos Reueridos</h3>
                <h2>10</h2> <p>Ainda n~so foram repados</p>
                <h3>30</h3> <p>Reparos Concluidos</p>
                <hr/>
                <p>Opniões dos Reparadores</p>

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