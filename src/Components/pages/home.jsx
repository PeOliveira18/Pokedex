import { useEffect, useState } from "react";
import { AppContainer } from "../../App";
import Header from "../Header/header.jsx";
import { getPokemons } from "../../Services/getPokemons.jsx";
import Skeletons from "../Skeletons/skletons.jsx";
import PokemonsFiltrados from "../FiltraPokemon/filtraPokemon.jsx";
import BuscaPokemon from "../BuscaPokemon/buscaPokemon";

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])
    const [limite, setLimite] = useState(51)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const dados = await getPokemons(limite)
            setPokemons(dados)
            setPokemonsFiltrados(dados)
            setLoading(false)
        }
        fetchPokemons()
    }, [limite]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
                setLimite(prev => prev + 51)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <AppContainer>
            <Header/>
            <BuscaPokemon pokemons={pokemons} setPokemonsFiltrados={setPokemonsFiltrados} />
            {pokemons.length === 0 && loading ? (
                <Skeletons arr={limite} />
            ) : (
                <PokemonsFiltrados pokemonsFiltrados={pokemonsFiltrados} />
            )}
        </AppContainer>
    );
}

export default Home;
