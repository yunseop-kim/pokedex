import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import { client } from './index'
import PokemonList from './PokemonList'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My First React-GraphQL Pokedex App</h2>
        <PokemonList />
      </div>
    </ApolloProvider>
  );
}

export default App;
