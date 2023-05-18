import React, { useContext } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { myPokemon } from "../App";
import { pickBackGroundColor } from "../components/PokemonCard";
import PokemonCard from "../components/PokemonCard";

const PokemonTeamPage = () => {
  const { caughtPokemon } = useContext(myPokemon);
  console.log(caughtPokemon);

  return (
    <div>
      <h2>MY POKEMON TEAM</h2>
      <Container>
        <Row>
          {caughtPokemon.length > 0 ? (
            caughtPokemon.map((pokemon, index) => (
              <Col key={index}>
                <PokemonCard
                  name={pokemon.name}
                  pokemonImg={pokemon.pokemonImg}
                  type={pokemon.type}
                  moveOne={pokemon.moveOne}
                  moveTwo={pokemon.moveTwo}
                  moveThree={pokemon.moveThree}
                  moveFour={pokemon.moveFour}
                />
              </Col>
            ))
          ) : (
            <Col>YOU DON'T HAVE ANY POKEMON</Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonTeamPage;
