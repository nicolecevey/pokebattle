import "./PageNav.scss";
import pokeball from  "../../assets/images/PngItem_1830162.png"

function PageNav() {

    return(
        <nav className="nav">
            <img 
                src={pokeball}
                className="nav__pokeball"/>
            <img 
                src="https://fontmeme.com/permalink/220610/81463fe97b74ca39bcec963b3ee184e3.png" 
                alt="pokemon-font" border="0"/>
            <img 
                className="nav__pokeball"
                src={pokeball}/>
        </nav>
    )
}

export default PageNav;