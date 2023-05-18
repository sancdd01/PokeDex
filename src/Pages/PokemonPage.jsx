import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";
import getPokemonDetails from "../components/PokemonDetails";

const PokemonPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getPokemonDetails({ params: name }).then((data) => setData(data));
  }, [name]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const firstType = data.types[0]?.type?.name || "normal";
  const firstFourMoves = data.moves.slice(0, 4).map((move) => move.move.name);

  return (
    <PokemonCard
      name={data.name}
      pokemonImg={data.sprites.front_default}
      type={firstType}
      moveOne={firstFourMoves[0]}
      moveTwo={firstFourMoves[1]}
      moveThree={firstFourMoves[2]}
      moveFour={firstFourMoves[3]}
    />
  );
};

export default PokemonPage;
