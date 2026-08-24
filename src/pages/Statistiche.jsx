import rosa from "../data/rosa.json";
import statistiche from "../data/statistiche.json";
import classificaData from "../data/classifica.json";

import "../styles/statistiche.css";

const ruoliGiocatori = [
  "Portiere",
  "Difensore",
  "Centrocampista",
  "Attaccante",
];

const Statistiche = () => {
  const classificaMarcatori = rosa
    .filter((persona) => ruoliGiocatori.includes(persona.ruolo))
    .map((giocatore) => {
      const nomeCompleto = `${giocatore.nome} ${giocatore.cognome}`.trim();

      const stats = statistiche[nomeCompleto] || {
        presenze: 0,
        assist: 0,
        gol: 0,
      };

      return {
        nome: giocatore.nome,
        cognome: giocatore.cognome,
        numero: giocatore.numero,
        ...stats,
      };
    })
    .sort((a, b) => {
      if (b.gol !== a.gol) {
        return b.gol - a.gol;
      }

      if (b.assist !== a.assist) {
        return b.assist - a.assist;
      }

      if (b.presenze !== a.presenze) {
        return b.presenze - a.presenze;
      }

      return a.cognome.localeCompare(b.cognome);
    });

  const classificaGenerale = [...classificaData]
    .map((squadra) => ({
      ...squadra,
      differenzaReti: squadra.golFatti - squadra.golSubiti,
    }))
    .sort((a, b) => {
      if (b.punti !== a.punti) {
        return b.punti - a.punti;
      }

      if (b.differenzaReti !== a.differenzaReti) {
        return b.differenzaReti - a.differenzaReti;
      }

      if (b.golFatti !== a.golFatti) {
        return b.golFatti - a.golFatti;
      }

      return a.squadra.localeCompare(b.squadra);
    });

  return (
    <div className="statistiche-page">
      <section className="statistiche-hero">
        <div className="page-container">
          <span className="statistiche-kicker">FC REAL FRANUZZI</span>

          <h1>
            I NOSTRI
            <br />
            <span>NUMERI.</span>
          </h1>

          <p>
            Classifica, gol, assist e presenze dei protagonisti della stagione.
          </p>
        </div>
      </section>

      <section className="statistiche-content">
        <div className="page-container">
          <nav
            className="statistiche-navigation"
            aria-label="Navigazione statistiche"
          >
            <a href="#classifica-generale">
              Classifica
              <span>↓</span>
            </a>

            <a href="#classifica-marcatori">
              Marcatori
              <span>↓</span>
            </a>
          </nav>

          {/* CLASSIFICA GENERALE */}

          <section className="statistiche-section" id="classifica-generale">
            <div className="statistiche-heading">
              <div>
                <span>STAGIONE</span>
                <h2>Classifica generale</h2>
              </div>
            </div>

            <div className="campionato-wrapper">
              <div className="campionato-header">
                <span>Pos.</span>
                <span>Squadra</span>
                <span>PG</span>
                <span>V</span>
                <span>N</span>
                <span>P</span>
                <span>GF</span>
                <span>GS</span>
                <span>DR</span>
                <span>PT</span>
              </div>

              <div className="campionato-body">
                {classificaGenerale.map((squadra, index) => {
                  const isRealFranuzzi = squadra.squadra === "FC Real Franuzzi";

                  return (
                    <div
                      className={`campionato-row ${
                        isRealFranuzzi ? "campionato-row-real" : ""
                      }`}
                      key={squadra.squadra}
                      style={{
                        animationDelay: `${index * 0.06}s`,
                      }}
                    >
                      <div className="campionato-posizione">{index + 1}</div>

                      <div className="campionato-squadra">
                        <strong>{squadra.squadra}</strong>
                      </div>

                      <div>{squadra.giocate}</div>
                      <div>{squadra.vittorie}</div>
                      <div>{squadra.pareggi}</div>
                      <div>{squadra.sconfitte}</div>
                      <div>{squadra.golFatti}</div>
                      <div>{squadra.golSubiti}</div>

                      <div>
                        {squadra.differenzaReti > 0
                          ? `+${squadra.differenzaReti}`
                          : squadra.differenzaReti}
                      </div>

                      <div className="campionato-punti">{squadra.punti}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="statistiche-note">
              PG = Partite giocate · V = Vittorie · N = Pareggi · P = Sconfitte
              · GF = Gol fatti · GS = Gol subiti · DR = Differenza reti · PT =
              Punti
            </p>
          </section>

          {/* CLASSIFICA MARCATORI */}

          <section className="statistiche-section" id="classifica-marcatori">
            <div className="statistiche-heading">
              <div>
                <span>FC REAL FRANUZZI</span>
                <h2>Classifica marcatori</h2>
              </div>

              <p>Ordinata per gol, assist e presenze.</p>
            </div>

            <div className="classifica-wrapper">
              <div className="classifica-header">
                <span className="classifica-posizione">Pos.</span>

                <span className="classifica-giocatore">Giocatore</span>

                <span>PG</span>
                <span>Assist</span>
                <span>Gol</span>
              </div>

              <div className="classifica-body">
                {classificaMarcatori.map((giocatore, index) => {
                  const nomeCompleto =
                    `${giocatore.nome} ${giocatore.cognome}`.trim();

                  return (
                    <div
                      className={`classifica-row ${
                        index < 3 ? `classifica-top-${index + 1}` : ""
                      }`}
                      key={nomeCompleto}
                      style={{
                        animationDelay: `${index * 0.06}s`,
                      }}
                    >
                      <div className="classifica-posizione">
                        <span>{index + 1}</span>
                      </div>

                      <div className="classifica-giocatore">
                        {giocatore.numero !== null && (
                          <span className="classifica-numero">
                            {giocatore.numero}
                          </span>
                        )}

                        <div>
                          {giocatore.nome && (
                            <span className="classifica-nome">
                              {giocatore.nome}
                            </span>
                          )}

                          <strong>{giocatore.cognome}</strong>
                        </div>
                      </div>

                      <div className="classifica-stat">
                        <span className="mobile-label">Partite</span>

                        {giocatore.presenze}
                      </div>

                      <div className="classifica-stat">
                        <span className="mobile-label">Assist</span>

                        {giocatore.assist}
                      </div>

                      <div className="classifica-stat classifica-gol">
                        <span className="mobile-label">Gol</span>

                        {giocatore.gol}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="statistiche-note">PG = Partite giocate</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Statistiche;
