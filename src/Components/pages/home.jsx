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
    const [limite, setLimite] = useState(25)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true)
            const dados = await getPokemons(limite)
            setPokemons(dados)
            setPokemonsFiltrados(dados)
            setLoading(false)
        }
        fetchPokemons()
        
    }, [limite]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
                setLimite(prev => {
                    if(prev >= 1025) return prev
                    return prev + 50
                })
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[limite])


    return (
        <>
            <Header/>
            <BuscaPokemon pokemons={pokemons} setPokemonsFiltrados={setPokemonsFiltrados} />
            {pokemons.length === 0 && loading ? (
                <Skeletons arr={limite} />
            ) : (
                <PokemonsFiltrados pokemonsFiltrados={pokemonsFiltrados} />
            )}
        </>
    );
}

export default Home;
