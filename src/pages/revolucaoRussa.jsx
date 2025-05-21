import "./zpages.css";
// Import das imagens
import Img1 from "../assets/conflitosSecXX/revolucaoRussa/img1.png";
import Img2 from "../assets/conflitosSecXX/revolucaoRussa/img4.jpg";
import Img3 from "../assets/conflitosSecXX/revolucaoRussa/img4.jpg";

// Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";
import BtnCurtida from "../components/botaoCurtida";
import CardWikipedia from "../components/wikipedia";

// imagens

function Home() {
  return (
    <>
      <Header titulo="Revolução Russa" />

      <CardText
        texto="A Revolução Russa, ocorrida em 1917,foi responsável por derrubar a monarquia czarista e estabelecer o primeiro regime socialista mundial. O movimento se iniciou devido a desigualdades sociais estruturais, um regime político absolutista e uma economia baseada na exploração de toda a classe camponesa e trabalhadora. O conflito cresceu consideravelmente durante a participação do país na Primeira Guerra Mundial, fome, inflação monetária e mortes em milhões."
        img={Img1}
      />
      <CardText
        texto="O movimento foi dividido em dois tempos. Em fevereiro (Revolução Branca), o aborrecimento do povo provocou a queda do Czar Nicolau II e estabeleceu um governo provisório que manteve o país em guerra e não houve grandes reformas sociais. Já em outubro (Revolução Vermelha) foi quando a guerra, de fato se iniciou, os bolcheviques, liderados por Lenin, assumiram o poder propondo a paz, a terra e o pão. Assim, para que a Rússia se tornasse o primeiro Estado socialista, foi preciso que suas terras e indústrias fossem nacionalizadas e o país fosse retirado da 1ª guerra mundial."
        img={Img2}
      />

      <CardText
        texto="Após a revolução, houve a guerra civil entre os bolcheviques e seus opositores. Mais tarde, a vitória dos revolucionários levou à criação da União Soviética em 1922. A Revolução Russa também teve consequências ainda mais globais, uma vez que todos os condenados ao peso na escala caíam em muitos países. O movimento deixa sua marca na história com a Guerra Fria entre os americanos considerados liberais, e os russos, que eram chamados de comunistas."
        img={Img3}
      />

      <BtnCurtida id="Revolução-Russa" />

      <CardWikipedia termoBusca="Revolução Russa" />

      <Footer />
    </>
  );
}

export default Home;
