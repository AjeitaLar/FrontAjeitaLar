import './css/Artigos.css'
import NavBar from './NavBar'
import CircEco from '../imgs/Group 12.png'
import Curso from '../imgs/Cursos1.png'
import Mala from '../imgs/Maleta.png'
import Userchat from '../imgs/Userchat.png'
import Jornal from '../imgs/Jornal.png'
import UserFlecha from '../imgs/UserFlecha.png'
import Not1 from '../imgs/not1.jpg'
import Not2 from '../imgs/not2.jpg'
import Not3 from '../imgs/not3.jpg'
import Not4 from '../imgs/not4.jpg'
import Not5 from '../imgs/not5.jpg'
import Not6 from '../imgs/not6.jpg'


function Artigos() {
    return (

        <section className='Artigos'>

            <NavBar />

            <section className='Curso'>

                <img src={Curso} alt='Imagem Curso' className='ImgCurso' />
                <div className='TextCurso'>
                    <h1>Quer se tornar um Profissional ?</h1>
                    <p>Transforme sua paixão por serviços domésticos em uma carreira de sucesso ao se profissionalizar com a AjeitaLar</p>
                </div>
            </section>

            <section className='tags'>

                <div className='Mei'>
                    <img src={UserFlecha} alt='User com Flecha' className='UserFlecha' />
                    <h1>Por que MEI?</h1>
                </div>

                <div className='Cnpj'>
                    <img src={Jornal} alt='Jornal' className='Jornal' />
                    <h1>CNPJ, meu amigo ou inimigo?</h1>
                </div>

                <div className='Como'>
                    <img src={Userchat} alt='User com Chat' className='Userchat' />
                    <h1>Como se Profissionalizar</h1>
                </div>

                <div className='ArteNegocios'>
                    <img src={Mala} alt='Mala' className='Mala' />
                    <h1>Arte dos negocios</h1>
                </div>

            </section>

            <div className='NoticiaText'>
            <h1>Notícias do trabalhador</h1>
            </div>

            <section className='Noticias'>

                <div className='Not1'>
                    <img src={Not1} alt='Noticia 1' className='Noticia1' />
                    <h2>AUTÔNOMOS</h2>
                    <h1>Desemprego é o que mais motiva trabalho autônomo no Brasil, mostra pesquisa</h1>
                </div>

                <div className='Not2'>
                    <img src={Not2} alt='Noticia 2' className='Noticia2' />
                    <h2>AUTÔNOMOS E CLIENTES</h2>
                    <h1>Relação cliente e prestador: entenda a sua importância para o seu negócio!</h1>
                </div>

                <div className='Not3'>
                    <img src={Not3} alt='Noticia 3' className='Noticia3' />
                    <h2>AUTÔNOMOS</h2>
                    <h1>Trabalhador Autônomo – é reconhecido como relação trabalhista? Impactos e direitos</h1>
                </div>
            </section>

            <section className='Eco1'>

                <img src={CircEco} alt='Imagem ecologica' className='ImgCircEco1' />
                <div className='TextEco1'>
                    <h1>DESCARTE</h1>
                    <p>Nossa plataforma visa a conscientização do descarte ecológico dos resíduos que podem ser gerados nos reparos.  </p>
                </div>
            </section>

            <section className='Noticias'>

                <div className='Not1'>
                    <img src={Not4} alt='Noticia 1' className='Noticia1' />
                    <h2>MEIO AMBIENTE</h2>
                    <h1>Ação para descarte correto de lixo seletivo é neste sábado, em Farroupilha</h1>
                </div>

                <div className='Not2'>
                    <img src={Not5} alt='Noticia 2' className='Noticia2' />
                    <h2>CONSCIENTIZAÇÃO</h2>
                    <h1>Campanha do DAAE destaca descarte correto de resíduos cortantes</h1>
                </div>

                <div className='Not3'>
                    <img src={Not6} alt='Noticia 3' className='Noticia3' />
                    <h2>AUTÔNOMOS</h2>
                    <h1>A importância do descarte consciente</h1>
                </div>
            </section>

        </section>

    )
}

export default Artigos;