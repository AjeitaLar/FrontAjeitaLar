import './Registro.css'
import { Link } from "react-router-dom";
import LinhasLogin from '../../imgs/REGISTRE-SE (2).png'
import Logo from '../../imgs/logo doido.png'

function RegistroCliente() {
    return (
        <section className='Registro_fundo2'>

            <img src={LinhasLogin} className='Linhas_Registro2' alt="Linhas Laranja" />
            <img src={Logo} className='Logo_Registro2' alt="Logo" />


            <div className="Registro_container2">
                <h2>Registre-se</h2>
                <form>
                    <div>
                        <input className='Usuario2' type="text" placeholder="Digite seu nome" />
                        <input className='Usuario2' type="text" placeholder="Digite seu sobrenome" />
                    </div>
                    <div>
                        <input className='Email2' type="email" placeholder="Digite seu email" />
                    </div>
                    <div>
                        <input className='Senha2' type="password" placeholder="Digite sua senha" />
                    </div>

                    <div>
                        <input className='input' type="checkbox" id="scales" name="scales" />
                        <label for="scales">Aceito os termos de privacidade</label>
                    </div>
                    <Link to='/LoginPrestador'><button className='Btn_Registro2' type="submit">Registre-se</button></Link>
                </form>
            </div>
        </section>
    );
};

export default RegistroCliente;