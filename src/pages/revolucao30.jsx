
import "./zpages.css";
//Import das imagens
import Img1 from "../assets/conflitosSecXX/revolucao1930/img1.jpg";
import Img2 from "../assets/conflitosSecXX/revolucao1930/img2.jpg";
import Img3 from "../assets/conflitosSecXX/revolucao1930/img3.jpg";
//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";
import BtnCurtida from "../components/botaoCurtida";
import CardWikipedia from "../components/wikipedia";

function Home() {
  return (
    <>
      <Header titulo="Revolução de 1930" />
      <BtnCurtida id="Revolucao-1930" />

      <CardText
        texto="  A Revolução de 1930 foi um movimento armado de alcance nacional,
                  liderado por Getúlio Vargas, então governador do Rio Grande do
                  Sul. Esse levante resultou na deposição do presidente Washington
                  Luís e impediu a posse do presidente eleito Júlio Prestes,
                  encerrando a chamada República Oligárquica e iniciando o Governo
                  Provisório sob o comando de Vargas. As principais causas incluem
                  a Política do Café com Leite, acordo informal de alternância no
                  poder entre as oligarquias de São Paulo (produtores de café) e
                  Minas Gerais (produtores de leite), dominando a presidência do
                  país. Em 1930, o presidente Washington Luís, paulista, rompeu o
                  pacto ao apoiar outro paulista, Júlio Prestes, como sucessor,
                  contrariando as expectativas de Minas Gerais. Em resposta, Minas
                  Gerais, Rio Grande do Sul e Paraíba formaram a Aliança Liberal,
                  lançando Getúlio Vargas à presidência e João Pessoa como vice.
                  Além disso, os demais estados brasileiros estavam crescendo em
                  importância e reivindicando mais espaço no cenário político
                  brasileiro. O estopim da revolução foi o assassinato do
                  candidato a vice-presidente João Pessoa, em julho de 1930."
        img={Img1}
      />
      <CardText
        texto="     A revolução teve início em 3 de outubro de 1930, com confrontos
                  entre forças revolucionárias e tropas federais. Em menos de um
                  mês, os revolucionários conseguiram depor Washington Luís. Em 3
                  de novembro, Getúlio Vargas assumiu a liderança do Governo
                  Provisório, que duraria até 1934. A revolução encerrou o domínio
                  das oligarquias estaduais sobre a política nacional; Vargas
                  iniciou um processo de centralização administrativa, reduzindo a
                  autonomia dos estados, além do incentivo à industrialização e à
                  modernização do país."
        img={Img2}
      />


      <CardWikipedia termoBusca="Revolução de 1930" imagem={Img3} />

      <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cH5HPE11qg4?si=mLhaiOlUzmN42S6R"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </center>
      <Footer />
    </>
  );
}

export default Home;
