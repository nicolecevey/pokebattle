import React from "react";
import "./HomePage.scss"
import versus from "../../assets/vs.png"
import PokeCardOne from "../../components/PokeCardOne/PokeCardOne";
import PokeCardTwo from "../../components/PokeCardTwo/PokeCardTwo";
import axios from "axios";

const pokemonEndpoint = "http://localhost:8080/pokemon";

class HomePage extends React.Component {

    state = {
        pokemonOne: null,
        pokemonTwo: null,
    }

    componentDidMount(){
        document.title = "PokeBattle";

        axios
            .get(`${pokemonEndpoint}/random`)
            .then((response) => {
                this.setState({
                    pokemonOne: response.data,
                    pokemonTwo: response.data
                })
            })
    }

    fetchPokemons = () => {
        return axios.get(pokemonEndpoint);
    }

    render() {
        return (
            <>  
                <main className="main">
                    <PokeCardOne 
                        poke1={this.state.pokemonOne}/>
                    <div className="attack">
                        <img 
                            src={versus}
                            className="vs-icon"
                            >
                        </img>
                        <button>Attack</button>
                    </div>
                    <PokeCardTwo 
                        poke2={this.state.pokemonTwo}/>
                </main>
            </>
        )
    }
}

export default HomePage;