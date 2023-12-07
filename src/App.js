import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PerfilPrestador from './componentes/Prestadorcomponents/PerfilPrestador';
import PerfilCliente from './componentes/ClientComponents/PerfilCliente';
import Feedcli  from './componentes/ClientComponents/FeedClient';
import Servicos from './componentes/Prestadorcomponents/Servicos';
import Index from './componentes/ComponentesIndex/Main'
import MainCliente from './componentes/ComponentesIndex/MainCliente';
import Artigos from './componentes/Prestadorcomponents/Artigos';
import RegistroPrestador from './componentes/Registro_Login/Registro/Registro2';
import LoginPrestador from './componentes/Registro_Login/Login/Login2';
import RegistroCliente from './componentes/Registro_Login/Registro/Registro';
import LoginCliente from './componentes/Registro_Login/Login/Login';
import Planos from './componentes/Prestadorcomponents/Planos';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='PerCliente' element={<PerfilCliente />} />
          <Route exact path='Feedcli' element={<Feedcli />} />
          <Route exact path='PerfilPrestador' element={<PerfilPrestador />} />
          <Route exact path='/' element={<Index />} />
          <Route exact path='MainCliente' element={<MainCliente />} />
          <Route exact path='Servicos' element={<Servicos />} />
          <Route exact path='Artigos' element={<Artigos />} />
          <Route exact path='Planos' element={<Planos />} />


          <Route exact path='RegistroPrestador' element={<RegistroPrestador />} />
          <Route exact path='LoginPrestador' element={<LoginPrestador />} />
          <Route exact path='RegistroCliente' element={<RegistroCliente />} />
          <Route exact path='LoginCliente' element={<LoginCliente />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
