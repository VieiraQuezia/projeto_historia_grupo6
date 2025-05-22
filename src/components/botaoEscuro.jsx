import { useState, useEffect } from 'react';
import "./botaoEscuro.css";

const MudarTema = () => {
  const temaSalvo = localStorage.getItem('tema');
  const [tema, setTema] = useState(temaSalvo || 'light');

  useEffect(() => {
    localStorage.setItem('tema', tema);
    document.documentElement.setAttribute('data-theme', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema(prevTema => (prevTema === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button className="botao-tema" onClick={alternarTema}>
        {tema === 'light' ? <i className='bx bxs-moon'></i> : <i className='bx bxs-sun'></i>}
      </button>
    </div>
  );
};

export default MudarTema;