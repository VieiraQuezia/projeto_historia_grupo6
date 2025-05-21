import { useEffect, useRef, useState } from "react";
import "./zpages.css";
import Header from "../components/header";
import Footer from "../components/footer";



const ResumoCurtidas = () => {
  const [avaliacoesSite, setAvaliacoesSite] = useState({});

    const [BtnNum, setBtnNum] = useState(false);
    const btnRef = useRef(null);

  

    // Fecha o menu se clicar fora
    useEffect(() => {
        const handleClickFora = (event) => {
            if (
                btnRef.current &&
                !btnRef.current.contains(event.target) 
              
            ) {
                setBtnNum(false);
            }
        };

        document.addEventListener("mousedown", handleClickFora);
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
        };
    }, []);

    const toggleBtn = () => {
        setBtnNum((prev) => !prev);
    };






  useEffect(() => {
    try {
      const item = localStorage.getItem("avaliacoesTotais");
      const site = item ? JSON.parse(item) : {};
      setAvaliacoesSite(site);
    } catch (error) {
      console.error("Erro lendo localStorage:", error);
    }
  }, []);

  const paginas = [
    { titulo: "Guerra de Canudos", chave: "Guerra-Canudos" },
    { titulo: "Guerra do Contestado", chave: "Guerra-Contestado" },
    { titulo: "Primeira Guerra Mundial", chave: "Primeira-Guerra-Mundial" },
    { titulo: "Revolucao Russa", chave: "Revolução-Russa" },
    { titulo: "Fascismo Italiano", chave: "Fascismo-Italiano" },
    { titulo: "Crise de 1929", chave: "Crise-de-1929" },
    { titulo: "Revolucao de 1930", chave: "Revolucao-1930" },
  ];

  const paginasOrdenadas = paginas
    .map(({ titulo, chave }) => {
      const dados = avaliacoesSite[chave] || {};
      return {
        titulo,
        curtidas: dados.curtidas || 0,
        naoCurtidas: dados.naoCurtidas || 0,
      };
    })
    .sort((a, b) => b.curtidas - a.curtidas); // ordena do maior para o menor número de curtidas

  const formatarLinha = (pagina, index) => (
    <li key={index} className="linha-curtida">
      <strong>{index + 1}º - {pagina.titulo}</strong><br />
      <span style={{ color: "#1976d2" }}>
        👍 {pagina.curtidas} | 👎 {pagina.naoCurtidas}
      </span>
    </li>
  );

  return (
    <>
      <Header titulo="Ranking de Curtidas" />
               <div className="resumo-curtidas">
                <h2>Nossas Pesquisas</h2>

        <h2>Ranking de Curtidas</h2>
        <ul>
          {paginasOrdenadas.map(formatarLinha)}
        </ul>
      </div>
      <center>
<button onClick={toggleBtn} className="BtnNum">{BtnNum ? ' Fechar o numero de curtidas' : 'Ver Numero de curtidas' }</button>
</center>
                {BtnNum && (
                      <div className="resumo-curtidas">
                <h2>Nossas Pesquisas</h2>

      
      </div>
    )}
  
   

      <Footer />
    </>
  );
};

export default ResumoCurtidas;

