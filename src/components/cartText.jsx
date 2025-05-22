


import "./cardText.css";
import "../pages/zpages.css";
const CardComNav = (props) => {
   

  return (
    <>
    <div className="container">

     

      {/* Card principal */}

      <nav className="main-nav" id={props.id}>
        
          <h2 className="title">{props.titulo}</h2>

        <div className="card">

        <img src={props.img} alt="Imagem fixa" className="static-img" />
          <div className="card-content">

            <p className="card-text">{props.texto}</p>
            <br />
            <p className="card-text">{props.texto2}</p>
            <br />
            <p className="card-text">{props.texto3}</p>

          </div>

        </div>
      </nav>
    </div>
    </>
  );
};

export default CardComNav;