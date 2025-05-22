import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";
import BtnEscuro from "./botaoEscuro";
import logo from "../assets/logoSeculoChamas.png";

function Header(props) {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto((prev) => !prev);
    };

    useEffect(() => {
        const handleClickFora = (event) => {
            const isMenu = event.target.closest(".menu");
            const isIcon = event.target.closest(".menu-icon");

            if (!isMenu && !isIcon) {
                setMenuAberto(false);
            }
        };

        document.addEventListener("mousedown", handleClickFora);
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    return (
        <>
            <header className="headerBox">
                <img className="Logo" src={logo} alt="Logo" />
                <h1><Link to="/">{props.titulo}</Link></h1>
                <i
                    className="bx bx-menu menu-icon"
                    onClick={toggleMenu}
                ></i>
            </header>

            {menuAberto && (
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/canudos">Guerra de Canudos</Link></li>
                        <li><Link to="/contestado">Guerra do Contestado</Link></li>
                        <li><Link to="/primeira-guerra">Primeira Guerra Mundial</Link></li>
                        <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
                        <li><Link to="/fascismo">Fascismo Italiano</Link></li>
                        <li><Link to="/crise-29">Crise de 1929</Link></li>
                        <li><Link to="/revolucao-1930">Revolução de 1930</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                        <li><Link to="/producaoautoral">Produção Autoral - Crise de 1929</Link></li>
                        <BtnEscuro />
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header;
