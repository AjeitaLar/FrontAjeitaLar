import './Login.css';

function Login() {
    return (
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
                <button className='Btn_Login' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;