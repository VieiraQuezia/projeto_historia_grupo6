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

import "./footer.css";
import logoinstagram from "../assets/footer/instagram.png";
import logofacebook from "../assets/footer/facebook.png";
import ImgGitHub from "../assets/footer/github.png";

function Footer() {
  return (
    <>
      <section className="bodyFooter">
        <section className="infoContatos">
          <section className="redes">
            <section className="info">
              {/*classe para deixar o nome do lado da logo */}
              <img className="imgRedes" src={logoinstagram} />
              <p>@TropadaMandioca6_oficial</p>
            </section>

            <section className="info">
              <img className="imgRedes" src={logofacebook} />
              <p> Tropa Mandioca 6 Oficial</p>
            </section>
          </section>

          <section className="contato">
            <p> 📞 Contado para Vendas: +55 (21) 46002-8239</p>
            <p> 📩 Email para Contato: tropadamandioca6@gmail.com</p>
          </section>
        </section>

        <br />
        <section className="informacoes">
          <section className="sobreNos">
            
              <h4> Tropa da Mandioca © 2025 </h4> <p> – Nosso site, desenvolvido com
              React, React Router, useEffect e useState, permite que os usuários
              comparem dois tipos de resumo (autoral e Wikipédia) sobre temas
              históricos. As avaliações são registradas com botões de curtir e
              não curtir, salvas no localStorage e exibidas dinamicamente em uma
              página de ranking. 📚✨
            </p>
          </section>

          <section className="listas">
            <h4> Sistemas: </h4>
            <ul>
              <li>useEffect</li>
              <li>useState</li>
              <li>React Router Dom</li>
            </ul>
          </section>
        </section>
        <nav className="logos">
          {/* <img className="imgLogo" src={logo}/> */}
          <a href="https://github.com/Ticoliro08" target="_blank">
            <img className="imgGithub" src={ImgGitHub} />
          </a>
        </nav>

        <section className="integrantes">
          <section>
            <h4>Integrantes:</h4>
            <ul>
              <li>Guilherme Gabriel Santana</li>
              <li>Hayeska Loredane Alves Machado</li>
              <li>Leonardo Mori Vicente</li>
              <li>Quezia Amaral Vieira</li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
export default Footer;
