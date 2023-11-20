//COMPONENTES
import Feedcli from "../componentes/ClientComponents/FeedClient";
import PerfilCliente from "../componentes/ClientComponents/PerfilCliente";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarCli from "../componentes/ClientComponents/NavbarClie";

function Cliente() {
  return (
    <>
           

              <NavBarCli/>

                <Routes>

                    <Route exact path='/' element={<PerfilCliente />} />
                    <Route exact path='Feedcli' element={<Feedcli />} />

                </Routes>

            
        </>
  );
}

export default Cliente;