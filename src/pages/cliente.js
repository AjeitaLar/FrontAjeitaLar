//COMPONENTES
import Feedcli from "../componentes/ClientComponents/FeedClient";
import PerfilCliente from "../componentes/ClientComponents/PerfilCliente";
import NavBarCli from "../componentes/ClientComponents/NavbarClie";

function Cliente() {
  return (
      <>
          <Feedcli></Feedcli>
          <PerfilCliente></PerfilCliente>
      </>
  );
}

export default Cliente;