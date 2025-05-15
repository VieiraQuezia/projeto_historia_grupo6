import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "/logoSeculoChamas.png";
import "./header.css";

function Header(props) {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true';
    });

    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = temaEscuro ? '#000' : '#fff';
        document.body.style.color = temaEscuro ? '#fff' : '#000';
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);

    const alternarTema = () => {
        setTemaEscuro(prev => !prev);
    };

    const MouseEnter = () => setMenuAberto(true);
    const MouseLeave = () => setMenuAberto(false);

    return (
        <>
            <header className="headerBox">
                <img className="Logo" src={logo} alt="Logo" />

                <center>
                    <h1><Link to='/'>{props.titulo}</Link></h1>
                </center>

                {/* Ícone do menu */}
                <i
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}
                    className="bx bx-menu"
                ></i>

              
            </header>

            {menuAberto && (
                <nav className="menu" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                      {/* Botão de alternar tema */}
                <button onClick={alternarTema} className="botao-tema">
                    {temaEscuro ? '☀️ Claro' : '🌙 Escuro'}
                </button>
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
