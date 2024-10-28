import { useEffect, useState } from "react";

function CarregarMais({ setLimite }) {
    const [loadingShowMore, setLoadingShowMore] = useState(false);

    const carregarMais = () => {
        setLoadingShowMore(true);
        setLimite(prev => prev + 51);
        
        // Simulação de uma chamada assíncrona
        // Você deve fazer a chamada real aqui se necessário
        setTimeout(() => {
            setLoadingShowMore(false); // Reinicia o estado após o carregamento
        }, 1000); // Duração do carregamento (1 segundo)
    };

    return (  
        <div className="flex justify-center">
            <button onClick={carregarMais} disabled={loadingShowMore} className="bg-blue-500 text-white p-2 rounded my-4">
                {loadingShowMore ? "Carregando..." : "Carregar Mais"} {/* Corrigido aqui */}
            </button>
        </div>
    );
}

export default CarregarMais;
