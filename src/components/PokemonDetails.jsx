import axios from "axios";

const getPokemonDetails = async ({ params }) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${params}`
  );
  return response.data;
};

export default getPokemonDetails;
