import React, { FC, useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { Pokemon } from "./interface";

interface Pokemons {
  name: string;
  url: string;
}

const App: FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [nextUrl, setNextUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
  );

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);

      const res = await axios.get(nextUrl);

      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });
    };

    getPokemon();
  }, [nextUrl]);

  const handleNextPage = async () => {
    let res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="pokemon-header">Pokemon</div>
        <PokemonCollection pokemons={pokemons} />
        <div className="btn">
          <button className="loadmore" onClick={handleNextPage}>
            {loading ? "Loading" : "Load more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
