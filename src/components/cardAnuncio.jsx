import React, { useState, useEffect } from "react";

import Img1 from "../assets/anuncio/anuncio1.avif";
import Img2 from "../assets/anuncio/anuncio2.webp";
import Img3 from "../assets/anuncio/anuncio3.avif";
import Img4 from "../assets/anuncio/anuncio4.jpg";



import "./cardAnuncio.css";

const CardComNav = () => {
  const imagens = [Img1, Img2, Img3, Img4];
  const [index, setIndex] = useState(0);



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);




  return (
    <>
      {/* Navegação lateral */}


      <nav className="side-nav">

        <img
          src={imagens[index]}
          alt={`Imagem de estudo ${index + 1}`}
          className="carousel-img"
        />
        <img
          src={imagens[index]}
          alt={`Imagem de estudo ${index + 1}`}
          className="carousel-img"
        />

      </nav>
</>
  );
};

export default CardComNav;












