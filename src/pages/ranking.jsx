import { useEffect, useRef, useState } from "react"; // Importa hooks do React
import "./zpages.css"; // Importa o CSS do componente
import Header from "../components/header"; // Componente de cabeçalho
import Footer from "../components/footer"; // Componente de rodapé

const ResumoCurtidas = () => {
  // Estado que armazena as avaliações (curtidas/não curtidas) por página
  const [avaliacoesSite, setAvaliacoesSite] = useState({});

  // Estado e referência para controle de botão (não está sendo usado no JSX)
  const [BtnNum, setBtnNum] = useState(false);
  const btnRef = useRef(null);

  // Hook para detectar clique fora do elemento referenciado (não utilizado atualmente)
  useEffect(() => {
    const handleClickFora = (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setBtnNum(false);
      }
    };

    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  // Hook para carregar as avaliações do localStorage na primeira renderização
  useEffect(() => {
    try {
      const item = localStorage.getItem("avaliacoesTotais"); // Busca os dados salvos
      const site = item ? JSON.parse(item) : {}; // Converte de JSON para objeto
      setAvaliacoesSite(site); // Armazena os dados no estado
    } catch (error) {
      console.error("Erro lendo localStorage:", error); // Log de erro, se houver problema
    }
  }, []);

  // Lista fixa de páginas com título e chave correspondente no localStorage
  const paginas = [
    { titulo: "Guerra de Canudos", chave: "Guerra-Canudos" },
    { titulo: "Guerra do Contestado", chave: "Guerra-Contestado" },
    { titulo: "Primeira Guerra Mundial", chave: "Primeira-Guerra-Mundial" },
    { titulo: "Revolucao Russa", chave: "Revolução-Russa" },
    { titulo: "Fascismo Italiano", chave: "Fascismo-Italiano" },
    { titulo: "Crise de 1929", chave: "Crise-de-1929" },
    { titulo: "Revolucao de 1930", chave: "Revolucao-1930" },
  ];

  // Processa as páginas, extrai os dados de curtidas e ordena por número de curtidas (decrescente)
  const paginasOrdenadas = paginas
    .map(({ titulo, chave }) => {
      const dados = avaliacoesSite[chave] || {}; // Obtém os dados da página, ou objeto vazio
      return {
        titulo,
        curtidas: dados.curtidas || 0,
        naoCurtidas: dados.naoCurtidas || 0,
      };
    })
    .sort((a, b) => b.curtidas - a.curtidas); // Ordena por curtidas (maior para menor)

  // Função que formata cada item da lista para exibição
  const formatarLinha = (pagina, index) => (
    <li key={index} className="linha-curtida">
      <strong>{index + 1}º - {pagina.titulo}</strong><br />
      <span style={{ color: "#1976d2" }}>
        👍 {pagina.curtidas} | 👎 {pagina.naoCurtidas}
      </span>
    </li>
  );

  // JSX principal do componente
  return (
    <>
      <Header titulo="Ranking de Curtidas" /> {/* Cabeçalho da página */}
      
      <div className="resumo-curtidas">
        <h2>Ranking de Curtidas</h2>
        <ul>
          {paginasOrdenadas.map(formatarLinha)} {/* Renderiza a lista formatada */}
        </ul>
      </div>

      <Footer /> {/* Rodapé da página */}
    </>
  );
};

export default ResumoCurtidas; // Exporta o componente
