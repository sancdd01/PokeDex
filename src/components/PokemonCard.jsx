import React, { useContext, useEffect } from "react";
import { myPokemon } from "../App";
import { useNavigate } from "react-router-dom";

function safeAlert(message) {
  if (typeof window !== "undefined") {
    alert(message);
  } else {
    console.log(message);
  }
}

export const addOrDropPokemonToMyTeam = (
  pokemon,
  caughtPokemon,
  setCaughtPokemon
) => {
  const alreadyCaught = caughtPokemon.find((p) => p.name === pokemon.name);
  if (alreadyCaught) {
    setCaughtPokemon(caughtPokemon.filter((p) => p.name !== pokemon.name));
  } else {
    if (caughtPokemon.length < 6) {
      setCaughtPokemon([...caughtPokemon, pokemon]);
    } else {
      if (typeof window !== "undefined") {
        safeAlert(
          "Your team is full! You can't have more than 6 Pokemon in your team."
        );
      } else {
        console.log(
          "Your team is full! You can't have more than 6 Pokemon in your team."
        );
      }
    }
  }
};

const pickBackGroundColor = (type) => {
  switch (type) {
    case "fire":
      return "red";
    case "water":
      return "blue";
    case "ground":
    case "rock":
      return "brown";
    case "psychic":
    case "poison":
      return "purple";
    case "electric":
      return "yellow";
    case "grass":
      return "green";
    default:
      return "gray";
  }
};

const PokemonCard = ({
  name,
  pokemonImg,
  type,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
}) => {
  const { caughtPokemon, setCaughtPokemon } = useContext(myPokemon);
  const navigate = useNavigate();

  const handleCatchRelease = () => {
    addOrDropPokemonToMyTeam(
      { name, pokemonImg, type, moveOne, moveTwo, moveThree, moveFour },
      caughtPokemon,
      setCaughtPokemon
    );
    navigate("/team/");
  };

  useEffect(() => {
    console.log(caughtPokemon);
  }, [caughtPokemon]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      className="card-div"
      style={{ backgroundColor: pickBackGroundColor(type) }}
    >
      <div>
        <h3>{name}</h3>
        <img src={pokemonImg} alt={name} />
      </div>
      <ul className="moves-list">
        <li className="moves-item">{moveOne}</li>
        <li className="moves-item">{moveTwo}</li>
        <li className="moves-item">{moveThree}</li>
        <li className="moves-item">{moveFour}</li>
      </ul>
      <div>
        <button onClick={handleGoHome}>Home</button>
        <button onClick={handleCatchRelease}>Catch / Release</button>
      </div>
    </div>
  );
};

// export default PokemonCard;
export { PokemonCard as default, pickBackGroundColor };
