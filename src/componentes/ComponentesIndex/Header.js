import Logo from './img_home/logo.png'
import Styles from './css/Header.module.css'
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <nav className={Styles.ContReparo}>
                <img src={Logo} alt='logo'/>

                <div className={Styles.ButReparo}>
                    <button>
                        Reparador
                    </button>
                    <button>
                        Preciso de reparo
                    </button>
                </div>
            </nav>
            
            <nav className={Styles.BtnConta}>
                <Link to='/PerfilPrestador'>
                <button>
                    Entrar
                </button>
                </Link>
                <Link to='/PerCliente'>
                <button>
                    Cadastre-se
                </button>
                </Link>
            </nav>
            
        </header>
    )
}

export default Header;