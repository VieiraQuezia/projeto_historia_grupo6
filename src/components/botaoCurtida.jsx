import { useEffect, useState } from "react";
import "./botaoCurtida.css";

const BotaoCurtida = ({ id }) => {
  const [curtida, setCurtida] = useState(null);
  const [total, setTotal] = useState(0);

  // Ao carregar, busca curtidas do localStorage
  useEffect(() => {
    if (!id) return; // Evita erros caso id não seja passado

    const armazenado = localStorage.getItem("curtidas");
    const dadosCurtidas = armazenado ? JSON.parse(armazenado) : {};

    if (dadosCurtidas[id]) {
      setCurtida(dadosCurtidas[id].curtida || null);
      setTotal(dadosCurtidas[id].total || 0);
    }
  }, [id]);

  // Sempre que curtida ou total mudar, salva no localStorage
  useEffect(() => {
    if (!id) return;

    const armazenado = localStorage.getItem("curtidas");
    const dadosCurtidas = armazenado ? JSON.parse(armazenado) : {};

    dadosCurtidas[id] = { curtida, total };
    localStorage.setItem("curtidas", JSON.stringify(dadosCurtidas));
  }, [curtida, total, id]);

  const handleGostei = () => {
    if (curtida === "gostei") {
      setCurtida(null);
      setTotal((prev) => Math.max(prev - 1, 0));
    } else {
      if (curtida === "naoGostei") {
        // vindo do "não gostei" → troca
        setTotal((prev) => prev + 1);
      } else {
        setTotal((prev) => prev + 1);
      }
      setCurtida("gostei");
    }
  };

  const handleNaoGostei = () => {
    if (curtida === "naoGostei") {
      setCurtida(null);
    } else {
      if (curtida === "gostei") {
        setTotal((prev) => Math.max(prev - 1, 0));
      }
      setCurtida("naoGostei");
    }
  };

  return (
    <div className="botoes-curtida">
      <button
        onClick={handleGostei}
        className={curtida === "gostei" ? "gostei-ativo" : "desativado"}
        title="Gostei"
      >
        <i className="fa-solid fa-thumbs-up"></i>
      </button>

      <button
        onClick={handleNaoGostei}
        className={curtida === "naoGostei" ? "naoGostei-ativo" : "desativado"}
        title="Não gostei"
      >
        <i className="fa-solid fa-thumbs-down"></i>
      </button>

      <span className="contador-curtidas">{total || 0} curtidas</span>
    </div>
  );
};

export default BotaoCurtida;
