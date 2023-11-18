import './PropsCSS/PropsCandidatura.css'

function PropsCandidatura({ imagem, titulo, Descr, botao }) {
    
    return (

        <div className="caixa2">

            <img className="ImagemC" src={imagem} alt='imagem' />
            <h2 className="tituloC">{titulo}</h2>
            <h3 className="DescrC">{Descr}</h3>
            <button className="BotãoC">{botao}</button>

        </div>

    )
}

export default PropsCandidatura