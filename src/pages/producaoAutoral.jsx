import "./zpages.css";
//Import das imagens
//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";
import Img1 from '../assets/nossaBandeira.png';


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

      <CardText
        texto='    O "Projeto Integrado História XX" é uma iniciativa educacional
                 colaborativa entre o SESI e o SENAI, envolvendo alunos do 3º ano
                 do Ensino Médio do SESI Vinhedo estudantes do curso técnico em
                 Desenvolvimento de Sistemas do SENAI Valinhos. Com orientação de
                 Profª Julia Milani (História), Prof° Antonio Tupinambá e Prof°
                 Leandro Grosso (Desenvolvimento de Sistemas), o projeto visa
                 integrar conhecimentos de História e Tecnologia por meio do
                 desenvolvimento de páginas web temáticas. A proposta pedagógica
                 foca nos principais acontecimentos do século XX, divididos em
                 sete grandes temas: Guerra de Canudos, Guerra do Contestado,
                 Primeira Guerra Mundial, Revolução Russa, Fascismo Italiano,
                 Crise de 1929 e Revolução de 1930. Cada grupo de alunos é
                 responsável por criar uma página web que explore esses eventos
                 históricos. Além disso, são incentivados a incorporar imagens
                 para enriquecer o conteúdo visual das páginas. O projeto é
                 estruturado para promover a interdisciplinaridade, permitindo
                 que os alunos apliquem habilidades técnicas de desenvolvimento
                 de sistemas na criação de recursos educacionais digitais. Essa
                 abordagem prática visa não apenas aprofundar o entendimento dos
                 eventos históricos, mas também desenvolver competências
                 tecnológicas relevantes, como React e consumo de APIs. Para mais
                 informações e acesso aos materiais desenvolvidos pelos grupos.'
        img={Img1}
      />
     
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Home;
