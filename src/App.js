import Cliente from './pages/ClientePages/cliente';
import IndexCliente from './pages/indexcliente';
import IndexPresta from './pages/indexpresta';
import Prestador from './pages/prestador'
import './App.css';

function App() {
  return (
    <div className="App">
      <Cliente/>
      <IndexCliente/>
      <IndexPresta/>
      <Prestador/>
    </div>
  );
}

export default App;
