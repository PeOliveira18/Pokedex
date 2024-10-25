import styled from "styled-components";
import Header from "./Components/Header/header";
import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard/pokemonCard";
import { getPokemons } from "./Services/getPokemons";
import Skeletons from "./Components/Skeletons/skletons";
import { getEvolutionChain } from "./Services/getEvolutions";
import PokemonsFiltrados from "./Components/FiltraPokemon/filtraPokemon";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

function App() {
  const [pokemons, setPokemons] = useState([])
  const [evolucoes, setEvolucoes] = useState([])
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
  const limiteCardsPokemons = 500

  const filtraPokemon = (name) => {
    if (name === "") {
        setPokemonsFiltrados(pokemons);
    } else {
        const pokemonFiltrado = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
        setPokemonsFiltrados(pokemonFiltrado)
    }
}

  useEffect(() => {
    const fetchPokemons = async () => {
      const dados = await getPokemons(limiteCardsPokemons)
      const dadosEvolucoes = await getEvolutionChain(limiteCardsPokemons)
      setPokemons(dados)
      setEvolucoes(dadosEvolucoes)
      setPokemonsFiltrados(dados)
    }
    fetchPokemons()
  }, []);

  return (
    <AppContainer>
      <Header />
      <div className="relative">
        <input id="buscarPokemon" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"placeholder="Pesquisar pokemon" onChange={(e) => filtraPokemon(e.target.value)}/>
      </div>
      {pokemons.length === 0 ? (
        <Skeletons arr={limiteCardsPokemons}/>
      ) : (
        <PokemonsFiltrados pokemons={pokemons} pokemonsFiltrados={pokemonsFiltrados} setPokemonsFiltrados={setPokemonsFiltrados} evolucoes={evolucoes}/>
      )}
    </AppContainer>
  )
}

export default App;
