import Cliente from './pages/ClientePages/cliente';
import IndexCliente from './pages/indexcliente';
import IndexPresta from './pages/indexpresta';
import Prestador from './pages/Prestador';
import './App.css';

function App() {
  return (
    <div className="App">
      <Prestador/>
      <Cliente/>
      <IndexCliente/>
      <IndexPresta/>
      
    </div>
  );
}

export default App;
