import Style from './Perfilcomponet.module.css'
//ICON
import { FaStar } from "react-icons/fa";

function PerfilComponent(){
    return(
        <div className={Style.perfilContainer}>
                <div className={Style.photoperfil}>
                    w
                </div>

                <div className={Style.infoperfil}>
                    <h3>Teodoro Souza</h3>
                    <span>Desde 02/08/2023 <FaStar /> <FaStar /> <FaStar /> <FaStar /></span>
                </div>

                <div className={Style.repu}>
                    area em processo, desenvolvendo a forma de avaliação não intrusiva
                    <div className={Style.bed}></div>
                    <div className={Style.god}></div>
                    <div className={Style.greate}></div>
                </div>
        </div>
    )
};

export default PerfilComponent