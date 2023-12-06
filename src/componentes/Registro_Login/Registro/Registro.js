import './Registro.css'
import { Link } from "react-router-dom";
//IMG
import DonaMaria from "../../imgs/dona-maria (1).png"
import CurvaLo from "../../imgs/curvalog.png"
//ICONS
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdBadge } from "react-icons/md";

function RegistroCliente() {
    return (
        <div className="reg">
            <div className="auth-containerrc">
                <h2 className=' titlere colorbluet'>CADASTRE-SE</h2>
                <span className="clientere colorbluet"> Seja cliente em nossa plataforma e encontre o profissional perfeito para o seu reparo</span>

                <form>

                    <div className="flex-row">
                        <div className="input-container colorblue">
                            <FaUser /><input className='Nomep registroclient' type="text" placeholder='nome...' />
                        </div>

                        <div className="input-container colorblue">
                            <FaUser /><input className='Nomep registroclient' type="text" placeholder='Sobrenome...' />
                        </div>
                    </div>

                    <div className="input-container colorblue tamnho">
                        <MdBadge /><input className='CPF registroclient ' type='text' placeholder='CPF' />
                    </div>

                    <div className="input-container colorblue tamnho">
                        <MdEmail /><input className='Emailc registroclient ' type="email" placeholder='E-mail' />
                    </div>

                    <div className="flex-row">
                        <div className="input-container colorblue">
                            <RiLockPasswordFill /><input className='Senhac registroclient' type="password" placeholder='Senha' />
                        </div>

                        <div className="input-container colorblue">
                            <RiLockPasswordFill /><input className='Senhac registroclient' type="password" placeholder='Confirme sua senha' />
                        </div>
                    </div>


                </form>

                <div className='termos colorbluet'>
                    <input type="checkbox" id="aceitarTermos" name="scales" />
                    <label htmlFor="aceitarTermos colorblue">Aceito os termos de privacidade</label>
                </div>


                <Link to='/LoginCliente'><button className='Btn_Registrop colorblue' type="submit">CADASTRE-SE</button></Link>
            </div>
        </div>
    );
};

export default RegistroCliente;