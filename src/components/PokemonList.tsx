import React, { FC } from "react";
import "./pokemon.css";

interface Props {
  id: number;
  image: string;
  name: string;
}

const PokemonList: FC<Props> = (props) => {
  const { id, image, name } = props;

  return (
    <div className="">
      <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
      </section>
    </div>
  );
};

export default PokemonList;
