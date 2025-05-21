// import "./footer.css";
// import logoinstagram from '/logoinstagram.png'
// import logogithub from '/logogithub.png'

// function Footer() {
//   return (
//     <>
//       <section className="bodyFooter">
//         <section className="infoContatos">
//           <section className="redes">
//             <section className="info">
//               {/*classe para deixar o nome do lado da logo */}
//               <img className="imgRedes" src={logoinstagram} />
//               <p>@grupo6senai</p>
//             </section>

//             <section className="info">
//               <img className="imgRedes" src={logogithub} />
//               <a href="https://github.com/VieiraQuezia/projeto_historia_grupo6.git">
//                 Link do Repositório GitHub
//               </a>
//             </section>
//           </section>

//           <section className="integrantes">
//             <section>
//               <h4>
//                 Guilherme Gabriel Santana <br /> Hayeska L. A. Machado <br />
//                 Leonardo Mori Vicente <br /> Quezia Amaral Vieira
//               </h4>
//             </section>
//           </section>

//           <section className="contato">
//             <p> 📞 Contato para Vendas: (19) 99489-2481</p>
//             <p> 📩 E-mail para Contato: grupo6@gmail.com</p>
//           </section>

          

//           <hr />
//         </section>
//       </section>
//     </>
//   );
// }

// export default Footer;


import "./footer.css"
import logoinstagram from "../assets/footer/instagram.png"
import logofacebook from "../assets/footer/facebook.png"
import ImgGitHub from "../assets/footer/github.png"


function Footer () {
    return (
        <>
        <section className="bodyFooter">
            <section className="infoContatos">

                <section className="redes">

                    <section className="info"> {/*classe para deixar o nome do lado da logo */}
                        <img className="imgRedes" src={logoinstagram} />
                        <p> @guih.sdl</p>
                    </section>

                    <section className="info"> 
                        <img className="imgRedes" src={logofacebook} />
                        <p> guih.sdl</p>
                    </section>

                </section>

                <section className="contato"> 
                    <p> 📞 Contado : (19) 9975-56147</p>
                    <p> 📩 Email para Contato: ggsantana18@gmail.com</p>
                </section>

            </section>

            <section className="informacoes"> 

               

              <section className="listas"> 
  <h4>Especialistas e Colaboradores</h4>
  <ul>
    <li>Dra. Ana Botelho – Fitoterapeuta e pesquisadora de plantas medicinais</li>
    <li>Ervas do Cerrado – Coletivo de produtores sustentáveis</li>
    <li>Vida Natural com Clara – Conteúdo sobre uso consciente de ervas</li>
  </ul>
</section>


               <section className="listas"> 
  <h4>Produtos e Parcerias Naturais</h4>
  <ul>
    <li>Flor da Terra – Cosméticos naturais à base de ervas</li>
    <li>Sementes Vivas – Loja de sementes e mudas medicinais</li>
    <li>Tisana Verde – Chás artesanais e orgânicos</li>
  </ul>
</section>

<section className="listas"> 
  <h4>Dicas Populares</h4>
  <ul>
    <li>Chá de camomila: relaxamento e alívio da ansiedade</li>
    <li>Hortelã: digestão e frescor</li>
    <li>Alecrim: memória e concentração</li>
  </ul>
</section>




              

            </section>
<nav className="logos">


            {/* <img className="imgLogo" src={logo}/> */}
            <a href="https://github.com/Ticoliro08" target="_blank" >
            <img className="imgGithub" src={ImgGitHub}/>
            </a>

            </nav>
            <hr/>

            <section className="integrantes"> 
                <section> 
                    <h4> Guilherme Gabriel Santana N°06</h4>
                  
                </section>

                
            </section>
        </section>
        </>
    )
}

export default Footer
