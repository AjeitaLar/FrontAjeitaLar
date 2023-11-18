import './PropsCSS/PropsServicos.css'

function PropsServicos({ imagem, publi, nome, titulo, Descr, }) {
    return (

        <div className="caixa3">

            <div className='Comeco'>
                <img className="ImagemS" src={imagem} alt='imagem' />
                <h1 className="NomeS">{nome}</h1>
                <h2 className="tituloS">{titulo}</h2>
                <h3 className="DescrS">{Descr}</h3>
            </div>
            <img className="PubliS" src={publi} alt='imagem' />

        </div>

    )
}

export default PropsServicos