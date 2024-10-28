function BuscaPokemon({pokemons, setPokemonsFiltrados}) {
    const filtraPokemon = (name) => {
        if (name === "") {
            setPokemonsFiltrados(pokemons);
        } else {
            const pokemonFiltrado = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
            setPokemonsFiltrados(pokemonFiltrado)
        }
    }
    
    return (  
        <div className="relative">
            <input id="buscarPokemon" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"placeholder="Pesquisar pokemon" onChange={(e) => filtraPokemon(e.target.value)}/>
        </div>
    );
}

export default BuscaPokemon;