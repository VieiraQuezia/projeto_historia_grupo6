import "../pages/zpages.css";

// import das imagens
import Img1 from "../assets/conflitosSecXX/revolucao1930/img1.jpg";
import Img2 from "../assets/conflitosSecXX/revolucao1930/img2.jpg";

// componentes
import NavAnuncio from "../components/cardAnuncio";
import Header from "../components/header";
import Footer from "../components/footer";
import BtnCurtida from "../components/botaoCurtida";
const CardComNav = () => {
  return (
    <>
      <Header titulo="Revolução de 1930" />
      <div className="container">
        <NavAnuncio />

        {/* Card principal */}
        <nav className="main-nav">
          <div className="card">
            <img src={Img1} alt="Imagem fixa" className="static-img" />

            <div className="card-content">
              <p className="card-canudos">
                A Revolução de 1930 foi um movimento armado de alcance nacional,
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
                candidato a vice-presidente João Pessoa, em julho de 1930.
              </p>
            </div>

          </div>

          <div className="card">
            <img src={Img2} alt="Imagem fixa" className="imgespecifico" />

            <div className="card-content">
              <p className="card-canudos">
                A revolução teve início em 3 de outubro de 1930, com confrontos
                entre forças revolucionárias e tropas federais. Em menos de um
                mês, os revolucionários conseguiram depor Washington Luís. Em 3
                de novembro, Getúlio Vargas assumiu a liderança do Governo
                Provisório, que duraria até 1934. A revolução encerrou o domínio
                das oligarquias estaduais sobre a política nacional; Vargas
                iniciou um processo de centralização administrativa, reduzindo a
                autonomia dos estados, além do incentivo à industrialização e à
                modernização do país.
              </p>
            </div>

          </div>
                                <BtnCurtida id="Revolucao-30" />


          <iframe className="videoyt"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/O6q1G4fjUx8?si=OtFXyEurb91sPgY4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </nav>
      </div>

      <Footer />
    </>
  );
};

export default CardComNav;
