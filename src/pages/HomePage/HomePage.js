import React from "react";
import "./HomePage.scss"
import versus from "../../assets/vs.png"
import PokeCard from "../../components/PokeCard/PokeCard";

class HomePage extends React.Component {


    render() {
        return (
            <>  
                <main className="main">
                    <PokeCard/>
                    <img src={versus}></img>
                    <PokeCard/>
                </main>
            </>
        )
    }
}

export default HomePage;