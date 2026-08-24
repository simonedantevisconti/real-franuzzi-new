import rosa from "../data/rosa.json";
import statistiche from "../data/statistiche.json";

import "../styles/statistiche.css";

const ruoliGiocatori = [
  "Portiere",
  "Difensore",
  "Centrocampista",
  "Attaccante",
];

const Statistiche = () => {
  const classifica = rosa
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

          <p>Gol, assist e presenze dei protagonisti della stagione.</p>
        </div>
      </section>

      <section className="statistiche-content">
        <div className="page-container">
          <div className="statistiche-heading">
            <div>
              <span>STAGIONE</span>
              <h2>Classifica marcatori</h2>
            </div>

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
              {classifica.map((giocatore, index) => {
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
        </div>
      </section>
    </div>
  );
};

export default Statistiche;
