import React from "react";
import "./HomePage.scss";
import versus from "../../assets/images/vs.png";
import PokeCardOne from "../../components/PokeCardOne/PokeCardOne";
import PokeCardTwo from "../../components/PokeCardTwo/PokeCardTwo";
import axios from "axios";

const pokemonEndpoint = "http://localhost:8080/pokemon";

class HomePage extends React.Component {
  state = {
    pokemonOne: null,
    pokemonTwo: null,
    winner: "",
    poke1HP: "",
    poke2HP: "",
    pokeList: [],
    poke1Lost: false,
    poke2Lost: false,
  };
  componentDidMount() {
    document.title = "PokeBattle";
    this.fetchRandomPokemon1();
    this.fetchRandomPokemon2();
    this.fetchPokeList();
  }
  fetchPokeList = async () => {
    let pokeList = await axios.get(`${pokemonEndpoint}`).then((response) => {
      return response.data;
    });
    this.setState({
      pokeList: pokeList,
    });
  };
  fetchRandomPokemon1 = async () => {
    let pokemon1 = await axios
      .get(`${pokemonEndpoint}/random`)
      .then((response) => {
        return response.data;
      });
    this.setState({
      pokemonOne: pokemon1,
      poke1HP: pokemon1.healthPoint,
      poke1Lost: false,
    });
  };
  fetchRandomPokemon2 = async () => {
    let pokemon2 = await axios
      .get(`${pokemonEndpoint}/random`)
      .then((response) => {
        return response.data;
      });
    this.setState({
      pokemonTwo: pokemon2,
      poke2HP: pokemon2.healthPoint,
      poke2Lost: false,
    });
  };
  battleStart = () => {
    // console.log(this.state.pokeList);
    let poke1HP = this.state.poke1HP;
    let poke2HP = this.state.poke2HP;
    // let winner;
    if (poke1HP > poke2HP) {
      let newPoke1HP = poke1HP - poke2HP;
      this.setState({
        winner: this.state.pokemonOne.name,
        poke1HP: newPoke1HP,
        poke1Lost: false,
        poke2Lost: true,
      });
      setTimeout(() => {
        this.fetchRandomPokemon2();
      }, 3000);
    } else {
      let newPoke2HP = poke2HP - poke1HP;
      this.setState({
        winner: this.state.pokemonTwo.name,
        poke2HP: newPoke2HP,
        poke1Lost: true,
        poke2Lost: false,
      });
      setTimeout(() => {
        this.fetchRandomPokemon1();
      }, 3000);
    }
  };

  render() {
    console.log(this.state.poke1Lost, this.state.poke2Lost);
    // this.state.pokeList && console.log(this.state.pokeList);
    // this.state.pokemonOne && console.log(this.state.pokemonOne);
    return (
      <>
        <div className="bg-image">
          <main className="main">
            {this.state.pokemonOne && (
              <PokeCardOne
                className={
                  this.state.poke1Lost ? "pokecard pokecard__1" : "pokecard"
                }
                poke1HP={this.state.poke1HP}
                poke1={this.state.pokemonOne}
              />
            )}
            <div className="attack">
              <img src={versus} className="vs-icon"></img>
              <button onClick={this.battleStart} className="attack__button">
                Attack!
              </button>
              <h2 className="attack__winner">Winner is: {this.state.winner}</h2>
            </div>
            {this.state.pokemonTwo && (
              <PokeCardTwo
                className={this.state.poke2Lost ? "pokecard pokecard__2" : "pokecard"}
                poke2HP={this.state.poke2HP}
                poke2={this.state.pokemonTwo}
              />
            )}
          </main>
        </div>
      </>
    );
  }
}
export default HomePage;