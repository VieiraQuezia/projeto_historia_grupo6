
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import "./header.css";

import BtnEscuro from "./botaoEscuro";

import logo from "../assets/logoSeculoChamas.png"; // Importe a imagem do logo

function Header(props) {
   

    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);
    const iconRef = useRef(null);

  

    // Fecha o menu se clicar fora
    useEffect(() => {
        const handleClickFora = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                iconRef.current &&
                !iconRef.current.contains(event.target)
            ) {
                setMenuAberto(false);
            }
        };

        document.addEventListener("mousedown", handleClickFora);
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    const toggleMenu = () => {
        setMenuAberto((prev) => !prev);
    };

    return (
        <>
            <header className="headerBox">
                   <img className="Logo" src={logo} alt="Logo" /> 
<h1><Link to='/'>{props.titulo}</Link></h1>              
  <i
                    ref={iconRef}
                    onClick={toggleMenu}
                    className="bx bx-menu"
                ></i>
            </header>

            {menuAberto && (
                <nav className="menu" ref={menuRef}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/canudos">Guerra de Canudos</Link></li>
             <li><Link to="/contestado">Guerra do Contestado</Link></li>
             <li><Link to="/primeira-guerra">Primeira Guerra Mundial</Link></li>
             <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
             <li><Link to="/fascismo">Fascismo Italiano</Link></li>
             <li><Link to="/crise-29">Crise de 1929</Link></li>
             <li><Link to="/revolucao-1930">Revolução de 1930</Link></li>
             <li><Link to="/ranking">Ranking </Link></li>
                                     <li><Link to='/producaoautoral'>Produção Autoral - Crise de 1929</Link></li>

                    </ul>

                    <BtnEscuro />
                </nav>
            )}
        </>
    );
}

export default Header;
