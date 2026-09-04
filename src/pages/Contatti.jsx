import PageHero from "../components/PageHero";

import "../styles/contatti.css";

const Contatti = () => {
  const socialLinks = [
    {
      nome: "YouTube",
      username: "@FCrealFranuzzi",
      link: "https://www.youtube.com/@FCrealFranuzzi",
      classe: "youtube",
      icona: "fa-brands fa-youtube",
    },
    {
      nome: "Instagram",
      username: "@fc.real.franuzzi",
      link: "https://www.instagram.com/fc.real.franuzzi/",
      classe: "instagram",
      icona: "fa-brands fa-instagram",
    },
    {
      nome: "Twitch",
      username: "fcrealfranuzzi",
      link: "https://www.twitch.tv/fcrealfranuzzi",
      classe: "twitch",
      icona: "fa-brands fa-twitch",
    },
  ];

  return (
    <div className="contatti-page">
      <PageHero
        titleTop="RESTA"
        titleHighlight="CON NOI."
        description="Seguici sui nostri canali ufficiali e vivi insieme a noi la nuova stagione del FC Real Franuzzi."
        backgroundText="LINKS"
      />

      <section className="contatti-social">
        <div className="page-container">
          <div className="contatti-social-header">
            <span>I NOSTRI CANALI</span>

            <h2>Seguici online</h2>
          </div>

          <div className="contatti-social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={social.nome}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card social-card-${social.classe}`}
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                <div className="social-card-top">
                  <div className="social-icon">
                    <i className={social.icona} aria-hidden="true"></i>
                  </div>

                  <span className="social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <div className="social-card-content">
                  <span className="social-platform">{social.nome}</span>

                  <h3>{social.username}</h3>

                  <span className="social-cta">
                    Seguici
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contatti-claim">
        <div className="page-container">
          <div className="contatti-claim-content">
            <span>SEGUICI. TIFA. VIVI LA STAGIONE.</span>

            <h2>
              HALA REAL
              <br />
              <strong>FRANUZZI.</strong>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;
