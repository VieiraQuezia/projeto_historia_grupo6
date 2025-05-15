import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "/logoSeculoChamas.png";
import menu from "/menuSemFundo.png";
import "./header.css";

function Header(props) {

       const [temaEscuro, setTemaEscuro] = useState(() => {
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    });

    const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar a visibilidade do menu

    useEffect(() => {
        // Atualiza o estilo do corpo com base no tema
        document.body.style.backgroundColor = temaEscuro ? 'black' : 'white';

        // Armazena a preferência no localStorage
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);

    const MouseEnter = () => {
        setMenuAberto(true); // Abre o menu ao passar o mouse
    };

    const MouseLeave = () => {
        setMenuAberto(false); // Fecha o menu ao sair com o mouse
    };


  return (
    <>
    <header>
      <img className="Logo" src={logo} alt="Logo" />
      <center>
      <h1>{props.titulo}</h1>
</center>

                    <i onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className='bx bx-menu'></i>
            </header>
            
            {menuAberto && (
                <nav className="menu" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                   
                   <ul>
                    <li><Link to="/canudos">Guerra de Canudos</Link></li>
                    <li><Link to="/contestado">Guerra do Contestado</Link></li>
                    <li><Link to="/primeira-guerra">Primeira Guerra Mundial</Link></li>
                    <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
                    <li><Link to="/fascismo">Fascismo Italiano</Link></li>
                    <li><Link to="/crise-29">Crise de 1929</Link></li>
                    <li><Link to="/revolucao-1930">Revolução de 1930</Link></li>
                </ul>

                </nav>
            )}
            </>
  );
}

export default Header;