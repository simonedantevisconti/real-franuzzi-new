import calendario from "../data/calendario.json";
import PageHero from "../components/PageHero";
import "../styles/calendario.css";

const Calendario = () => {
  const andata = calendario.filter((partita) => partita.fase === "Andata");

  const ritorno = calendario.filter((partita) => partita.fase === "Ritorno");

  const renderPartita = (partita, index) => {
    const partitaGiocata =
      partita.golCasa !== null && partita.golTrasferta !== null;

    const realInCasa = partita.casa === "FC Real Franuzzi";

    const golReal = realInCasa ? partita.golCasa : partita.golTrasferta;

    const golAvversario = realInCasa ? partita.golTrasferta : partita.golCasa;

    let risultatoClass = "";

    if (partitaGiocata) {
      if (golReal > golAvversario) {
        risultatoClass = "match-win";
      } else if (golReal < golAvversario) {
        risultatoClass = "match-loss";
      } else {
        risultatoClass = "match-draw";
      }
    }

    return (
      <article
        className={`match-card ${risultatoClass}`}
        key={partita.giornata}
        style={{
          animationDelay: `${index * 0.08}s`,
        }}
      >
        <div className="match-card-top">
          <span className="match-giornata">Giornata {partita.giornata}</span>

          <span className="match-date">{partita.data}</span>
        </div>

        <div className="match-content">
          <div
            className={`match-team ${
              partita.casa === "FC Real Franuzzi" ? "match-team-real" : ""
            }`}
          >
            <span className="match-team-label">Casa</span>

            <strong>{partita.casa}</strong>
          </div>

          <div className="match-center">
            {partitaGiocata ? (
              <div className="match-score">
                <span>{partita.golCasa}</span>

                <small>-</small>

                <span>{partita.golTrasferta}</span>
              </div>
            ) : (
              <>
                <span className="match-vs">VS</span>

                <span className="match-time">{partita.ora}</span>
              </>
            )}
          </div>

          <div
            className={`match-team match-team-away ${
              partita.trasferta === "FC Real Franuzzi" ? "match-team-real" : ""
            }`}
          >
            <span className="match-team-label">Trasferta</span>

            <strong>{partita.trasferta}</strong>
          </div>
        </div>

        {partitaGiocata && (
          <div className="match-result-label">
            {golReal > golAvversario && "VITTORIA"}
            {golReal < golAvversario && "SCONFITTA"}
            {golReal === golAvversario && "PAREGGIO"}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="calendario-page">
      <PageHero
        titleTop="IL NOSTRO"
        titleHighlight="CAMMINO."
        description="Tutte le partite della stagione, dall'andata al ritorno."
        backgroundText="MATCH"
      />

      <section className="calendario-content">
        <div className="page-container">
          <div className="calendario-intro">
            <span>STAGIONE</span>

            <h2>Calendario partite</h2>

            <p>
              Segui il cammino del FC Real Franuzzi nella Lega Calcio a 8
              Bergamo.
            </p>
          </div>

          <div className="calendario-fase">
            <div className="calendario-fase-header">
              <h2>Andata</h2>
            </div>

            <div className="matches-list">
              {andata.map((partita, index) => renderPartita(partita, index))}
            </div>
          </div>

          <div className="calendario-fase">
            <div className="calendario-fase-header">
              <h2>Ritorno</h2>
            </div>

            <div className="matches-list">
              {ritorno.map((partita, index) => renderPartita(partita, index))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendario;
