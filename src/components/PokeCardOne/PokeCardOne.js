import "../PokeCardOne/PokeCardOne.scss";

function PokeCardOne(props) {
  const poke1 = props.poke1;
  const poke1HP = props.poke1HP;
  return (

    <section className={props.className}>
      {/* <h1>Pokemon Card</h1> */}
      <img className="pokecard__image" src={poke1.image} alt={poke1.name} />
      <div className="details">
        <h1 className="details__name">{poke1.name}</h1>
        <div className="details__hp-bar">
          <p className="details__hp">Health: {poke1HP}</p>
        </div>
      </div>
      <div className="desc">
        <h2 className="desc__title">Description</h2>
        <p className="desc__text">{poke1.description}</p>
        <img className="desc__artwork" src={poke1.artwork} alt="artwork" />
        <div className="desc__ability-container">
          <p className="desc__ability">Ability 1: {poke1.ability1}</p>
          {poke1.ability2 && (
            <p className="desc__ability">Ability 2: {poke1.ability2}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PokeCardOne;
