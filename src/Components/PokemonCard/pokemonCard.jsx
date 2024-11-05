import { useState } from "react";
import { coresTipos } from "../../utils/coresTipos";
import DrawerCard from "../Drawer/drawerCard";
import BotaoTipos from "../BotaoTipos/botaoTipos";

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
                        <BotaoTipos pokemon={pokemon}/>
                    </div>
                </div>
                <div className="flex relative items-end">
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="w-40 h-40 z-20"/>
                    <span className="absolute right-7 -top-1 text-5xl text-[#FFFFFF33] z-10">{`#${pokemon.id.toString().padStart(3, '000')}`}</span>
                </div>
            </div>
            <DrawerCard abreModal={abreModal} setAbreModal={setAbreModal} pokemon={pokemon} evolucoes={dadosEvolucao} cor={cor}/>
        </>
    );
}

export default PokemonCard;
