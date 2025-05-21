

// function Header(props) {
//   const [temaEscuro, setTemaEscuro] = useState(() => {
//     return localStorage.getItem('temaEscuro') === 'true';
//   });

//   const [menuAberto, setMenuAberto] = useState(false);
//   const menuRef = useRef(null);
//   const botaoMenuRef = useRef(null);

//   useEffect(() => {
//     document.body.style.backgroundColor = temaEscuro ? '#000' : '#fff';
//     document.body.style.color = temaEscuro ? '#fff' : '#000';
//     localStorage.setItem('temaEscuro', temaEscuro);
//   }, [temaEscuro]);

//   // Fecha o menu ao clicar fora dele
//   useEffect(() => {
//     const handleClickFora = (event) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         botaoMenuRef.current &&
//         !botaoMenuRef.current.contains(event.target)
//       ) {
//         setMenuAberto(false);
//       }
//     };

//     if (menuAberto) {
//       document.addEventListener("mousedown", handleClickFora);
//     } else {
//       document.removeEventListener("mousedown", handleClickFora);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickFora);
//     };
//   }, [menuAberto]);

//   const alternarTema = () => {
//     setTemaEscuro((prev) => !prev);
//   };

//   const alternarMenu = () => {
//     setMenuAberto((prev) => !prev);
//   };

//   return (
//     <>
//       <header className="headerBox">
//         <img className="Logo" src={logo} alt="Logo" />

//         <center>
//           <h1><Link to='/'>{props.titulo}</Link></h1>
//         </center>

//         {/* Botão de menu */}
//         <i
//           className="bx bx-menu"
//           onClick={alternarMenu}
//           ref={botaoMenuRef}
//         ></i>
//       </header>

//       {menuAberto && (
//         <nav className="menu" ref={menuRef}>
//           <button onClick={alternarTema} className="botao-tema">
//             {temaEscuro ? '☀️ Claro' : '🌙 Escuro'}
//           </button>
//           <ul>
//             <li><Link to="/canudos">Guerra de Canudos</Link></li>
//             <li><Link to="/contestado">Guerra do Contestado</Link></li>
//             <li><Link to="/primeira-guerra">Primeira Guerra Mundial</Link></li>
//             <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
//             <li><Link to="/fascismo">Fascismo Italiano</Link></li>
//             <li><Link to="/crise-29">Crise de 1929</Link></li>
//             <li><Link to="/revolucao-1930">Revolução de 1930</Link></li>
//             <li></li>
//             <li><Link to="/ranking">Ranking </Link></li>

//           </ul>
//         </nav>
//       )}
//     </>
//   );
// }

// export default Header;
import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import "./header.css";

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
                   {/* <img className="Logo" src={logo} alt="Logo" />  */}
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
             <li></li>
             <li><Link to="/ranking">Ranking </Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header;
