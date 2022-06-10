import React from "react";
import "./HomePage.scss"
import versus from "../../assets/vs.png"
import PokeCard from "../../components/PokeCard/PokeCard";
import axios from "axios";

const pokemonEndpoint = "http://localhost:8080/pokemon";

class HomePage extends React.Component {

    componentDidMount(){
        document.title = "PokeBattle";

        axios
            .get(pokemonEndpoint)
            .then((response) => {
                console.log(response.data);
            })

    }

    render() {
        return (
            <>  
                <main className="main">
                    <PokeCard/>
                    <div className="attack">
                        <img 
                            src={versus}
                            className="vs-icon"
                            >
                        </img>
                        <button>Attack</button>
                    </div>
                    <PokeCard/>
                </main>
            </>
        )
    }
}

export default HomePage;