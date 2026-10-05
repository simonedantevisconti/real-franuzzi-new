import calendario from "../data/calendario.json";

import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

import "../styles/calendario.css";

const Calendario = () => {
  const andata = calendario.filter((partita) => partita.fase === "Andata");

  const ritorno = calendario.filter((partita) => partita.fase === "Ritorno");

  const parseDataPartita = (partita) => {
    if (!partita.data) {
      return null;
    }

    const [giorno, mese, anno] = partita.data.split("/").map(Number);

    const [ore, minuti] = partita.ora
      ? partita.ora.split(":").map(Number)
      : [0, 0];

    return new Date(anno, mese - 1, giorno, ore, minuti);
  };

  const adesso = new Date();

  const prossimaPartita = calendario
    .filter((partita) => partita.data)
    .map((partita) => ({
      ...partita,
      dataCompleta: parseDataPartita(partita),
    }))
    .filter((partita) => partita.dataCompleta >= adesso)
    .sort((a, b) => a.dataCompleta - b.dataCompleta)[0];

  const getIndicazioniUrl = (indirizzo) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      indirizzo,
    )}`;
  };

  const renderPartita = (partita, index) => {
    const riposo = partita.trasferta === "RIPOSO";

    if (riposo) {
      return (
        <article
          className="match-card match-rest"
          key={partita.giornata}
          style={{
            animationDelay: `${index * 0.08}s`,
          }}
        >
          <div className="match-card-top">
            <span className="match-giornata">Giornata {partita.giornata}</span>

            <span className="match-date">Riposo</span>
          </div>

          <div className="match-rest-content">
            <span>FC Real Franuzzi</span>

            <strong>RIPOSO</strong>
          </div>
        </article>
      );
    }

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

        {partita.luogo && partita.indirizzo && (
          <div className="match-location">
            <div className="match-location-info">
              <span className="match-location-label">Campo</span>

              <strong>{partita.luogo}</strong>

              <span className="match-address">{partita.indirizzo}</span>
            </div>

            <a
              className="match-directions"
              href={getIndicazioniUrl(partita.indirizzo)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Indicazioni per ${partita.luogo}`}
            >
              Indicazioni
            </a>
          </div>
        )}

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
    <>
      <Seo
        title="Calendario FC Real Franuzzi | Calcio a 8 Bergamo"
        description="Consulta il calendario delle partite del FC Real Franuzzi nella Lega Calcio a 8 Bergamo. Scopri giornate, date, orari e risultati della stagione."
        path="/calendario"
        keywords="calendario FC Real Franuzzi, partite Real Franuzzi, calcio a 8 Bergamo, calendario calcio a 8 Bergamo, Lega Calcio a 8 Bergamo, risultati calcio a 8 Bergamo"
      />

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

            {prossimaPartita && (
              <div className="next-match">
                <div className="next-match-header">
                  <span>PROSSIMA GIORNATA</span>

                  <span className="next-match-giornata">
                    Giornata {prossimaPartita.giornata}
                  </span>
                </div>

                <div className="next-match-main">
                  <div
                    className={`next-match-team ${
                      prossimaPartita.casa === "FC Real Franuzzi"
                        ? "next-match-team-real"
                        : ""
                    }`}
                  >
                    <span>Casa</span>

                    <strong>{prossimaPartita.casa}</strong>
                  </div>

                  <div className="next-match-center">
                    <span className="next-match-date">
                      {prossimaPartita.data}
                    </span>

                    <span className="next-match-vs">VS</span>

                    <span className="next-match-time">
                      {prossimaPartita.ora}
                    </span>
                  </div>

                  <div
                    className={`next-match-team next-match-team-away ${
                      prossimaPartita.trasferta === "FC Real Franuzzi"
                        ? "next-match-team-real"
                        : ""
                    }`}
                  >
                    <span>Trasferta</span>

                    <strong>{prossimaPartita.trasferta}</strong>
                  </div>
                </div>

                {prossimaPartita.luogo && prossimaPartita.indirizzo && (
                  <div className="next-match-location">
                    <div className="next-match-location-info">
                      <span>Campo</span>

                      <strong>{prossimaPartita.luogo}</strong>

                      <small>{prossimaPartita.indirizzo}</small>
                    </div>

                    <a
                      className="next-match-directions"
                      href={getIndicazioniUrl(prossimaPartita.indirizzo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Indicazioni per ${prossimaPartita.luogo}`}
                    >
                      Indicazioni
                    </a>
                  </div>
                )}
              </div>
            )}

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
    </>
  );
};

export default Calendario;
