import "./zpages.css";
//  Import das imagens
import Img1 from "../assets/conflitosSecXX/fascismoItaliano/img1.jpg";
import Img2 from "../assets/conflitosSecXX/fascismoItaliano/img2.jpg";

//Componentes
import Header from "../components/header";
import Footer from "../components/footer";
import CardText from "../components/cartText";
import BtnCurtida from "../components/botaoCurtida";
import CardWikipedia from "../components/wikipedia";

function Home() {
  return (
    <>
      <Header titulo="Fascismo na Itália" />

      <CardText
        texto="      O fascismo na Itália foi um período em que esse país foi
                 governado por um partido político conservador, radical e de
                 extrema-direita, de 1922 e 1943, embora tenha se sustentado no
                 poder, de alguma forma, até 1945. O fascismo surgiu, em 1919,
                 como uma organização paramilitar, transformando-se em partido em
                 1921. Liderado por Benito Mussolini, o fascismo se aproveitou do
                 cenário de incerteza em que vivia a Itália no pós-Primeira
                 Guerra Mundial. Usava da violência para alcançar os seus
                 objetivos e cresceu consideravelmente violentando os socialistas
                 na Europa. Benito Mussolini foi executado no final da Segunda
                 Guerra Mundial."
        img={Img1}
      />
      <CardText
        texto="    O termo fascismo pode ser usado em diferentes contextos, sendo
                 mais relacionado ao governo liderado por Benito Mussolini
                 (chamado de Duce pelos fascistas), que governou a Itália até
                 1943. Outro sentido que pode ser empregado ao termo é o de uma
                 ideologia política extremista e conservadora, classificada como
                 extrema-direita no espectro político. Esse segundo sentido é
                 empregado porque o fascismo original — o italiano — foi um
                 movimento político conservador com posições extremistas, marcado
                 por um nacionalismo extremado, por um governo autoritário, pela
                 obediência cega, pelo desprezo à democracia e por ver na
                 violência um instrumento legítimo para alcançar os seus
                 objetivos. O fascismo via nessas práticas o único meio possível
                 de alcançar o “destino fatal de Roma”, que seria o de um país
                 glorioso e dominador de muitas terras. Inclusive, por conta
                 disso, realizava um resgate do passado histórico romano, com o
                 objetivo de transmitir a ideia da “força” do povo italiano. Até
                 o símbolo do fascismo foi retirado da história romana, pois
                 usou-se, para tanto, o feixe. Os feixes unidos eram um símbolo
                 que transmitia a ideia de força por meio da união, e até o nome
                 do partido se originou dessa associação. A palavra fascismo vem
                 de fascio, do italiano, cujo sentido se refere a tais feixes."
        img={Img2}
      />

      <BtnCurtida id="Fascismo-Italiano" />

      <CardWikipedia termoBusca="Fascismo na Itália" />

      <center>
        <iframe
          className="videoyt"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O6q1G4fjUx8?si=OtFXyEurb91sPgY4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </center>
      <Footer />
    </>
  );
}

export default Home;
