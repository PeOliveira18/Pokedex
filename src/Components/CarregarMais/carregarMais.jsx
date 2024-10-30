import { useState } from "react";

function CarregarMais({ setLimite }) {
    const [loadingShowMore, setLoadingShowMore] = useState(false);

    const carregarMais = () => {
        setLoadingShowMore(true);
        setLimite(prev => prev + 51);
        setTimeout(() => {
            setLoadingShowMore(false);
        }, 1000);
    };

    return (  
        <div className="flex justify-center">
            <button onClick={carregarMais} disabled={loadingShowMore} className="bg-blue-500 text-white p-2 rounded my-4">
                {loadingShowMore ? "Carregando..." : "Carregar Mais"}
            </button>
        </div>
    );
}

export default CarregarMais;
