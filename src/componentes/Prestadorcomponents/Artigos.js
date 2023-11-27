import './css/Artigos.css'
import NavBar from './NavBar'
import CircEco from '../imgs/Group 12.png'
import Curso from '../imgs/Cursos.png'

function Artigos(){
    return(

        <section className='Artigos'>

        <NavBar />

        <section className='Curso'>

                <img src={Curso} alt='Imagem Curso' className='ImgCurso' />
                <div className='TextCurso'>
                    <h1>Quer se tornar um Profissional ?</h1>
                    <p>Transforme sua paixão por serviços domésticos em uma carreira de sucesso ao se profissionalizar com a Ajeita Lar</p>
                </div>
            </section>







        <section className='Eco1'>

                <img src={CircEco} alt='Imagem ecologica' className='ImgCircEco1' />
                <div className='TextEco1'>
                    <h1>DESCARTE</h1>
                    <p>Nossa plataforma visa a conscientização do descarte ecológico dos resíduos que podem ser gerados nos reparos.  </p>
                </div>
            </section>
        </section>

    )
}

export default Artigos;