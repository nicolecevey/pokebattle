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
    });
  };

  battleStart = () => {
    console.log(this.state.pokeList);
    let poke1HP = this.state.poke1HP;
    let poke2HP = this.state.poke2HP;
    // let winner;
    if (poke1HP > poke2HP) {
      let newPoke1HP = poke1HP - poke2HP;
      this.setState({
        winner: this.state.pokemonOne.name,
        poke1HP: newPoke1HP,
      });
      this.fetchRandomPokemon2();
    } else {
      let newPoke2HP = poke2HP - poke1HP;
      this.setState({
        winner: this.state.pokemonTwo.name,
        poke2HP: newPoke2HP,
      });
      this.fetchRandomPokemon1();
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   let filteredList = [...this.state.pokeList];
  //   const currentPoke1 = this.state.pokemonOne;
  //   const prevPoke1 = prevState.pokemonOne;
  //   const currentPoke2 = this.state.pokemonTwo;
  //   const prevPoke2 = prevState.pokemonTwo;
  //   if (currentPoke1 !== prevPoke1 || currentPoke2 !== prevPoke2) {
  //     let filtedredPoke = filteredList.find(
  //       (poke) =>
  //         poke.name === this.state.pokemonOne.name || this.state.pokemonTwo.name
  //     );
  //     let filteredIndex = filteredList.indexOf(filtedredPoke);
  //     filteredList.splice(filteredIndex, 1);
  //     this.setState({
  //       pokeList: filteredList,
  //     });
  //   }
  //   console.log(this.state.filteredList)
  // }

  render() {
    // this.state.pokeList && console.log(this.state.pokeList);
    // this.state.pokemonOne && console.log(this.state.pokemonOne);
    return (
      <>
        <main className="main">
          {this.state.pokemonOne && (
            <PokeCardOne
              poke1HP={this.state.poke1HP}
              poke1={this.state.pokemonOne}
            />
          )}
          <div className="attack">
            <img src={versus} className="vs-icon"></img>
            <button onClick={this.battleStart} className="attack__button">
              Attack!
            </button>
            <h2>Winner is: {this.state.winner}</h2>
          </div>
          {this.state.pokemonTwo && (
            <PokeCardTwo
              poke2HP={this.state.poke2HP}
              poke2={this.state.pokemonTwo}
            />
          )}
        </main>
      </>
    );
  }
}

export default HomePage;
