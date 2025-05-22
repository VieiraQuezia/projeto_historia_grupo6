import React, { useState, useEffect } from "react";
import "./wikipedia.css"; // Importa o CSS separado

const CardWikipedia = ({ termoBusca}) => {
  const [dado, setDado] = useState(null);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarDado = async () => {
      try {
        const chave = `wiki-${termoBusca}`;
        const dadoLocal = localStorage.getItem(chave);

        if (dadoLocal) {
          setDado(JSON.parse(dadoLocal));
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(termoBusca)}`
        );
        const resultado = await res.json();
        localStorage.setItem(chave, JSON.stringify(resultado));
        setDado(resultado);
      } catch (erro) {
        setErro("Erro ao buscar dados.");
      } finally {
        setLoading(false);
      }
    };

    buscarDado();
  }, [termoBusca]);

  return (
    <div className="card">
<h1>Pesquisa feita pela API da Wikipedia </h1>
<br />


     
      <div className="card-content">

        {loading && <p>Carregando...</p>}


        {erro && <p className="erro">{erro}</p>}


        {!loading && dado && (
          <div className="api-section">
            <h2>{dado.title}</h2>
            <h3><em>{dado.description}</em></h3>
            {dado.thumbnail && (
              <img
                src={dado.thumbnail.source}
                alt={dado.title}
                className="wiki-img"
              />
            )}
            <p>{dado.extract}</p>
            <a
              href={dado.content_urls.desktop.page}
              target="_blank"
              rel="noreferrer"
              className="wiki-link"
            >
              Ver na Wikipedia
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardWikipedia;
