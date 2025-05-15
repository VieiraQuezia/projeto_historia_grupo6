import { useEffect, useState } from "react";
import './botaoEscuro.css'
import '../pages/zpages.css'

// function App() {
//     const [temaEscuro, setTemaEscuro] = useState(() => {
//         // Verifica o localStorage para definir o tema inicial
//         const temaSalvo = localStorage.getItem('temaEscuro');
//         return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
//     });

//     useEffect(() => {
//         // Atualiza o estilo do corpo com base no tema
//         document.body.style.backgroundColor = temaEscuro ? '#E7D7C1' : '#A78A7F';


//         // Armazena a preferência no localStorage
//         localStorage.setItem('temaEscuro', temaEscuro);

//     }, [temaEscuro]);

//     return (
//         <>
//             <button className="botaoCor" onClick={() => setTemaEscuro(!temaEscuro)}>
//                 {temaEscuro ? 'Modo Claro' : 'Modo Escuro'}
//             </button>
//         </>
//     );
// }

// export default App;

function Modos() {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        // Verifica o localStorage para definir o tema inicial
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    })
    useEffect(() => {
        const bloco1 = document.getElementById('propaganda');
        const bloco2 = document.getElementById('blocoTexto');

        if (bloco1 && bloco2) {
            const corBloco = temaEscuro ? '#A78A7F' : '#735751';
            bloco1.style.backgroundColor = corBloco;
            bloco2.style.backgroundColor = corBloco;
        }
        document.body.style.backgroundColor = temaEscuro ? '#E7D7C1' : '#A78A7F';
        // Armazena a preferência no localStorage   
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);
return (
    <>
        <button className="botaoCor" onClick={() => setTemaEscuro(!temaEscuro)}>
            {temaEscuro ? 'Modo Claro' : 'Modo Escuro'}
        </button>
    </>
);
}

export default Modos;

