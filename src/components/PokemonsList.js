import React, { useContext } from "react";
import { PokemonContext } from "../App";

const PokemonsList = () => {
  const {
    pokemons,
    setPokemons,
    capturedPokemons,
    setCapturedPokemons
  } = useContext(PokemonContext);

  const removePokemonfromList = removedPokemon =>
    pokemons.filter(pokemon => pokemon !== removedPokemon);

  const capture = pokemon => () => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
    setPokemons(removePokemonfromList(pokemon));
  };

  return (
    <div className="pokemons-list">
      <h2>Pokémons</h2>
      {pokemons.map(pokemon => (
        <div key={`${pokemon.id}=${pokemon.name}`}>
          <span>{pokemon.name}</span>
          <button onClick={capture(pokemon)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
