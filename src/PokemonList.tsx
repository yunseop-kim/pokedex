import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  {
    pokemons(first: 10) {
      number
      name
      image
    }
  }
`;

const PokemonList: React.FC = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return data.pokemons.map((item: { number: number; name: string, image: string }) => (
    <div key={item.number}>
      <p>
        {item.number}: {item.name}
      </p>
    </div>
  ));
};

export default PokemonList;