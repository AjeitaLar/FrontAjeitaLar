import '../Prestadorcomponents/css/Perfil.css'
import CurvaLaranja from '../imgs/Rectangle.png'
import FotoPerfil from '../imgs/fotoperfil.png'
import Estrela from '../imgs/Star.png'
import Folha from '../imgs/insignia.png'
import local from '../imgs/local.png'
import LinhaG from '../imgs/Line 15.png'
import LinhaM from '../imgs/Line 16.png'
import LinhaP from '../imgs/Line 17.png'
import Feed1 from '../imgs/feed.png'
import Feed2 from '../imgs/feed2.png'
import PropsFeed from '../../props/PropsFeed'


function PerfilPrestador() {
    return (
        <section>
            <img className="curva" src={CurvaLaranja} alt="Laranja" />

            <div className="secao1">
                <img className="Perfil" src={FotoPerfil} alt="FotoPerfil" />
                <div className="QuemSou">
                    <div className="Nome">
                        <h1>Lorena Silva</h1>
                    </div>
                    <div className="Desde">
                        <p>Desde 20/10/2023</p>
                        <div>
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                        </div>
                        <img className="Folha" src={Folha} alt="Folha" />
                    </div>

                    <div className="Texto">
                        <p>Sou a Lorena Silva, presto serviços de manutenção a alguns anos, tenho experiencia na área de pequenos reparos </p>
                    </div>
                </div>

                <div className="algo"></div>
            </div>

            <div className="Secao2">

            <div className="SecaoLateral">

                <div className="Localização">
                    <h1>Localização</h1>
                    <img className="local" src={local} alt="local" />
                    <p>Jardim d’abril, Osasco-SP</p>
                </div>

                <div className="Opiniao">
                    <h1>Opiniao dos seus clientes</h1>
                    <h2>30</h2>
                    <div className="Linhas">
                        <img className="LinhaG" src={LinhaG} alt="Linha" />
                        <img className="LinhaM" src={LinhaM} alt="Linha" />
                        <img className="LinhaP" src={LinhaP} alt="Linha" />
                    </div>
                    <div className="Linhas">
                        <p>Bom</p>
                        <p>Regular</p>
                        <p>Ruim</p>
                    </div>

                    <div className="Rank">
                        <h1>Regular</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lectus.</p>

                        <h1>Ruim</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lectus.</p>

                        <h1>Bom</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing lectus.</p>

                        <h2>Ver mais +</h2>
                    </div>
                </div>

                <div className="Preferencias">
                    <h1>Experiencias e preferencias</h1>
                    <p>Conserto de maquinas de lavar</p>
                    <p>Conserto de geladeira </p>
                    <h2>Ver mais +</h2>
                </div>

            </div>

            <div className="Feed">
            <PropsFeed 
            titulo='Reparo feito em 19/12/2023'
            Descr='Troca de lâmpada com descarte ecológico '
            imagem={Feed1}
            />
            <hr />

            <PropsFeed 
            titulo='Reparo feito em 19/12/2023'
            Descr='Troca de lâmpada com descarte ecológico '
            imagem={Feed2}
            />
            <hr />
            
            <PropsFeed 
            titulo='Reparo feito em 19/12/2023'
            Descr='Troca de lâmpada com descarte ecológico '
            imagem={Feed1}
            />

            </div>
            </div>
        </section>
    );
};

export default PerfilPrestador;
