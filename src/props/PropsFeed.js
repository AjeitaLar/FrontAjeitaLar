import './PropsCSS/PropsFeed.css'

function PropsFeed({ imagem, titulo, Descr }) {
    return (

        <div className="Caixa">


                <h2 className="titulo">{titulo}</h2>
                <h3 className="Descr">{Descr}</h3>

            <img className="Imagem" src={imagem} alt='imagem' />

        </div>

    )
}

export default PropsFeed