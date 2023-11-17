import Style from './CSS/PerfilPage.module.css'
//COMPONENTES
import NavbarComponent from '../../componentes/ClientComponents/Navbar/NavBar';
import PerfilComponent from '../../componentes/ClientComponents/PerfilComp/PerfilComponet';
import EsquerdaComp from '../../componentes/ClientComponents/Compesqueda/EsquedaComp';
import Feedcomponent from '../../componentes/ClientComponents/feedComponente/feedcomp';

function Cliente() {
  return (
    <div>
      <div className={Style.body}>

        <div className={Style.backgroundContainer}>
          <NavbarComponent />
          <PerfilComponent />
          <div className={Style.posit}>
            <EsquerdaComp />
            <Feedcomponent />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cliente;
