import rosa from "../data/rosa.json";

import fallbackImage from "../assets/imgs/user.webp";

import "../styles/rosa.css";

const playerImages = import.meta.glob("../assets/players/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const imagesByName = Object.fromEntries(
  Object.entries(playerImages).map(([path, url]) => {
    const fileName = path.split("/").pop();

    return [fileName, url];
  }),
);

const getImage = (imageName) => {
  if (!imageName) {
    return fallbackImage;
  }

  const fileName = imageName.split("/").pop();

  return imagesByName[fileName] || fallbackImage;
};

const sections = [
  {
    titolo: "Portieri",
    ruoli: ["Portiere"],
  },
  {
    titolo: "Difensori",
    ruoli: ["Difensore"],
  },
  {
    titolo: "Centrocampisti",
    ruoli: ["Centrocampista"],
  },
  {
    titolo: "Attaccanti",
    ruoli: ["Attaccante"],
  },
  {
    titolo: "Staff",
    ruoli: ["Allenatore", "Presidente", "Dirigente"],
  },
];

const Rosa = () => {
  return (
    <div className="rosa-page">
      <section className="rosa-hero">
        <div className="page-container">
          <span className="rosa-kicker">FC REAL FRANUZZI</span>

          <h1>
            LA NOSTRA
            <br />
            <span>ROSA</span>
          </h1>

          <p>I protagonisti della nuova stagione del FC Real Franuzzi.</p>
        </div>
      </section>

      <section className="rosa-content">
        <div className="page-container">
          {sections.map((section) => {
            const people = rosa.filter((person) =>
              section.ruoli.includes(person.ruolo),
            );

            if (people.length === 0) {
              return null;
            }

            return (
              <div className="rosa-role-section" key={section.titolo}>
                <div className="rosa-role-header">
                  <h2>{section.titolo}</h2>
                </div>

                <div className="rosa-grid">
                  {people.map((person, index) => {
                    const firstImage = getImage(person["immagine-1"]);

                    const secondImage = person["immagine-2"]
                      ? getImage(person["immagine-2"])
                      : firstImage;

                    const fullName = `${person.nome} ${person.cognome}`.trim();

                    const hasSecondImage =
                      person["immagine-2"] && secondImage !== firstImage;

                    return (
                      <article
                        className="player-card"
                        key={`${person.nome}-${person.cognome}-${index}`}
                      >
                        <div className="player-image-wrapper">
                          <img
                            src={firstImage}
                            alt={fullName}
                            className="player-image player-image-primary"
                            loading="lazy"
                          />

                          {hasSecondImage && (
                            <img
                              src={secondImage}
                              alt=""
                              aria-hidden="true"
                              className="player-image player-image-secondary"
                              loading="lazy"
                            />
                          )}

                          <div className="player-image-overlay"></div>

                          {person.numero !== null && (
                            <span className="player-number">
                              {person.numero}
                            </span>
                          )}

                          <span className="player-role">{person.ruolo}</span>
                        </div>

                        <div className="player-info">
                          <h3>
                            {person.nome && <span>{person.nome}</span>}

                            <strong>{person.cognome}</strong>
                          </h3>

                          {person.descrizione && <p>{person.descrizione}</p>}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Rosa;
