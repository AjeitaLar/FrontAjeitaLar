import Style from './CSS/PerfilPage.module.css'
import NavbarComponent from '../../componentes/imgs/ClientComponents/Navbar/NavBar';
import PerfilComponent from '../../componentes/imgs/ClientComponents/PerfilComp/PerfilComponet';

function Cliente() {
  return (
    <div>
      <div className={Style.body}>

        <div className={Style.backgroundContainer}>
          <NavbarComponent />
          <PerfilComponent />

        </div>
      </div>
    </div>
  );
}

export default Cliente;
