import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const getPokemon = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=30"
  );
  return response.data.results;
};

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await getPokemon();
      setPokemonList(pokemon);
    };
    fetchPokemon();
  }, []);

  return (
    <ol>
      <h2>HOME</h2>
      {pokemonList.map((pokemon, index) => {
        return (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        );
      })}
    </ol>
  );
}
