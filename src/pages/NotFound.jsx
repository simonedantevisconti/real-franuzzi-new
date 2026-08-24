import { Link } from "react-router-dom";

import logo from "../assets/imgs/logo.webp";

import "../styles/not-found.css";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-glow not-found-glow-blue"></div>
      <div className="not-found-glow not-found-glow-yellow"></div>

      <div className="page-container not-found-container">
        <div className="not-found-content">
          <span className="not-found-kicker">FC REAL FRANUZZI</span>

          <div className="not-found-number" aria-hidden="true">
            404
          </div>

          <h1>
            PALLONE
            <br />
            <span>FUORI CAMPO.</span>
          </h1>

          <p>La pagina che stai cercando non esiste oppure è stata spostata.</p>

          <Link to="/" className="not-found-button">
            <strong>Torna alla Homepage</strong>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="not-found-visual" aria-hidden="true">
          <div className="not-found-logo-ring">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
