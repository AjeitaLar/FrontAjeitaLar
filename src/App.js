import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerfilPrestador from './componentes/Prestadorcomponents/PerfilPrestador';
import PerfilCliente from './componentes/ClientComponents/PerfilCliente';
import Feedcli  from './componentes/ClientComponents/FeedClient';
import Servicos from './componentes/Prestadorcomponents/Servicos';
import Index from './componentes/ComponentesIndex/Main'
import MainCliente from './componentes/ComponentesIndex/MainCliente';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='PerCliente' element={<PerfilCliente />} />
          <Route exact path='Feedcli' element={<Feedcli />} />
          <Route exact path='PerfilPrestador' element={<PerfilPrestador />} />
          <Route exact path='/' element={<Index />} />
          <Route exact path='MainCliente' element={<MainCliente />}></Route>
          <Route exact path='Servicos' element={<Servicos />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
