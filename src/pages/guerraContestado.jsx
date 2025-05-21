import "./zpages.css"
 // Import das imagens
 import Img1 from "../assets/conflitosSecXX/guerraContestado/img1.jpg";
 import Img2 from "../assets/conflitosSecXX/guerraContestado/img2.webp";

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
            <Header titulo='Guerra do Contestado' />
          

            <div className="card-content">
              <video src=""></video>
            </div>
                      <BtnCurtida id="Fascismo-Italiano" />


<BtnCurtida/>


<CardWikipedia termoBusca="Guerra do Contestado"  />

<BtnCurtida id='wikpedia-Guerra-Contestado'/>


 <iframe className="videoyt"
             width="560"
             height="315"
             src="https://www.youtube.com/embed/LskOERMUYng?si=rU1efCvC-Hr9tC8A"
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


