


import "./zpages.css"
 // Import das imagens
 import Img1 from "../assets/conflitosSecXX/guerraCanudos/img1.jpg";
 import Img2 from "../assets/conflitosSecXX/guerraCanudos/img2.webp";
// Componentes
    import Header from "../components/header"
    import Footer from "../components/footer"
    import CardText from "../components/cartText"
   import BtnCurtida from "../components/botaoCurtida";
   import CardWikipedia from '../components/wikipedia'


// imagens




function Home(){
    
    return(
        <>
            <Header titulo='Guerra de Canudos' />
          

<CardText 
 texto='     A Guerra de Canudos foi um dos principais conflitos que marcaram
                 o período entre a queda da monarquia e a instalação do regime
                 republicano no Brasil. Aconteceu de novembro de 1896 a outubro
                 de 1897 no sertão da Bahia, em uma fazenda improdutiva ocupada
                 por Antônio Conselheiro e seus mais de 20 mil seguidores.Teve
                 caráter messiânico, por conta das pregações do beato, mas
                 envolvia a luta contra a fome, a miséria e a seca nordestina,
                 região desassistida pelo governo federal, que passava, naquele
                 momento, pela transição da monarquia para a república. A
                 comunidade de Canudos começou a incomodar diversos setores das
                 classes dominantes, como a Igreja, que estava perdendo seus
                 fieis para o religioso sertanejo; os latifundiários, que temiam
                 novas ocupações de terras improdutivas; e dos governos regional
                 e nacional, que tentaram atacar Canudos quatro vezes, porém sem
                 sucesso. Estes só conseguiram vencer na quarta tentativa, quando
                 Conselheiro já estava morto — por razões desconhecidas —, com o
                 envio de canhões e 5 mil homens que mataram cerca de 25 mil
                 pessoas. Causas da Guerra de Canudos São os principais motivos:
                 Problemas sociais e econômicos enfrentados pela população
                 nordestina no início da Primeira República; Receio do governo
                 com o crescimento de poder do líder messiânico, Antônio
                 Conselheiro; Conflitos de terras envolvendo latifundiários e a
                 população mais pobre; Descaso do poder público com a população
                 que ali vivia.' 
 img={Img1}  />
<CardText 
 texto='     A Guerra de Canudos (1896-1897) foi um dos principais conflitos
                 do período de transição para o sistema republicano, ocorreu no
                 arraial de Canudos e envolveu o Exército contra Antonio
                 Conselheiro e seus seguidores. Os motivos que teriam levado à
                 guerra ainda são objetos de discussão, havendo duas teses
                 principais: a Euclidiana, interpretando Canudos como um foco de
                 restauração monárquica; e a de Rui Facó, marxista, tendo como
                 epicentro a luta pela abolição dos latifúndios, pelo direito à
                 terra e contra a opressão. O conflito é dividido em quatro
                 expedições militares, sendo vencedora apenas a última. Antônio
                 Conselheiro e seus seguidores tornaram-se a maior ameaça a
                 República durante a guerra. Veja também: Revolta da Chibata:
                 manifestação de insatisfação dos marujos Principais causas da
                 Guerra de Canudos Existem, pelo menos, duas grandes vertentes
                 que tentaram, e ainda tentam, explicar o que foi a Guerra de
                 Canudos. Baseada na monumental obra Os sertões, de Euclides da
                 Cunha, publicada em 1902 após o autor acompanhar a “última
                 expedição” a Canudos, a vertente “euclidiana” faz uso de
                 leituras sociológicas características do final do século XIX.
                 Por exemplo: o positivismo, de Hippolyte Taine, que buscava
                 compreender as relações sociais com base em determinismos
                 raciais, geográficos e históricos; e também o darwinismo social,
                 de Herbert Spencer, opondo categorias dicotômicas, como
                 “civilização” e “barbárie”. Outros autores importantes da época
                 e que também foram influências para Euclides da Cunha são: Karl
                 Marx, Émile Durkheim, Auguste Comte, entre outros que foram
                 fundamentais para o desenvolvimento da sociologia.' 
 img={Img2}  />



<BtnCurtida id='Guerra-Canudos'/>

<CardWikipedia termoBusca="Guerra de Canudos"  />

<BtnCurtida id='wikpedia-Guerra-Canudos'/>



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

            <Footer />
        </>
    )
}

export default Home

