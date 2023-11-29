import './Registro.css'
import { Link } from "react-router-dom";

function RegistroPrestador() {
    return (
        <div className="auth-containerr">
            <h2>Registre-se</h2>
            <form>
                <div>
                    <input className='Usuario' type="text" placeholder="Digite seu nome" />
                    <input className='Usuario' type="text" placeholder="Digite seu sobrenome" />
                </div>
                <div>
                    <input className='Email' type="email" placeholder="Digite seu email" />
                </div>
                <div>
                    <input className='Senha' type="password" placeholder="Digite sua senha" />
                </div>

                <div>
                <input type="checkbox" id="scales" name="scales" />
                <label for="scales">Aceito os termos de privacidade</label>
                </div>
                <Link to='/LoginPrestador'><button className='Btn_Registro' type="submit">Registre-se</button></Link>
            </form>
        </div>
    );
};

export default RegistroPrestador;