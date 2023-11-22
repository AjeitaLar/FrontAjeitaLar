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
import ReactPlayer from 'react-player/youtube'
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import { Element } from 'react-scroll';
import HeaderCliente from './HeaderCliente'

function MainCliente(){
    return(
    <>
    <HeaderCliente/>
        <main>
            <section className={Styles.ContInfo}>
                <h1>
                    Precisa de um reparo?
                </h1>
                <p>
                    Aqui você encontra o trabalhador perfeito para realizar os pequenos reparos da sua residência!
                </p>
                <button className={Styles.BtnEntrar}>
                    Entrar
                </button>
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
                     {/* <p>teste</p> */}
                </div>
                <div className={Styles.CircRep3}></div>
                    {/* <div className={Styles.Circ}>
                        <div className={Styles.words}>
                        <span>fantastic</span>
                        <span>interesting</span>
                        <span>awesome</span>
                        <span>incredible</span>
                        <span>fantastic</span>
                        </div>
                        </div>*/}
            </section> 
            <Element name="section1">
                <section className={Styles.ComoFunc}>
                    <img src={Menina} alt='Menina no celular' className={Styles.ImgComoFunc} />
                    <div>

                        <div className={Styles.TitleComoFunc}>
                            <h1>COMO FUNCIONA?</h1>
                            <p>Encontrar um profissional qualificado e que atenda suas necessidades nunca foi tão fácil
                            </p>
                            <div className={Styles.BtnComoFunc}>
                                <button>
                                    Repardor
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
                        <p>Somos uma empresa que conecta trabalhadores autônomos na área de reparos domiciliares, com pessoas que precisam desses serviços em suas casas</p>
                    </div>
                </section>
            </Element>
            
            <section className={Styles.Seguranca}>
                <div className={Styles.TextSeguranca}>
                    <h1>SEGURANÇA</h1>
                    <p>Junto a BGC - uma empresa de gestão de dados e analise de risco de pessoas, garantimos a segurança dos seus dados e a veracidade de todos os presente na nossa plataforma. </p>
                </div>
                <img src={Seguranca} alt='avatar user' className={Styles.ImgSeguranca} />
            </section>
            <section className={Styles.Eco}>

                <img src={Eco} alt='Imagem ecologica' className={Styles.ImgEco} />
                <img src={CircEco} alt='Imagem ecologica' className={Styles.ImgCircEco} />
                <div className={Styles.TextEco}>
                    <h1>DESCARTE</h1>
                    <p>Nossa plataforma visa a conscientização do descarte ecológico dos resíduos que podem ser gerados nos reparos.  </p>
                </div>
            </section>
            <section className={Styles.Bgc}>
                
                <h1>
                    
                    PARCEIROS
                </h1>
                <img src={Bgc} alt='Logo startap Bgc' />
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