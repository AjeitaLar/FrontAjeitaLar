import '../Prestadorcomponents/css/Perfil.css'
import CurvaLaranja from '../imgs/Rectangle.png'
import fotoperfil from '../imgs/fotoperfil.png'
import Estrela from '../imgs/Star.png'
import Selo from '../imgs/SeloPremium.png'
import Reputacao from '../imgs/Reputaçao.png'
import local from '../imgs/local.png'
import LinhaG from '../imgs/Line 15.png'
import LinhaM from '../imgs/Line 16.png'
import LinhaP from '../imgs/Line 17.png'
import Feed1 from '../imgs/feed.png'
import Feed2 from '../imgs/MaquinaDeLavar.png'
import PropsFeed from '../../props/PropsFeed'
import NavBar from './NavBar'

function PerfilPrestador() {
    return (
        <>
        <NavBar />
        <section className="perfiltudo">
            <img className="curva" src={CurvaLaranja} alt="Laranja" />

            <div className="secao1">
                <img className="Perfil" src={fotoperfil} alt="FotoPerfil" />
                <div className="QuemSou">
                    <div className="Nome">
                        <h1>Lorena Silva</h1>
                    </div>
                    <div className="Desde">
                        <p>Desde 20/10/2023</p>
                        <div className='Estrelas'>
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                            <img className="Estrela" src={Estrela} alt="Estrela" />
                        </div>
                    </div>

                    <div className="Texto">
                        <p>Sou a Lorena Silva, presto serviços de manutenção a alguns anos, tenho experiência na área de pequenos reparos.</p>
                    </div>
                </div>

                <div className="algo">
                <img className="Selo" src={Selo} alt="Selo Premium" />
                <img className="Reputacao" src={Reputacao} alt="Reputação" />
                
                </div>
            </div>

            <div className="Secao2">

            <div className="SecaoLateral">

                <div className="Localização">
                    <h1>Localização</h1>
                    <img className="local" src={local} alt="local" />
                    <p>Jardim d'abril, Osasco-SP</p>
                </div>

                <div className="Opiniao">
                    <h1>Opinião dos seus clientes</h1>
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
                        <p>Um trabalho bem feito.</p>

                        <h1>Ruim</h1>
                        <p>Poderia ter feito melhor.</p>

                        <h1>Bom</h1>
                        <p>Um excelente trabalho, gostei muito, parabéns.</p>

                        <h2>Ver mais +</h2>
                    </div>
                </div>

                <div className="Preferencias">
                    <h1>Experiências e Preferências</h1>
                    <p>Conserto de Máquinas de Lavar</p>
                    <p>Conserto de geladeira </p>
                    <h2>Ver mais +</h2>
                </div>

            </div>

            <div className="Feed">
            <PropsFeed 
            titulo='Reparo feito em 05/12/2023'
            Descr='Troca de lâmpada com descarte ecológico '
            imagem={Feed1}
            />
            <hr />

            <PropsFeed 
            titulo='Reparo feito em 25/11/2023'
            Descr='Conserto de uma máquina de lavar'
            imagem={Feed2}
            />
            <hr />

            </div>
            </div>
        </section>
        </>
    );
};

export default PerfilPrestador;
