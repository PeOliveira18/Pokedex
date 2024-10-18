import styled from "styled-components";
import Header from "./Components/Header/header";
import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard/pokemonCard";
import { getPokemons } from "./Api/api";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const dados = await getPokemons();
      setPokemons(dados);
      setPokemonsFiltrados(dados);
    };
    fetchPokemons();
  }, []);

  const filtraPokemon = (name) => {
    if (name === "") {
      setPokemonsFiltrados(pokemons);
    } else {
      const pokemonFiltrado = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
      setPokemonsFiltrados(pokemonFiltrado)
    }
  }

  return (
    <AppContainer>
      <Header />
      <div className="relative">
        <input id="buscarPokemon" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"placeholder="Pesquisar pokemon" onChange={(e) => filtraPokemon(e.target.value)}/>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-5 p-5 capitalize">
        {pokemonsFiltrados.map((pokemon, id) => (
          <PokemonCard key={id} pokemon={pokemon} />
        ))}
      </div>
    </AppContainer>
  )
}

export default App;
