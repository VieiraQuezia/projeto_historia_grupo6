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
      <Header titulo="Revolução Russa" />
      <div className="container">
        <NavAnuncio />

        {/* Card principal */}
        <nav className="main-nav">
          <div className="card">
            <img src={Img1} alt="Imagem fixa" className="static-img" />

            <div className="card-content">
              <p className="card-text">
                A Revolução Russa, ocorrida em 1917,foi responsável por derrubar
                a monarquia czarista e estabelecer o primeiro regime socialista
                mundial. O movimento se iniciou devido a desigualdades sociais
                estruturais, um regime político absolutista e uma economia
                baseada na exploração de toda a classe camponesa e trabalhadora.
                O conflito cresceu consideravelmente durante a participação do
                país na Primeira Guerra Mundial, fome, inflação monetária e
                mortes em milhões. O movimento foi dividido em dois tempos. Em
                fevereiro (Revolução Branca), o aborrecimento do povo provocou a
                queda do Czar Nicolau II e estabeleceu um governo provisório que
                manteve o país em guerra e não houve grandes reformas sociais.
                Já em outubro (Revolução Vermelha) foi quando a guerra, de fato
                se iniciou, os bolcheviques, liderados por Lenin, assumiram o
                poder propondo a paz, a terra e o pão. Assim, para que a Rússia
                se tornasse o primeiro Estado socialista, foi preciso que suas
                terras e indústrias fossem nacionalizadas e o país fosse
                retirado da 1ª guerra mundial. Após a revolução, houve a guerra
                civil entre os bolcheviques e seus opositores. Mais tarde, a
                vitória dos revolucionários levou à criação da União Soviética
                em 1922. A Revolução Russa também teve consequências ainda mais
                globais, uma vez que todos os condenados ao peso na escala caíam
                em muitos países. O movimento deixa sua marca na história com a
                Guerra Fria entre os americanos considerados liberais, e os
                russos, que eram chamados de comunistas.
              </p>
            </div>
                      <BtnCurtida id="Revolucao-Russa" />

          </div>

          <div className="card">
            <img src={Img2} alt="Imagem fixa" className="imgespecifico" />

            <div className="card-content">
              <p className="card-text">
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
                      <BtnCurtida id="Revolucao-Russa" />

          </div>
        </nav>
      </div>

      <Footer />
    </>
  );
};

export default CardComNav;
