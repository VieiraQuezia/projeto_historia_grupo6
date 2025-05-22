import "./zpages.css";
// Import das imagens
import Img1 from "../assets/conflitosSecXX/guerraContestado/img1.jpg";
import Img2 from "../assets/conflitosSecXX/guerraContestado/img2.webp";

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
      <Header titulo="Guerra do Contestado" />

      <CardText
        texto="      A Guerra do Contestado foi um conflito ocorrido de 1912 a 1916
                 na divisa entre Santa Catarina e Paraná por disputas de terra.
                 Recebeu esse nome pois era uma região contestada, ou seja,
                 disputada, devido à abundância de erva-mate. Era projetada a
                 construção de uma estrada de ferro nela, motivo pelo qual
                 milhares de pessoas se deslocaram para a área, na expectativa de
                 trabalhar na obra. Após a inauguração, houve uma crise social
                 causada pelo desemprego dos habitantes recém chegados, que se
                 juntaram em comunidades formadas por monges messiânicos. O
                 principal deles era José Maria do Santo Agostinho, um
                 antirrepublicano que pregava o fim do mundo nos anos 2000,
                 gerando medo e obediência dos seguidores. Seu fortalecimento
                 como líder causou incômodo na Igreja Católica e coronéis. O
                 governo federal, preocupado com a formação das comunidades,
                 enviou tropas para a região, as quais não obtiveram vitória
                 contra os sertanejos."
        img={Img1}
      />
      <CardText
        texto="      Com a perda das terras após a inauguração da estrada, houve uma
                 revolta por parte dos trabalhadores, iniciando um levante armado
                 liderado por José Maria em busca de um governo independente. Em
                 reação, o então presidente da república Hermes da Fonseca enviou
                 tropas, em uma tentativa frustrada de derrotar a comunidade do
                 Quadrado Santo, onde José Maria vivia com seus seguidores. Logo
                 nos primeiros confrontos, o monge foi assassinado, porém a
                 guerra continuou com o eventual sucesso das tropas do governo em
                 dizimar os seguidores, sendo possível após inúmeros confrontos
                 que envolveram armamentos pesados e aviões de artilharia. As
                 questões envolvendo a área da divisa foram resolvidas por meio
                 de um acordo assinado entre paranaenses e catarinenses,
                 principal consequência da guerra."
        img={Img2}
      />

      <BtnCurtida id='Guerra-Contestado' />

      <CardWikipedia termoBusca="Guerra do Contestado" />


      <center>
        <iframe
          className="videoyt"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LskOERMUYng?si=rU1efCvC-Hr9tC8A"
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
