import React, { FC } from "react";
import { Pokemon } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCollection: FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <div>
      <h2>Pokemon List</h2>
      <section className="collection-container">
        {pokemons.map((pokemon) => {
          
          return <PokemonList 
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          />;
        })}
      </section>
    </div>
  );
};

export default PokemonCollection;
