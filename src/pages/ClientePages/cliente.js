import Style from './CSS/PerfilPage.module.css'
import NavbarComponent from '../../componentes/imgs/ClientComponents/Navbar/NavBar';

function Cliente() {
  return (
      <div>
        <div className={Style.backgroundContainer}>
          <NavbarComponent/>

        </div>
      </div>
  );
}

export default Cliente;
