import './Registro2.css'
import { Link } from "react-router-dom";
//ICONS
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdBadge } from "react-icons/md";

function RegistroPrestador() {
    return (
        <div className="rege">
            <div className="auth-containerrc">
                <h2>CADASTRE-SE</h2>
                <span className="clientere"> Seja um prestador em nossa plataforma e eleve sua carreira</span>

                <form>

                    <div className="flex-row">
                        <div className="input-container">
                            <FaUser /><input className='Nomep registroclient' type="text" placeholder='nome...' />
                        </div>

                        <div className="input-container">
                            <FaUser /><input className='Nomep registroclient' type="text" placeholder='Sobrenome...' />
                        </div>
                    </div>

                    <div className="input-container tamnho">
                        <MdBadge /><input className='CPF registroclient ' type='text' placeholder='CPF' />
                    </div>

                    <div className="input-container tamnho">
                        <MdEmail /><input className='Emailc registroclient ' type="email" placeholder='E-mail' />
                    </div>

                    <div className="flex-row">
                        <div className="input-container">
                            <RiLockPasswordFill /><input className='Senhac registroclient' type="password" placeholder='Senha' />
                        </div>

                        <div className="input-container">
                            <RiLockPasswordFill /><input className='Senhac registroclient' type="password" placeholder='Confirme sua senha' />
                        </div>
                    </div>


                </form>

                <div className='termos'>
                    <input type="checkbox" id="aceitarTermos" name="scales" />
                    <label htmlFor="aceitarTermos">Aceito os termos de privacidade</label>
                </div>


                <Link to='/LoginPrestador'><button className='Btn_Registrop' type="submit">CADASTRE-SE</button></Link>
            </div>
        </div>
       
    );
};

export default RegistroPrestador;