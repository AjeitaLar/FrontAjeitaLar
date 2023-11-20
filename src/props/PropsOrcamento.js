import './PropsCSS/PropsOrcamento.css'

function PropsOrcamento({ img, title, subtitle, mensa, btn1, btn2, btn3 }) {
    return (
        <div className="cx">
            <img src={img} alt="Imagem" className="imgP" />
            <div className="posi">
                <h2 className="title">{title}</h2>
                <h3 className="mensa">{mensa}</h3>
            </div>
            <div className="posi2">
                <button className="btn1">{btn1}</button>
                <button className="btn2">{btn2}</button>
                <button className="btn3">{btn3}</button>
            </div>

        </div>
    )
}

export default PropsOrcamento