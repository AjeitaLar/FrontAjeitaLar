import Styles from './css/MainCliente.module.css'
import Menina from './img_home/MulherCelular3.png'
import User from './img_home/Change User.png'
import Post from './img_home/Google News.png'
import Mensage from './img_home/Multiple Messages.png'
import ImgQuemSomos from './img_home/Group 14.png'
import Seguranca from './img_home/ImgSeguranca.png'
import Eco from './img_home/Group 10 (1).png'
import CircEco from './img_home/49455-removebg-preview 1.png'
import Bgc from './img_home/bgc2.png'
import Vinculos from './img_home/Logo_Vinculos_Redondo.png'
import Rescostura from './img_home/Logo_Recostura.png'
import ReactPlayer from 'react-player/youtube'
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import HeaderCliente from './HeaderCliente'

import Casa from './img_home/mecanico.png'
import Eletricista from './img_home/eletricista.png'
import Encanador from './img_home/encanador.png'
import Pintor from './img_home/tinta-de-rolo.png'

function MainCliente(){
    return(
    <>
    <HeaderCliente/>
        <main>
            <section className={Styles.ContInfo}>
                <h1>
                    Quer conquistar novos clientes?
                </h1>
                <p>
                    Aqui você encontra os pedidos perfeito para realizar os reparos!
                </p>
                <section className={Styles.ContBtnLogin}>
                <Link to='/LoginPrestador'>
                    <button className={Styles.BtnEntrar}>
                        Entrar
                    </button>
                </Link>
                <Link to='/RegistroPrestador'>
                    <button className={Styles.BtnEntrar}>
                        cadastre-se
                    </button>
                </Link>
                </section>
                
            </section>
            <section>
                <div className={Styles.ImgCirc1}></div>
                <div className={Styles.ImgCirc2}></div>
                <div className={Styles.ImgCirc3}></div>
            </section>
            <section className={Styles.ContScrollPage}>
                <div className={Styles.ScrollPage}>
                    <button>
                        <ScrollLink to="section1" smooth={true} duration={500}>Como funciona?</ScrollLink> 
                    </button>
                    <button>
                        <ScrollLink to="section2" smooth={true} duration={500}>Quem Somos</ScrollLink> 
                    </button>
                    <button>
                        <ScrollLink to="section3" smooth={true} duration={500}>Preciso de ajuda</ScrollLink>
                    </button>
                </div>
            </section>
            <section>
                
                <h1 className={Styles.RepH1}>
                    Que tipos de reparo?
                </h1>
                <div className={Styles.CircRep}></div>
                <div className={Styles.CircRep2}>
                    <div className={Styles.CircRepSpan}>
                        
                            <span className={Styles.FlexRepSpan}>
                                <img src={Casa} alt='Casa com uma mão segurando uma ferramenta' className={Styles.ImgCircCasa} />
                                <p>Manutenção</p>
                            </span> 

                            <span className={Styles.FlexRepSpan}>
                                <img src={Eletricista} alt='Casa com uma mão segurando uma ferramenta' className={Styles.ImgCircCasa} />
                                <p>Eletricidade</p>
                            </span> 

                            <span className={Styles.FlexRepSpan}>
                                <img src={Pintor} alt='Casa com uma mão segurando uma ferramenta' className={Styles.ImgCircCasa} />
                                <p>Pintura</p>
                            </span> 

                            <span className={Styles.FlexRepSpan}>
                                <img src={Encanador} alt='Casa com uma mão segurando uma ferramenta' className={Styles.ImgCircCasa} />
                                <p>Encanamento</p>
                            </span> 
                    </div> 
                </div>
                <div className={Styles.CircRep3}></div>
            </section> 
            <Element name="section1">
                <section className={Styles.ComoFunc}>
                    <img src={Menina} alt='Menina no celular' className={Styles.ImgComoFunc} />
                    <div>

                        <div className={Styles.TitleComoFunc}>
                            <h1>COMO FUNCIONA?</h1>
                            <p>Encontrar um profissional qualificado e que atenda suas necessidades nunca foi tão fácil</p>
                            <div className={Styles.BtnComoFunc}>
                                <button>
                                    Sou Repardor
                                </button>
                                <button>
                                    Preciso de reparos
                                </button>
                            </div>
                        </div>
                        <div className={Styles.ContInfComoFunc}>
                            <div className={Styles.InfComoFunc}>
                                <img src={User} alt='avatar user' className={Styles.ImgInfComoFunc} />
                                <p>Crie seu perfil gratuitamente</p>
                            </div>
                            <div className={Styles.InfComoFunc}>
                                <img src={Post} alt='avatar user' className={Styles.ImgInfComoFunc} />
                                <p>Poste seu reparo</p>
                            </div>
                            <div className={Styles.InfComoFunc}>
                                <img src={Mensage} alt='avatar user' className={Styles.ImgInfComoFunc} />
                                <p>Entre em contato com o reparador</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
            
            <section className={Styles.ContVideo}>
                <ReactPlayer url='https://www.youtube.com/watch?v=85AOLj_8Oog' className={Styles.Video} />
            </section>

            <Element name="section2">
                <section className={Styles.QuemSomos}>
                    <img src={ImgQuemSomos} alt='avatar user' className={Styles.ImgQuemSomos} />
                    <div className={Styles.TextQuemSomos}>
                        <h1>QUEM SOMOS</h1>
                        <p>AjeitaLar é uma plataforma eficiente que facilita a conexão entre usuários e profissionais de reparo domiciliar. Com foco em valorizar talentos locais, tornamos o processo de encontrar serviços de reparo simples e direto.</p>
                        <p>Nosso compromisso vai além da conexão entre clientes e prestadores, incluindo a busca pela sustentabilidade e a promoção da segurança.</p>
                    </div>
                </section>
            </Element>
            
            <section className={Styles.Seguranca}>
                <div className={Styles.TextSeguranca}>
                    <h1>SEGURANÇA</h1>
                    <p>Em parceria com a BGC, uma empresa especializada em gestão de dados e análise de risco de pessoas, garantimos a segurança dos seus dados e a veracidade de todos os presentes em nossa plataforma.</p>
                    <img src={Bgc} alt='avatar user' className={Styles.Bgc} />
                </div>
                <img src={Seguranca} alt='avatar user' className={Styles.ImgSeguranca} />
            </section>
            <section className={Styles.Eco}>

                <img src={Eco} alt='Imagem ecologica' className={Styles.ImgEco} />
                <img src={CircEco} alt='Imagem ecologica' className={Styles.ImgCircEco} />
                <div className={Styles.TextEco}>
                    <h1>DESCARTE</h1>
                    <p>Nossa plataforma está empenhada em promover a conscientização sobre o descarte ecológico apropriado dos resíduos gerados durante os reparos.</p>
                </div>
            </section>
            <section className={Styles.parceiros}>
                
                <h1>
                    
                    PARCEIROS
                </h1>
                <div className={Styles.logos}>
                    <img src={Vinculos} alt='Logo startap Vinculos' />
                    <img src={Bgc} alt='Logo startap Bgc' />
                    <img src={Rescostura} alt='Logo startap Rescostura' />
                </div>
            </section>
        </main>
        <hr/>
        <footer>
            <Element name="section3">
                <section className={Styles.ContFoot}>
                    <div className={Styles.ContRedes}>
                        <div className={Styles.IconsRedes}>
                            <FaFacebook/>
                            <RiWhatsappFill/>
                            <AiFillInstagram/>
                            <FaTiktok/>
                            </div>
                        <h5>
                            AjeitaLar
                        </h5>
                    </div>
                    <div className={Styles.LinksFoot}>
                        <h5>
                            Duvidas frequentes
                        </h5>
                        <h5>
                            Politica de provacidade
                        </h5>
                        <h5>
                            Termos de serviço
                        </h5>
                    </div>
                </section>
                
            </Element>        
        </footer>
    </>
    )
}

export default MainCliente