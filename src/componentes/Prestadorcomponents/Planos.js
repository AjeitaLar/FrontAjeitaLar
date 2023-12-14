import NavBar from "./NavBar"
import "../Prestadorcomponents/css/planos.css";

function Planos() {
        return (
            <>
                <NavBar />
                
                <div className="caixonap">

                    <h1 className="planotitulo">Planos</h1>

                    <div className="planos">

                        <div className="planoG">

                            <h1>Basic</h1>

                            <div className="plano">
                               <h2> Grátis </h2>
                            </div>

                            <div className="planov">
                                
                                <li>Sem custo, com funcionalidades básicas</li>
                                <li>Registro gratuito para prestadores de serviços</li>
                                <li>Acesso a recursos essenciais</li>


                            </div>

                            <div className="planob">
                                <h2>Adquirido</h2>
                            </div>
                        </div>
                        <div className="planoG">

                            <h1>Premiun</h1>

                            <div className="plano">
                               <h2> Mensal </h2>
                            </div>

                            <div className="planov">
                                
                                <li>Cursos Excluidos</li>
                                <li>Descontos Exclusivos em parceiros</li>
                                <li>Chat Bot Avançado</li>


                            </div>

                            <div className="planob">
                                <h2>Adquire</h2>
                            </div>
                        </div>
                        <div className="planoG">

                            <h1>Premiun</h1>

                            <div className="plano">
                               <h2> Anual </h2>
                            </div>

                            <div className="planov">
                                
                                <li>Sem custo, com funcionalidades básicas</li>
                                <li>Registro gratuito para prestadores de serviços</li>
                                <li>Chat Bot Avançado</li>


                            </div>

                            <div className="planob">
                                <h2>Adquire</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

export default Planos