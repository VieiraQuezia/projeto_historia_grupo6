
import "./zpages.css"
  //Import das imagens
 import Img1 from "../assets/conflitosSecXX/primeiraGuerra/img2.webp";
 import Img2 from "../assets/conflitosSecXX/primeiraGuerra/img4.webp";
 import Img3 from "../assets/conflitosSecXX/primeiraGuerra/img5.jpg";
 //Componentes
    import Header from "../components/header"
    import Footer from "../components/footer"
    import CardText from "../components/cartText"
   import BtnCurtida from "../components/botaoCurtida";
   import CardWikipedia from '../components/wikipedia'


function Home(){
    
    return(
        <>
            <Header titulo='Primeira Guerra Mundial' />
          

<CardText id='topic1'
 texto='  A Primeira Guerra Mundial, que ocorreu entre 1914 e 1918, foi um
                 conflito de escala mundial, envolvendo as grandes potências
                 econômicas e militares da época. Os antecedentes remontam até o
                 século XIX, quando as disputas imperialistas por colônias na
                 África e na Ásia se intensificaram. Além disso, havia uma
                 rivalidade crescente entre as nações europeias, como a
                 rivalidade anglo-alemã e a franco-alemã, alimentada pelo
                 nacionalismo. As alianças militares complexas também
                 desempenharam um papel crucial, com a formação da Tríplice
                 Aliança (Alemanha, Áustria-Hungria e Itália) e da Tríplice
                 Entente (França, Inglaterra e Rússia). Esse período anterior à
                 guerra é conhecido como Paz Armada, caracterizado por altos
                 investimentos em armamentos e pela tensão crescente. O estopim
                 foi o assassinato do arquiduque Francisco Ferdinando, herdeiro
                 do trono austro-húngaro, em Sarajevo, no dia 28 de junho de
                 1914, feito por um militante sérvio. Esse ato desencadeou uma
                 onda de declarações de guerra, impulsionadas pelas alianças
                 estabelecidas entre os países.' 
 img={Img1}  />
<CardText id='topic1'
 texto='     A Primeira Guerra Mundial se desenrolou em duas fases
                 principais. A primeira, a guerra de movimento, foi marcada por
                 rápidos avanços e tentativas de ocupação territorial. Já a
                 segunda, a guerra de trincheiras, dominou grande parte do
                 conflito na Frente Ocidental. As trincheiras, extensas redes de
                 buracos, tornaram-se um símbolo da brutalidade e do impasse da
                 guerra, com milhões de soldados vivendo em condições insalubres
                 e enfrentando ataques constantes. Neste contexto, novas
                 tecnologias de guerra, como metralhadoras, gases tóxicos,
                 tanques e aviões, foram utilizadas em larga escala, resultando
                 em diversas mortes e feridos. Em 1917, dois eventos
                 significativos mudaram o rumo da guerra: a saída da Rússia, em
                 função da Revolução Russa, e a entrada dos Estados Unidos ao
                 lado da Entente. A participação dos EUA, com seu potencial
                 humano e industrial, foi fundamental para a vitória dos Aliados.' 
 img={Img2}  />
<CardText id='topic1'
 texto='     A guerra chegou ao fim em 11 de novembro de 1918, com a derrota
                 das Potências Centrais. Em 1919, foi assinado o Tratado de
                 Versalhes, que impôs duras condições à Alemanha, considerada a
                 principal responsável pelo conflito. Esse tratado gerou um clima
                 de instabilidade e ressentimento que eventualmente contribuiria
                 para o surgimento da Segunda Guerra Mundial. A Primeira Guerra
                 Mundial deixou um rastro devastador, com milhões de mortos e
                 feridos. Ela também redesenhou o mapa da Europa, resultando no
                 fim de impérios como o Austro-Húngaro, o Otomano e o Russo,
                 marcando o declínio da Europa e a ascensão dos Estados Unidos
                 como uma potência global.' 
 img={Img3}  />


<BtnCurtida id='Primeira-Guerra-Mundial'/>


<CardWikipedia termoBusca="Primeira Guerra Mundial" imagem={Img3} />
 <iframe
             className="videoyt"
             width="560"
             height="315"
             src="https://www.youtube.com/embed/D4JmMBC28x8?si=WJyy0fLt8NfnkjMw"
             title="YouTube video player"
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerPolicy="strict-origin-when-cross-origin"
             allowFullScreen
           ></iframe>
            <Footer />
        </>
    )
}

export default Home
