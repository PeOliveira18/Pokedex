import { useState } from "react";
import { coresTipos } from "./coresTipos";
import Spinner from "../Spinner/spinner";
import DrawerCard from "../Drawer/drawerCard";

function PokemonCard({ pokemon }) {
    const tipoPrincipal = pokemon.types[0].type.name
    const cor = coresTipos[tipoPrincipal]
    const [loading, setLoading] = useState(true)
    const [abreModal, setAbreModal] = useState(false)
    
    const handleModal = () => {
        setAbreModal(true)
    }
    const handleImage = () => {
        setLoading(false)
    }

    
    return (
        <>
            <div className="card-pokemon" style={{ backgroundColor: cor}} onClick={handleModal}>
                <p>{`#${pokemon.id.toString().padStart(3, '000')}`}</p>
                <p>{pokemon.name}</p>
                {pokemon.types.map((tipo, index) => (
                    <button key={index} className="rounded-full border px-3 flex capitalize py-1 mt-4">
                        {tipo.type.name}
                    </button>
                ))}
                <img src={pokemon.sprites.front_default} alt={pokemon.name} onLoad={handleImage}/>
            </div>
            <DrawerCard abreModal={abreModal} setAbreModal={setAbreModal} pokemon={pokemon}/>
        </>
    );
}

export default PokemonCard;
