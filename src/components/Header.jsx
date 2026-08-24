import { NavLink, Link } from "react-router-dom";

import logo from "../assets/imgs/logo.webp";

import "../styles/header.css";

const Header = () => {
  const closeNavbar = () => {
    const navbar = document.getElementById("mainNavbar");

    if (navbar?.classList.contains("show")) {
      const bootstrap = window.bootstrap;

      if (bootstrap) {
        const collapse =
          bootstrap.Collapse.getInstance(navbar) ||
          new bootstrap.Collapse(navbar, {
            toggle: false,
          });

        collapse.hide();
      }
    }
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark franuzzi-navbar">
        <div className="container-fluid page-container">
          <Link
            className="navbar-brand franuzzi-brand"
            to="/"
            onClick={closeNavbar}
          >
            <img
              src={logo}
              alt="FC Real Franuzzi"
              className="franuzzi-brand-logo"
            />

            <div className="franuzzi-brand-text">
              <span>FC REAL</span>
              <strong>FRANUZZI</strong>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Apri menu di navigazione"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="mainNavbar"
          >
            <ul className="navbar-nav align-items-lg-center franuzzi-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Homepage
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/rosa"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Rosa
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/calendario"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Calendario
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/statistiche"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Statistiche
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contatti"
                  onClick={closeNavbar}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
