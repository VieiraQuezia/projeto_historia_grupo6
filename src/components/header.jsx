import logo from "/logoSeculoChamas.png";
import menu from "/menuSemFundo.png";
import "./header.css";

function Header(props) {
  return (
    <header>
      <img className="Logo" src={logo} alt="Logo" />

      
      <h1>{props.titulo}</h1>

      <img className="Menu" src={menu} alt="Menu"/>

    </header>
  );
}

export default Header;