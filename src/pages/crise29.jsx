



import "./zpages.css"
 // Import das imagens
// Componentes
    import Header from "../components/header"
  import Footer from "../components/footer"
  import CardText from "../components/cartText"
   import BtnCurtida from "../components/botaoCurtida";
   import CardWikipedia from '../components/wikipedia'


// imagens

 import Img1 from "../assets/conflitosSecXX/crise1929/1crise29.png";
 import Img2 from "../assets/conflitosSecXX/crise1929/2crise29.png";
 import Img3 from "../assets/conflitosSecXX/crise1929/3crise29.png";




function Home(){
    
    return(
        <>
            <Header titulo='Crise de 1929' />
          

<CardText 
 texto='  A Crise de 1929, que ficou conhecida como a Grande Depressão, foi uma forte degradação da economia, que ocorreu no final da década de 1920. O liberalismo econômico decaiu naquele momento, e as causas dessa crise foram a superprodução da indústria americana e especulação financeira.

Os Estados Unidos já era considerado o país com maior economia do mundo e após a Primeira Guerra Mundial, o crescimento da economia americana ficou muito evidente, tudo isso em 1920, tanto que esse ano marcou o avanço do consumo de mercadorias, esse estilo de vida americano foi chamado de “American Way Of Life”. O país ficou responsável por 40% das importações, pela produção de 42% das mercadorias realizadas no mundo inteiro e também emprestou grandes quantias de dinheiro para países europeus que necessitavam de auxílio por conta da Primeira Guerra Mundial.

O consumo da população ficou muito acelerado, o que acabou elevando as compras de maneira desenfreada, esse consumo excessivo se baseou em parte no aumento do crédito que acontecia no país, que não tinha nenhum tipo de regulação ou intervenção estatal. ' 

 img={Img1}  />


<CardText 
 texto='    Por conta do crescimento da economia nos Estados Unidos, a população começou a investir fortemente na bolsa de valores, as pessoas compravam ações na esperança delas valorizarem para assim vendê-las, fazendo com que as ações aumentassem. Com essa falsa percepção de prosperidade e a superprodução das indústrias americanas causou a quebra da economia.

A superprodução das indústrias aumentou, porém os salários ficaram paralisados, fazendo com que as pessoas não pudessem comprar a quantidade exorbitante de produtos feitos pela indústria dos Estados Unidos, nem mesmo o próprio mercado conseguiu absorver essas mercadorias. Todo esse caos resultou na perda de esperança das pessoas que compraram ações nas empresas americanas e a quebra da bolsa de valores de Nova Iorque. Depois dessa quebra, no dia 24 de outubro de 1929, inúmeras pessoas começaram a vender suas ações, mais de 12 milhões de vendas ocorreram nesse dia, deixando o mercado em desespero. Esse ocorrido durou por dias, e as vendas das ações aumentaram, desaparecendo milhões de dólares.' 

 img={Img2}  />


<CardText 
 texto='     Isso gerou várias consequências, como: O PIB dos  Estados Unidos caiu aproximadamente 50%, várias pessoas desempregadas, as importações caíram 70%, as exportações caíram 50%, os empréstimos internacionais diminuem em 90%, a produção no mercado caiu, o salário médio caiu 50% na indústria, milhares de bancos e empresas faliram, muita fome no país inteiro e inúmeras pessoas perderam seus patrimônios. No Brasil a área que sofreu mais com o retrocesso da economia foi a produção do café. A baixa procura do café fez com que o produto fosse desvalorizado e para consertar a situação, Getúlio Vargas incinerou sacas de café.

Em 1933, o acordo criado para restaurar a economia foi chamado de New Deal, criado durante o governo de Franklin Roosevelt. O programa visava ampliar a intervenção do estado na economia, controlando as transações econômicas e a produção, além de realizar obras públicas para estimular a criação de empregos.' 

 img={Img3}  />


<BtnCurtida  id='Crise-de-1929'/>


<CardWikipedia termoBusca="Crise de 1929" imagem={Img3} />

            <Footer />
        </>
    )
}

export default Home

