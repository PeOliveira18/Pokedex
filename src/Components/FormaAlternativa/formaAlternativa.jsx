import { useState } from "react";
import Loader from "../Loader/loader";

function FormaAlternativa({categoria, pokemon}) {
    const [loading, setLoading] = useState(true)

    const handleImageLoad = () => {
        setLoading(false)
    }

    return (  
        <div>
            {categoria == 3 && (
                <div className="flex justify-center">
                    <Loader imageSrc={pokemon.sprites.other['official-artwork'].front_shiny} alt={pokemon.name} w={40} h={40}/>
                </div>
            )}
        </div>
    );
}

export default FormaAlternativa;