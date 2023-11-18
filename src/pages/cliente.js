import NavBarCli from '../componentes/ClientComponents/NavBarClient'
import PerfilCliente from "../componentes/ClientComponents/PerfilCliente";
import FeedClient from "../componentes/ClientComponents/FeedClient";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Cliente() {
  return (
    <div>
      <NavBarCli/>
      <PerfilCliente/>
      
 
    </div>
  );
}

export default Cliente;
