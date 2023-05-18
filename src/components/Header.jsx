import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { myPokemon } from "../App";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = React.useState("");

  const { caughtPokemon } = useContext(myPokemon);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${searchTerm}`);
  };

  return (
    <header>
      <div className="header-div">
        <h1>POKEDEX</h1>
        <Link to="/">Home</Link>
        <Link to="/team/">My Team #{caughtPokemon.length}</Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
