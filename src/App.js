// https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/
import React, { createContext, useState } from "react";
import PokemonsList from "./components/PokemonsList";
import CapturedPokemons from "./components/CapturedPokemons";
import "./styles.css";

export const PokemonContext = createContext();

export const PokemonProvider = props => {
  const [pokemons, setPokemons] = useState([
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Charmander" },
    { id: 3, name: "Squirtle" }
  ]);

  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const providerValue = {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default function App() {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <CapturedPokemons />
      </div>
    </PokemonProvider>
  );
}
