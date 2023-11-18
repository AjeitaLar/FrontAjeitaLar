import Cliente from './pages/cliente';
import IndexCliente from './pages/indexcliente';
import IndexPresta from './pages/indexpresta';
import Prestador from './pages/prestador';
import './App.css';

function App() {
  return (
    <div className="App">
      <Prestador/>
      <IndexCliente/>
      <IndexPresta/>
      <Cliente/>
      
    </div>
  );
}

export default App;
