import "../styles/page-hero.css";

const PageHero = ({
  kicker = "FC REAL FRANUZZI",
  titleTop,
  titleHighlight,
  description,
  backgroundText,
}) => {
  return (
    <section
      className="page-hero"
      style={{
        "--page-hero-background-text": `"${backgroundText}"`,
      }}
    >
      <div className="page-container">
        <span className="page-hero-kicker">{kicker}</span>

        <h1>
          {titleTop}
          <br />
          <span>{titleHighlight}</span>
        </h1>

        {description && <p>{description}</p>}
      </div>
    </section>
  );
};

export default PageHero;
