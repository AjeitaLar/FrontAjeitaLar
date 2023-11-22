import Logo from './img_home/logo.png'
import Styles from './css/Header.module.css'

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
                <button>
                    Entrar
                </button>
                <button>
                    Cadastre-se
                </button>
            </nav>
            
        </header>
    )
}

export default Header;