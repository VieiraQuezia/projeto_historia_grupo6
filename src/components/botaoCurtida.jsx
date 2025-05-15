import { useEffect, useState } from "react";
import "./botaoCurtida.css";
import "../pages/zpages.css";

const BotaoCurtida = () => {
  const [curtida, setCurtida] = useState(() => {
    // Recupera o estado inicial do localStorage
    return localStorage.getItem("curtida") || null;
  });

  useEffect(() => {
    // Salva o estado no localStorage sempre que ele mudar
    if (curtida) {
      localStorage.setItem("curtida", curtida);
    }
  }, [curtida]);

  const handleGostei = () => {
    setCurtida("gostei");
  };

  const handleNaoGostei = () => {
    setCurtida("naoGostei");
  };

  return (
    <div>
      <button
        onClick={handleGostei}
        className={curtida === "gostei" ? "gostei-ativo" : "desativado"}
      >
        <i class="fa-solid fa-thumbs-up"></i>
      </button>
      <button
        onClick={handleNaoGostei}
        className={curtida === "naoGostei" ? "naoGostei-ativo" : "desativado"}
      >
        <i class="fa-solid fa-thumbs-down"></i>
      </button>
    </div>
  );
};

export default BotaoCurtida;
