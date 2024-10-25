import { useState } from "react";
import pokebola from "../../images/pokeball.svg"

function Loader({imageSrc, alt, w, h}) {
    const [loading, setLoading] = useState(true)

    const handleImageLoad = () => {
        setLoading(false)
    }

    return (  
        <>
            {loading && <div className="flex items-center">
                            <img src={pokebola} alt="Carregando" className="animate-pulse w-3h-36 h-36"/>
                        </div>
            }
            <img src={imageSrc} alt={alt} className={`w-${w} h-${h}`} onLoad={handleImageLoad} style={{display: loading ? "none" : "block"}}/>
        </>
    );
}

export default Loader;