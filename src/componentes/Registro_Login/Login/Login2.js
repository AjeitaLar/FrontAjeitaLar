import './Login.css';
import { Link } from "react-router-dom";

function LoginPrestador() {
    return (
        <section className='Login_fundo'>
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div>
                    <input className='Email' type="email" placeholder="Digite seu email" />
                </div>
                <div>
                    <input className='Senha' type="password" placeholder="Digite sua senha" />
                </div>

                <div>
                    <h3>Esqueci a senha</h3>
                </div>
                <Link to='/PerfilPrestador'><button className='Btn_Login' type="submit">Login</button></Link>
            </form>
        </div>
        </section>
    );
};

export default LoginPrestador;