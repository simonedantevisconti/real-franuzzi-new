import { Link } from "react-router-dom";

import logo from "../assets/imgs/logo.webp";

import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="home-hero">
        <div className="home-hero-glow home-hero-glow-blue"></div>
        <div className="home-hero-glow home-hero-glow-yellow"></div>

        <div className="page-container home-hero-container">
          <div className="home-hero-content">
            <div className="home-season-label">
              <span></span>
              NUOVA STAGIONE
            </div>

            <h1>
              NON È SOLO
              <br />
              <span>CALCIO.</span>
            </h1>

            <p className="home-claim">
              Una nuova stagione, la stessa fame.
              <br />
              <strong>FC Real Franuzzi.</strong>
            </p>

            <div className="home-actions">
              <Link to="/rosa" className="home-primary-button">
                Scopri la nuova rosa
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="home-hero-visual">
            <div className="home-logo-orbit">
              <div className="home-logo-ring home-logo-ring-one"></div>
              <div className="home-logo-ring home-logo-ring-two"></div>

              <img
                src={logo}
                alt="Logo FC Real Franuzzi"
                className="home-main-logo"
              />
            </div>

            <div className="home-season-number">
              <span>FC</span>
              <strong>REAL</strong>
              <span>FRANUZZI</span>
            </div>
          </div>
        </div>

        <div className="home-scroll-indicator" aria-hidden="true">
          <span></span>
        </div>
      </section>

      <section className="home-identity">
        <div className="page-container">
          <div className="home-identity-grid">
            <div>
              <span className="home-section-label">IL CLUB</span>

              <h2>
                Più di una squadra.
                <br />
                <span>Una famiglia.</span>
              </h2>
            </div>

            <div className="home-identity-copy">
              <p>
                FC Real Franuzzi torna in campo per una nuova avventura nella
                Lega Calcio a 8 Bergamo.
              </p>

              <p>
                Ambizione, appartenenza e voglia di divertirsi. Dentro e fuori
                dal campo.
              </p>

              <Link to="/contatti">
                Seguici durante il percorso <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-manifesto">
        <div className="home-manifesto-track">
          <span>REAL FRANUZZI</span>
          <span>•</span>
          <span>PASSIONE</span>
          <span>•</span>
          <span>SQUADRA</span>
          <span>•</span>
          <span>BERGAMO</span>
          <span>•</span>
          <span>REAL FRANUZZI</span>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
