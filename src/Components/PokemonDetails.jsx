import { useEffect } from "react";
import { useParams } from "react-router-dom"
import damageimg from "../images/damage.png"
import axios from "axios";
import { useState } from "react";

const PokemonDetails = () => {
    const parameter = useParams();
    const url = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${parameter.name}`;
    const [pokedetails, Setpokedetails] = useState();

    const getPokemon = async () => {
        const response = await axios.get(url);
        const poke = (response.data);  // this returns the data with 00 w/e you are trying to do
        Setpokedetails(poke)
    }

    useEffect(() => {
        getPokemon();
    }, [])

    const forimage = () => {
        var id = pokedetails.info.id
        id = id.toString();
        if (id.length < 3) {
            id = id.padStart(3, "0");
        }
        const imgurl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
        return (imgurl)

    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const movegrid = (answer) => {
        return (
            <div className="movegrid" key={answer.name}>
                <span>{answer.name ? (answer.name) : ("??")}</span>
                <span className="move">{answer.dp ? (answer.dp) : ("??")} <img src={damageimg} className="dmgimg" /> / {answer.type ? (capitalizeFirstLetter(answer.type)) : ("??")}</span>
            </div>
        )
    }

    return (
        pokedetails ?
            (
                <div className="bg">
                    <div className="detailsbg">
                        <img className="pokedimage" src={forimage()} />

                        <h1>{capitalizeFirstLetter(pokedetails.name)}</h1>
                        <div className="health"></div>
                        <span className="hp">{pokedetails.hp}/{pokedetails.hp} HP</span>
                        <div className="sum">
                            <div className="sum1 sum1b"><h6>PokedexNo.</h6><span className="type1">{pokedetails.info.id}</span></div>
                            <div className="sum1 sum1b"><h6>Type</h6><span className="type1">{capitalizeFirstLetter(pokedetails.info.type)}</span></div>
                            <div className="sum1"><h6>Weakness</h6><span className="type1">{capitalizeFirstLetter(pokedetails.info.weakness)}</span></div>
                        </div>
                        <div className="description">
                            <div className="d_heading">Description</div>
                            <div className="d_body">{capitalizeFirstLetter(pokedetails.info.description)}</div>
                        </div>
                        <div className="description">
                            <div className="a_heading">Moves</div>
                            <div className="a_body">
                                {(pokedetails.moves).map((answer) => {
                                    return (
                                        movegrid(answer)
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) :
            (<></>)
    )
}

export default PokemonDetails;