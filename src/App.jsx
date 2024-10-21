import styled from "styled-components";
import Header from "./Components/Header/header";
import { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard/pokemonCard";
import { getPokemons } from "./Services/getPokemons";
import Skeletons from "./Components/Skeletons/skletons";
import DrawerCard from "./Components/Drawer/drawerCard";
import { getEvolutionChain } from "./Services/getEvolutions";

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

function App() {
  const [pokemons, setPokemons] = useState([])
  // const [evolucoes, setEvolucoes] = useState([])
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
  const [loading, setLoading] = useState(true)
  const limiteCardsPokemons = 151

  useEffect(() => {
    const fetchPokemons = async () => {
      const dados = await getPokemons(limiteCardsPokemons)
      // const evolucoes = await GetEvolutionChain(limiteCardsPokemons)
      setPokemons(dados)
      // setEvolucoes(evolucoes)
      setPokemonsFiltrados(dados)
      setLoading(false)
    };
    fetchPokemons()
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
      {pokemons.length === 0 ? (
        <Skeletons arr={limiteCardsPokemons}/>
      ) : (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-5 p-5 capitalize">
        {pokemonsFiltrados.map((pokemon, id) => (
          <PokemonCard key={id} pokemon={pokemon}/>
        ))}
      </div>
      )}
    </AppContainer>
  )
}

export default App;
