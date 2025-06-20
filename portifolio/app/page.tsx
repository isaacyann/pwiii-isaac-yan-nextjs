"use client";

import "./globals.css";

export default function Home() {
  return (
    <div>
      <header>
        <div>
          <img src="/assets/images/Isaac.jpg" alt="Foto de Vitor Melo" />
        </div>
      </header>

      <main>
        <section>
          <div>
            <h2>Bem-vindo!</h2>
            <p>
              Olá, sou Isaac Yan — desenvolvedor apaixonado por programar
              diferentes tipos de aplicações e softwares
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Sobre mim</h2>
            <p>
              Atualmente estudo desenvolvimento web com foco em{" "}
              <strong>React</strong>, <strong>Next.js</strong> e interfaces
              responsivas. Gosto de aprender, de resolver problemas criativos e
              de trabalhar com projetos reais que tenham impacto.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h2>Habilidades</h2>
            <ul>
              <li>✅ HTML, CSS, JavaScript</li>
              <li>✅ React Native, Next.js</li>
              <li>✅ Git, GitHub</li>
              <li>✅ Firebase, MySQL, MongoDB</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="channel-list">
            <h2>Meus Projetos</h2>
            <p>Confira alguns dos projetos que desenvolvi:</p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/KenjiCaique/Anxiety-TCC.git"
                >
                  <img
                    src="/assets/images/logocompleta.jpg"
                    alt="Logo Anxiety"
                  />
                </a>
                <br />
                <p>
                  <strong>Anxiety App:</strong> Aplicativo focado em saúde
                  mental com exercícios de respiração. Desenvolvido com a
                  colaboração ao meu grupo de TCC (Expo + Firebase)
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="games-list">
            <h2>Esportes e Games</h2>
            <p>Lista de esportes e games que acompanho/jogo:</p>
            <ul>
              <li>
                <a target="_blank" href="https://www.nba.com/">
                  <img
                    src="https://logospng.org/download/nba/logo-nba-2048.png"
                    alt="NBA"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.twitch.tv/directory/category/tom-clancys-rainbow-six-siege"
                >
                  <img
                    src="https://static-cdn.jtvnw.net/ttv-boxart/460630-144x192.jpg"
                    alt="Foto R6"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="channel-list">
            <h2>Minhas redes</h2>
            <p>Se conecte comigo:</p>
            <ul>
              <li>
                <a target="_blank" href="https://www.instagram.com/_zacyan">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                    alt="Ícone Instagram"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://br.pinterest.com/isaacyan21/">
                  <img
                    src="https://images.icon-icons.com/2699/PNG/512/pinterest_logo_icon_169854.png"
                    alt="Ícone Pinterest"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h2>Contato</h2>
            <p>
              Você pode entrar em contato comigo pelas redes acima ou pelo
              email:
            </p>
            <p>
              <strong>Email:</strong> isaacyan21@gmail.com
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
