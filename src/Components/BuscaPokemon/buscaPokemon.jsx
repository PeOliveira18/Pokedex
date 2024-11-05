import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { getPokemons } from "../../Services/getPokemons";

function BuscaPokemon({ pokemons, setPokemonsFiltrados }) {
    const [todosPokemons, setTodosPokemons] = useState([]);
    
    useEffect(() => {
        const fetchAllPokemons = async () => {
            const allPokemons = await getPokemons(1025)
            setTodosPokemons(allPokemons)
        }
        fetchAllPokemons()
    }, [])

    const filtraPokemon = useCallback(
        debounce((name) => {
            if (name === "") {
                setPokemonsFiltrados(todosPokemons)
            } else {
                const pokemonFiltrado = todosPokemons.filter((pokemon) =>
                    pokemon.name.toLowerCase().includes(name.toLowerCase())
                )
                setPokemonsFiltrados(pokemonFiltrado)
            }
        }, 300),
        [todosPokemons]
    )

    const handleChange = (e) => {
        filtraPokemon(e.target.value)
    }
    
    return (  
        <div className="relative">
            <input 
                id="buscarPokemon"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Pesquisar pokemon"
                onChange={handleChange}
            />
        </div>
    );
}

export default BuscaPokemon;
