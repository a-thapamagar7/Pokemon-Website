import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PokemonNames from "./Components/PokemonNames";
import './App.css';
import NavBar from "./Components/NavBar"
import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form"
import PokemonDetails from "./Components/PokemonDetails";
import About from "./Components/About";

const App = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const [pokemon, SetPokemon] = useState(null);
  const [input, SetInput] = useState(null);
  const [button, SetButton] = useState(false);

  const Inputgain = () => {
    SetButton(!button);
  }

  useEffect(() => {
    SetInput(document.querySelector(".search-field").value);
  }, [button])
  //to get data of pokemon from external api
  const getPokemon = async () => {
    const response = await axios.get(url);
    const padImgs = forImg((response.data).results);  // this returns the data with 00 w/e you are trying to do
    SetPokemon(padImgs);
  }

  //add 00 to the index of pokemons and also assigns image url to the useState pokemon
  const forImg = (poke) => {
    const pokeData = poke;
    for (let i = 0; i < pokeData.length; i++) {
      let index = i + 1;
      pokeData[i]["dexentry"] = index;
      index = index.toString();
      if (index.length < 3) {
        index = index.padStart(3, "0");
      }
      let imgurl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;
      pokeData[i]["image"] = imgurl;
      pokeData[i].name = capital(pokeData[i].name)
    }
    return pokeData;
  }

  //to make first letters capital
  function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  useEffect(() => {
    getPokemon();
  }, [url])

  return (
    <div className="app">
      <NavBar Inputgain={Inputgain} />
      <Routes>
        <Route path="/Pokemon-Website/" element={<PokemonNames pokemon={pokemon} input={input} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:name" element={<PokemonDetails />} />
      </Routes>
    </div>

  );
};

export default App;