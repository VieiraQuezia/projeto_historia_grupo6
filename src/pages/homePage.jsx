

import "./zpages.css";
//Import das imagens
import Img1 from "/fotogrupo6.png";

//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";

function Home() {
  return (
    <>
      <Header titulo="Home" />

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
      
<center>
      <a target="_blank" href="https://sites.google.com/docente.senai.br/projeto-integrado-historia-xx/home?authuser=0.'"> <h2> Visite o site oficial do projeto</h2></a>
</center>
<br />
      <Footer />
    </>
  );
}

export default Home;
