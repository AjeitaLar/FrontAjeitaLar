import Logo from './img_home/logo.png'
import Styles from './css/HeaderCliente.module.css'
import { Link } from "react-router-dom";

function HeaderCliente(){
    return(
        <header>
            <nav className={Styles.ContReparo}>
                <img src={Logo} alt='logo'/>

                <div className={Styles.ButReparo}>
                    <Link to='/MainCliente'>
                        <button className={Styles.Reparador}>
                            Sou Reparador
                        </button>
                    </Link>
                    <Link to='/'>
                        <button className={Styles.Cliente}>
                            Preciso de reparo
                        </button>
                    </Link>
                    
                </div>
            </nav>
            
            <nav className={Styles.BtnConta}>
                <Link to='/LoginPrestador'>
                <button>
                    Entrar
                </button>
                </Link>
                <Link to='/RegistroPrestador'>
                <button>
                    Cadastre-se
                </button>
                </Link>
            </nav>
            
        </header>
    )
}

export default HeaderCliente;