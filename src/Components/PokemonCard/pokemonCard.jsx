import { coresTipos } from "./coresTipos";

function PokemonCard({ pokemon }) {
    const tipoPrincipal = pokemon.types[0].type.name
    const cor = coresTipos[tipoPrincipal]

    return (
        <div className="border-[1px] border-b-2 border-cyan-700 shadow-sm rounded p-5 items-center cursor-pointer hover:border-red-700 " style={{ backgroundColor: cor}}>
            <p>{`#${pokemon.id.toString().padStart(3, '000')}`}</p>
            <p>{pokemon.name}</p>
            {pokemon.types.map((tipo, index) => (
                <button key={index} className="rounded-full border px-3 flex capitalize py-1 mt-4">
                    {tipo.type.name}
                </button>
            ))}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}

export default PokemonCard;
