import { useState } from "react";
import { coresTipos } from "./coresTipos";
import DrawerCard from "../Drawer/drawerCard";

function PokemonCard({ pokemon, dadosEvolucao }) {
    const tipoPrincipal = pokemon.types[0].type.name
    const cor = coresTipos[tipoPrincipal]
    const [abreModal, setAbreModal] = useState(false)
    
    const handleModal = () => {
        setAbreModal(true)
    }

    return (
        <>
            <div className="card-pokemon" style={{ backgroundColor: cor, boxShadow: `0px 0px 15px 1px ${cor}`}} onClick={handleModal}>
                <div className="flex flex-col gap-10">
                    <div className="flex">
                        <p className="text-white font-extrabold text-3xl">{pokemon.name}</p>
                    </div>
                    <div className="">
                        {pokemon.types.map((tipo, index) => (
                            <button key={index} className="rounded-full px-3 flex capitalize py-1 mt-2 text-white font-semibold bg-[#FFFFFF33]">
                                {tipo.type.name}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex relative items-center">
                    <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} className="w-3h-32 h-32 z-20"/>
                    <span className="absolute right-7 -top-1 text-5xl text-[#FFFFFF33] z-10">{`#${pokemon.id.toString().padStart(3, '000')}`}</span>
                </div>
            </div>
            <DrawerCard abreModal={abreModal} setAbreModal={setAbreModal} pokemon={pokemon} evolucoes={dadosEvolucao} cor={cor}/>
        </>
    );
}

export default PokemonCard;
