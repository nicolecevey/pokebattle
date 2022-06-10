import "../PokeCardOne/PokeCardOne.scss";

function PokeCardTwo(props) {
  const poke2 = props.poke2;
  return (
    <section className="pokecard">
      {/* <h1>Pokemon Card</h1> */}
      <img className="pokecard__image" src={poke2.image} alt={poke2.name} />
      <div className="details">
        <h1 className="details__name">{poke2.name}</h1>
        <div className="details__hp">Health: {poke2.healthPoint}</div>
      </div>
      <div className="desc">
        <h2 className="desc__title">Description</h2>
        <p className="desc__text">{poke2.description}</p>
        <img className="desc__artwork" src={poke2.artwork} alt="artwork" />
        <p className="desc__ability">Ability 1: {poke2.ability1}</p>
        {poke2.ability2 && (
          <p className="desc__ability">Ability 2: {poke2.ability2}</p>
        )}
      </div>
    </section>
  );
}

export default PokeCardTwo;
