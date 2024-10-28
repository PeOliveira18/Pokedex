import { AppContainer } from "../../App";
import Header from "../Header/header.jsx";
import { useEffect, useState } from "react";
import { getPokemons } from "../../Services/getPokemons.jsx";
import Skeletons from "../Skeletons/skletons.jsx";
import PokemonsFiltrados from "../FiltraPokemon/filtraPokemon.jsx";
import BuscaPokemon from "../BuscaPokemon/buscaPokemon";
import { getTypes } from "../../Services/getTypes.jsx";
import CarregarMais from "../CarregarMais/carregarMais.jsx";

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
    // const [tipos, setTipos] = useState([])
    // const [evolucoes, setEvolucoes] = useState([])
    const [limite, setLimite] = useState(51)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true)
            const dados = await getPokemons(limite)
            // const dadosTipos = await getTypes()
            // const dadosEvolucoes = await getEvolutionChain(limite)
            setPokemons(dados)
            // setEvolucoes(dadosEvolucoes)
            setPokemonsFiltrados(dados)
            setLoading(false)
        }
        fetchPokemons()
    }, [limite])

    return (
        <AppContainer>
            <Header/>
            <BuscaPokemon pokemons={pokemons} setPokemonsFiltrados={setPokemonsFiltrados} />
            {pokemons.length === 0 && loading ? (
                <Skeletons arr={limite} />
            ) : (
                <PokemonsFiltrados pokemons={pokemons} pokemonsFiltrados={pokemonsFiltrados} setPokemonsFiltrados={setPokemonsFiltrados}/>
            )}
            <CarregarMais setLimite={setLimite}/>
        </AppContainer>
    );
}

export default Home;