import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import React from "react";
import PokemonCard, { pickBackGroundColor } from "./components/PokemonCard";

export const myPokemon = React.createContext({
  caughtPokemon: [],
  setCaughtPokemon: () => {},
});

// export const MyPokemon = ({ children }) => (
//   <myPokemon.Provider>{children}</myPokemon.Provider>
// );

function App() {
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  return (
    <>
      <div>
        <myPokemon.Provider value={{ caughtPokemon, setCaughtPokemon }}>
          <header>
            <Header />
          </header>
          <main>
            <Outlet />
          </main>
        </myPokemon.Provider>
      </div>
    </>
  );
}

export default App;
