import { useState, useEffect } from "react";

const BtnCurtida = ({ id }) => {
  const CHAVE_LOCAL = "curtidasTotais";
  const [curtidas, setCurtidas] = useState(0);

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || {};
    setCurtidas(dadosSalvos[id] || 0);
  }, [id]);

  const handleCurtir = () => {
    const dadosSalvos = JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || {};
    const novasCurtidas = (dadosSalvos[id] || 0) + 1;

    const atualizado = {
      ...dadosSalvos,
      [id]: novasCurtidas,
    };

    localStorage.setItem(CHAVE_LOCAL, JSON.stringify(atualizado));
    setCurtidas(novasCurtidas);
  };

  return (
    <div style={{
      margin: "20px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      <button
        onClick={handleCurtir}
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background 0.3s"
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#1565c0"}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1976d2"}
      >
        👍 Curtir
      </button>
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        {curtidas} curtidas
      </span>
    </div>
  );
};

export default BtnCurtida;
