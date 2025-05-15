import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"; // seu CSS aqui
import botaomenu from "/botaomenu.png";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto((aberto) => !aberto);
    console.log("Clicou no botão de menu");
  };
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <img src={botaomenu} alt="" onClick={alternarMenu}></img>

      {menuAberto && (
        <nav className="menu-opcoes" onClick={fecharMenu}>
          <ul>
            <li>
              <Link to="/crise29">Crise de 1929</Link>
            </li>
            <li>
              <Link to="/fascismoitaliano">Fascismo Italiano</Link>
            </li>
            <li>
              <Link to="/guerraCanudos">Guerra de Canudos</Link>
            </li>
            <li>
              <Link to="/guerraContestado">Guerra de Contestado</Link>
            </li>
            <li>
              <Link to="/primeiraGuerra">Primeira Guerra Mundial</Link>
            </li>
            <li>
              <Link to="/producaoAutoral">
                Produção Autoral (Crise de 1929)
              </Link>
            </li>
            <li>
              <Link to="/revolucao30">Revolução de 1930</Link>
            </li>
            <li>
              <Link to="/revolucaoRussa">Revolução Russa</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar;
