import "../styles/competition-toggle.css";

const CompetitionToggle = ({ value, onChange }) => {
  return (
    <div
      className="competition-toggle"
      role="group"
      aria-label="Seleziona competizione"
    >
      <button
        type="button"
        className={`competition-toggle__button ${
          value === "Campionato" ? "is-active" : ""
        }`}
        onClick={() => onChange("Campionato")}
        aria-pressed={value === "Campionato"}
      >
        Campionato
      </button>

      <button
        type="button"
        className={`competition-toggle__button ${
          value === "Coppa" ? "is-active" : ""
        }`}
        onClick={() => onChange("Coppa")}
        aria-pressed={value === "Coppa"}
      >
        Coppa
      </button>
    </div>
  );
};

export default CompetitionToggle;
