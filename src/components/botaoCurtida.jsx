import { useState, useEffect } from "react";
import "./botaoCurtida.css";

const BtnCurtida = ({ id }) => {
  const CHAVE_LOCAL = "avaliacoesTotais";
  const [curtidas, setCurtidas] = useState(0);
  const [naoCurtidas, setNaoCurtidas] = useState(0);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || {};
    setCurtidas(dadosSalvos[id]?.curtidas || 0);
    setNaoCurtidas(dadosSalvos[id]?.naoCurtidas || 0);
  }, [id]);

  const atualizarStorage = (novasCurtidas, novasNaoCurtidas) => {
    const dadosSalvos = JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || {};
    dadosSalvos[id] = {
      curtidas: novasCurtidas,
      naoCurtidas: novasNaoCurtidas,
    };
    localStorage.setItem(CHAVE_LOCAL, JSON.stringify(dadosSalvos));
  };

  const handleCurtir = () => {
    const novasCurtidas = curtidas + 1;
    setCurtidas(novasCurtidas);
    atualizarStorage(novasCurtidas, naoCurtidas);
  };

  const handleNaoCurtir = () => {
    const novasNaoCurtidas = naoCurtidas + 1;
    setNaoCurtidas(novasNaoCurtidas);
    atualizarStorage(curtidas, novasNaoCurtidas);
  };

  return (



    <div className="btn-curtida-container">
      <button className="btn-curtir" onClick={handleCurtir}>
        👍
      </button>
      <span className="btn-curtida-contador">{curtidas}</span>

      <button className="btn-nao-curtir" onClick={handleNaoCurtir}>
        👎
      </button>
      <span className="btn-curtida-contador">{naoCurtidas}</span>
    </div>



  );
};

export default BtnCurtida;
