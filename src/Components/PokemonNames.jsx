import { useNavigate } from "react-router-dom";
import pokeballimg from "../images/pokedex.png"



const PokemonNames = ({ pokemon, input }) => {
    const navigate = useNavigate()
    const ForFinding = (pokemon) => {
        return (
            pokemon.map((detail) => {
                if (((detail.name).toLowerCase()).startsWith(input.toLowerCase()) || (detail.dexentry == input)) {
                    return (
                        pokenames(detail)
                    )
                }
            })
        )

    }
    
    const pokenames = (detail) => {
        return(
            <div className="grid-item" key={detail.name} onClick={() => navigate(`/details/${detail.name}`)}>
                    <div className="imgholder">
                        <img className="pokeimage" src={detail.image} alt={detail.name + ".jpg"} />
                    </div>
                    <span className="pokenames"> {detail.name}</span>
                    <span><img className="pokeball" src={pokeballimg} /> {detail.dexentry}</span>
                    <div className="health"></div>
                    <span className="hp">HP / HP</span>
                    <div className="gif"></div>
                </div>
        )
    }
    const DisplayNames = (pokemon) => {

        return (
            pokemon.map((detail) => (
                pokenames(detail)
            ))
        )
    }

    return (
        pokemon?.length > 0 ?
            (
                <div className="grid-container">
                    {(() => {
                        if (input !== null && input !== "") {
                            return (
                                ForFinding(pokemon)

                            )
                        }
                        else {
                            return (
                                DisplayNames(pokemon)
                            )
                        }
                    }
                    )()}
                </div>
            ) :
            (<></>)

    );
};

export default PokemonNames;