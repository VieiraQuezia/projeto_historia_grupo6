import { useEffect, useState } from "react";
import "./zpages.css"; // você pode criar estilos semelhantes ao do wireframe

const Ranking = () => {
  const [curtidas, setCurtidas] = useState([]);
  const [naoCurtidas, setNaoCurtidas] = useState([]);

  useEffect(() => {
    const armazenado = localStorage.getItem("curtidas");
    const dados = armazenado ? JSON.parse(armazenado) : {};

    const listaCurtidas = [];
    const listaNaoCurtidas = [];

    for (const id in dados) {
      const nome = formatarNome(id);
      const curtida = dados[id].curtida;
      const total = dados[id].total || 0;

      if (curtida === "gostei") {
        listaCurtidas.push({ nome, total });
      } else if (curtida === "naoGostei") {
        listaNaoCurtidas.push({ nome, total });
      }
    }

    setCurtidas(listaCurtidas.sort((a, b) => b.total - a.total));
    setNaoCurtidas(listaNaoCurtidas.sort((a, b) => b.total - a.total));
  }, []);

  return (
    <div className="ranking-container">
      <h2 className="titulo">Ranking dos Favoritos</h2>
      <div className="colunas">
        <div className="coluna">
          <h3>👍</h3>
          {curtidas.map((item, index) => (
            <div className="linha" key={index}>
              <span>{item.nome}</span>
              <span>👍 {item.total}</span>
            </div>
          ))}
        </div>
        <div className="coluna">
          <h3>👎</h3>
          {naoCurtidas.map((item, index) => (
            <div className="linha" key={index}>
              <span>{item.nome}</span>
              <span>👎 {item.total}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function formatarNome(id) {
  return id
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default Ranking;
