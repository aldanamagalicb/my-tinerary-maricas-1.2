import BotonHome from "./BotonHome";
import "./navbar.css";
import BotonUsers from "./BotonUsers";

function Navbar() {
  return (
    <nav className="nav">
      <img src="../img/logo-white.png" alt="" width='100px' />
      <div className="nav-boton">
        <BotonHome />
        <BotonUsers />
      </div>
    </nav>
  );
}

export default Navbar;