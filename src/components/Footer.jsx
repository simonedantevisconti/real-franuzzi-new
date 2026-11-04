import logoGoldbet from "../assets/imgs/logo-goldbet.webp";
import logoERent from "../assets/imgs/logo-e-rent.webp";
import logoLega from "../assets/imgs/logo-lega-plain.webp";
import logoSpaccanapoli from "../assets/imgs/logo-spaccanapoli.jpg";
import logoPizzaClub from "../assets/imgs/logo-pizza-club.png";

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
          <div className="footer-main-sponsor">
            <a
              href="https://share.google/7w69ID0gr0NL5pEj1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-partner footer-partner-goldbet"
              aria-label="Visita GoldBet Busnago"
            >
              <img src={logoGoldbet} alt="GoldBet Busnago" />
            </a>
          </div>

          <div className="footer-secondary-partners">
            {/* LEGA CALCIO A 8 BERGAMO */}
            <a
              href="https://www.instagram.com/legacalcioa8bergamo/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-partner footer-partner-league"
              aria-label="Visita Lega Calcio a 8 Bergamo"
            >
              <img src={logoLega} alt="Lega Calcio a 8 Bergamo" />
            </a>

            {/* E-RENT */}
            <a
              href="https://galdierirent.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-partner footer-partner-erent"
              aria-label="Visita E-Rent Car"
            >
              <img src={logoERent} alt="E-Rent Car" />
            </a>

            {/* PIZZA CLUB CAPRIATE */}
            <a
              href="https://pizzaclubnolimits.com/pizzaclub-nolimits/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-partner footer-partner-pizzaclub"
              aria-label="Visita Pizza Club Capriate"
            >
              <img src={logoPizzaClub} alt="Pizza Club Capriate" />
            </a>

            {/* SPACCANAPOLI 187 */}
            <a
              href="https://spaccanapoli187.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-partner footer-partner-spaccanapoli"
              aria-label="Visita Spaccanapoli 187"
            >
              <img src={logoSpaccanapoli} alt="Spaccanapoli 187" />
            </a>
          </div>
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
