import PerfilPrestador from '../componentes/Prestadorcomponents/PerfilPrestador';
import NavBar from '../componentes/Prestadorcomponents/NavBar'
import Servicos from '../componentes/Prestadorcomponents/Servicos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Cliente from './ClientePages/cliente';

function Prestador() {
    return (
      <>
            <Router>

                <NavBar />

                <Routes>

                    <Route exact path='/' element={<PerfilPrestador />} />
                    <Route exact path='Cliente' element={<Cliente />} />
                    <Route exact path='Servicos' element={<Servicos />} />

                </Routes>

            </Router>
        </>
    );
}
  
  export default Prestador;
