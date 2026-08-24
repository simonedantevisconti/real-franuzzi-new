import logoGoldbet from "../assets/imgs/logo-goldbet.webp";
import logoERent from "../assets/imgs/logo-e-rent.webp";
import logoLega from "../assets/imgs/logo-lega-plain.webp";

import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-heading">
          <span>FC REAL FRANUZZI</span>
          <p>Partners & League</p>
        </div>

        <div className="footer-partners">
          <a
            href="https://galdierirent.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-partner footer-partner-sponsor"
            aria-label="Visita E-Rent Car"
          >
            <img src={logoERent} alt="E-Rent Car" />
          </a>

          <a
            href="https://www.instagram.com/legacalcioa8bergamo/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-partner footer-partner-league"
            aria-label="Visita Lega Calcio a 8 Bergamo"
          >
            <img src={logoLega} alt="Lega Calcio a 8 Bergamo" />
          </a>

          <a
            href="https://share.google/7w69ID0gr0NL5pEj1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-partner footer-partner-sponsor"
            aria-label="Visita GoldBet Busnago"
          >
            <img src={logoGoldbet} alt="GoldBet Busnago" />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} FC Real Franuzzi</p>

          <p>Passione. Squadra. Hala Real.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
