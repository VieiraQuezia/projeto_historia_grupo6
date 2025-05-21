import { useState, useEffect } from "react";
import "./botaoEscuro.css";

function BotaoEscuro() {
  const [escuro, setEscuro] = useState(() =>  {
            const temaSalvo = localStorage.getItem('temaEscuro') || false; // Pega o valor do localStorage ou define como 'false' se não existir
            return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
  }
  );




  useEffect(() => {
   const elementos = document.querySelectorAll(".cards, .container, .main-nav, .botao-Escuro");
    if (escuro) {
      elementos.forEach((elemento) => {
        elemento.classList.add("modo-escuro");
      });
      localStorage.setItem("temaEscuro", true);
    } else {
      elementos.forEach((elemento) => {
        elemento.classList.remove("modo-escuro");
      });
      localStorage.setItem("temaEscuro", false);
    }
  }, [escuro]);

  return (
    <>
      <button onClick={() => setEscuro(!escuro)} className="botao-Escuro">
        {escuro ? "Modo Claro" : "Modo Escuro"}
      </button>
    </>
  );
}

export default BotaoEscuro;

