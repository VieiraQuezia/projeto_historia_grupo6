import "./footer.css";
import logoinstagram from '/logoinstagram.png'
import logogithub from '/logogithub.png'

function Footer() {
  return (
    <>
      <section className="bodyFooter">
        <section className="infoContatos">
          <section className="redes">
            <section className="info">
              {/*classe para deixar o nome do lado da logo */}
              <img className="imgRedes" src={logoinstagram} />
              <p>@grupo6senai</p>
            </section>

            <section className="info">
              <img className="imgRedes" src={logogithub} />
              <a href="https://github.com/VieiraQuezia/projeto_historia_grupo6.git">
                Link do Repositório GitHub
              </a>
            </section>
          </section>

          <section className="integrantes">
            <section>
              <h4>
                Guilherme Gabriel Santana <br /> Hayeska L. A. Machado <br />
                Leonardo Mori Vicente <br /> Quezia Amaral Vieira
              </h4>
            </section>
          </section>

          <section className="contato">
            <p> 📞 Contato para Vendas: (19) 99489-2481</p>
            <p> 📩 E-mail para Contato: grupo6@gmail.com</p>
          </section>

          

          <hr />
        </section>
      </section>
    </>
  );
}

export default Footer;
