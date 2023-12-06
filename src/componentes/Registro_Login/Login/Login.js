import './Login.css';
import { Link } from "react-router-dom";
import Logo from '../../imgs/logo doido.png'

function LoginCliente() {
    return (
        <section className='Registro_fundo2'>
            <div className='caixalogo2'>
                <img src={Logo} className='Logo_Login2' alt="Logo" />
            </div>
        
            <div className="flex">
                <div className="Login_container2">
                    <h2>Login</h2>
                    <form>
                        <div>
                            <input className='Email2' type="email" placeholder="Digite seu email" />
                        </div>
                        <div>
                            <input className='Senha2' type="password" placeholder="Digite sua senha" />
                        </div>

                        <div>
                            <h3>Esqueci a senha</h3>
                        </div>
                        <Link to='/PerCliente'><button className='Btn_Login22' type="submit">Login</button></Link>
                    </form>
                </div>
                            
            </div>
        </section>
    );
};

export default LoginCliente;