import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const PokemonCardContent = ({
  pokemonName,
  moveOne,
  moveTwo,
  moveThree,
  moveFour,
}) => {
  return (
    <Card.Body className="card-body">
      <Card.Title>{pokemonName}</Card.Title>
      <Container className="container">
        <Row className="row">
          <Col className="col">{moveOne}</Col>
          <Col className="col">{moveTwo}</Col>
          <Col className="col">{moveThree}</Col>
          <Col className="col">{moveFour}</Col>
        </Row>
      </Container>
    </Card.Body>
  );
};

export default PokemonCardContent;
