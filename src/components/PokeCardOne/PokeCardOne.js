import "../PokeCardOne/PokeCardOne.scss";

function PokeCardOne(props) {
  const poke1 = props.poke1;
  return (
    <section className="pokecard">
      {/* <h1>Pokemon Card</h1> */}
      <img className="pokecard__image" src={poke1.image} alt={poke1.name} />
      <div className="details">
        <h1 className="details__name">{poke1.name}</h1>
        <div className="details__hp">Health: {poke1.healthPoint}</div>
      </div>
      <div className="desc">
        <h2 className="desc__text">Description</h2>
        <img className="desc__artwork" src={poke1.artwork} alt="artwork" />
        <p className="desc__ability">Ability 1: {poke1.ability1}</p>
        {poke1.ability2 && (
          <p className="desc__ability">Ability 2: {poke1.ability2}</p>
        )}
      </div>
    </section>
  );
}

export default PokeCardOne;
