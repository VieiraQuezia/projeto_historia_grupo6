import { useEffect, useState } from "react";
import "./zpages.css"

import NavAnuncio from "../components/cardAnuncio";
import Header from "../components/header";
import Footer from "../components/footer";

const nomesPaginas = {
  "canudos": "Guerra de Canudos",
  "contestado": "Guerra do Contestado",
  "primeira-guerra": "Primeira Guerra Mundial",
  "revolucao-russa": "Revolução Russa",
  "fascismo": "Fascismo Italiano",
  "crise-29": "Crise de 1929",
  "revolucao-1930": "Revolução de 1930"
};

const ResumoCurtidas = () => {
  const [dadosCurtidas, setDadosCurtidas] = useState({});

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("curtidas")) || {};
    setDadosCurtidas(dados);
  }, []);

  return (
    <>
    <Header titulo="Ranking" />
    
    <div className="resumo-curtidas">
      <h2>Resumo de Curtidas por Página</h2>
      <ul>
        {Object.entries(nomesPaginas).map(([id, titulo]) => {
          const curtidas = dadosCurtidas[id]?.total || 0;
          return (
            <li key={id}>
              <strong>{titulo}:</strong> {curtidas} curtida{curtidas !== 1 ? "s" : ""}
            </li>
          );
        })}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default ResumoCurtidas;
