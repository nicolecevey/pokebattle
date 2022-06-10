import React from "react";
import "./HomePage.scss";
import versus from "../../assets/vs.png";
import PokeCardOne from "../../components/PokeCardOne/PokeCardOne";
import PokeCardTwo from "../../components/PokeCardTwo/PokeCardTwo";
import axios from "axios";

const pokemonEndpoint = "http://localhost:8080/pokemon";

class HomePage extends React.Component {
  state = {
    pokemonOne: null,
    pokemonTwo: null,
  };

  componentDidMount() {
    document.title = "PokeBattle";
    this.fetchRandomPokemon();
  }

  fetchRandomPokemon = async () => {
    const pokemon1 = await axios
      .get(`${pokemonEndpoint}/random`)
      .then((response) => {
        return response.data;
      });
    const pokemon2 = await axios
      .get(`${pokemonEndpoint}/random`)
      .then((response) => {
        return response.data;
      });
    this.setState({
      pokemonOne: pokemon1,
      pokemonTwo: pokemon2,
    });
  };
  //   fetchPokemons = () => {
  //     return axios.get(pokemonEndpoint);
  //   };

  render() {
    this.state.pokemonOne && console.log(this.state.pokemonOne);
    return (
      <>
        <main className="main">
          {this.state.pokemonOne && (
            <PokeCardOne poke1={this.state.pokemonOne} />
          )}
          <div className="attack">
            <img src={versus} className="vs-icon"></img>
            <button>Attack</button>
          </div>
          {this.state.pokemonTwo && (
            <PokeCardTwo poke2={this.state.pokemonTwo} />
          )}
        </main>
      </>
    );
  }
}

export default HomePage;
