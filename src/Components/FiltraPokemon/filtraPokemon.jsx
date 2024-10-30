import PokemonCard from "../PokemonCard/pokemonCard";

function PokemonsFiltrados({ pokemonsFiltrados, evolucoes}) {

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center m-auto gap-x-10 gap-y-7 p-5 capitalize">
            {pokemonsFiltrados.map((pokemon, id) => (
                <PokemonCard key={id} pokemon={pokemon} dadosEvolucao={evolucoes} />
            ))}
        </div>
    );
}

export default PokemonsFiltrados;