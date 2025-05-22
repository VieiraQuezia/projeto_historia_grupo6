import "./zpages.css";
//Import das imagens
//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";
import BtnCurtida from "../components/botaoCurtida";
import CardWikipedia from "../components/wikipedia";

function Home() {
  return (
    <>
      <Header titulo="Produção Autoral" />

      <br />
      <br />
      <div className="card">
        <div className="card-content">
          <h2>Crise de 1929</h2>
          <br />
          <center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Y3LnoYmqWHU?si=XIUu0NXT7cfyYDb0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </center>
        </div>
      </div>
      <br />
      <br />
      <div className="card">
        <div className="card-content">
          <h2>Apresentação do Projeto</h2>
          <br />
          <center>
            <p>
              A Revolução de 1930 foi um movimento armado de alcance nacional,
              liderado por Getúlio Vargas, então governador do Rio Grande do
              Sul. Esse levante resultou na deposição do presidente Washington
              Luís e impediu a posse do presidente eleito Júlio Prestes,
              encerrando a chamada República Oligárquica e iniciando o Governo
              Provisório sob o comando de Vargas. As principais causas incluem a
              Política do Café com Leite, acordo informal de alternância no
              poder entre as oligarquias de São Paulo (produtores de café) e
              Minas Gerais (produtores de leite), dominando a presidência do
              país. Em 1930, o presidente Washington Luís, paulista, rompeu o
              pacto ao apoiar outro paulista, Júlio Prestes, como sucessor,
              contrariando as expectativas de Minas Gerais. Em resposta, Minas
              Gerais
            </p>
          </center>
        </div>
      </div>
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Home;
