import './css/PerfilCliente.css';
import CurvaAzul from "../imgs/curvaazul.png"
import FotoperfilCli from "../imgs/fotoperfilcli.png"
import Estrela from "../imgs/Star.png"
import Lateral from "../ClientComponents/Compesqueda/EsquedaComp"

function PerfilCliente() {
    return (
        <section className="client">
            <img className="curvazul" src={CurvaAzul} alt="Azul" />

            <div className="secper">
                <img className="perfilcli" src={FotoperfilCli} alt="FotoDePerfilCliente" />

                <div className="infocli">
                    <div className="info">
                        <div className="nome">
                            <h1>Teodoro Souza</h1>
                        </div>

                        <div className="data">
                            <p>Desde 20/10/2023</p>
                            <div className='Stars'>
                                <img className="Estrela" src={Estrela} alt="Estrela" />
                                <img className="Estrela" src={Estrela} alt="Estrela" />
                                <img className="Estrela" src={Estrela} alt="Estrela" />
                                <img className="Estrela" src={Estrela} alt="Estrela" />
                            </div>
                        </div>
                    </div>
                    <div className="aval">
                        em desenvolvimento
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PerfilCliente;
