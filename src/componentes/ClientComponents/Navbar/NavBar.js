import Style from './NavBar.module.css'
import Logo from '../imgComponentes/logo 2.png'
//ICONS
import { FaCirclePlus } from "react-icons/fa6";

function NavbarComponent() {
    return (
        <div className={Style.navcontainer}>
            <div className={Style.menu}>
                <div className={Style.logo}>
                    <img src={Logo} alt="logo da AjeitaLar" />
                </div>
                <ul className={Style.ull}>
                    <li className={Style.lii}>Perfil</li>
                    <li className={Style.lii}>Minhas Solicitações</li>
                    <li className={Style.lii}><div className={Style.button}>
                        <FaCirclePlus />
                    </div></li>
                </ul>
            </div>

        </div>
    )
}

export default NavbarComponent