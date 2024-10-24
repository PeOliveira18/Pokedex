    function Evolucoes({ categoria, evolucoes }) {
        
        return (
            <div>
                {categoria === 2 && (
                    <div>                          
                        <h1>{evolucoes.evolution_chain.url}</h1>
                    </div>
                )}
            </div>
        );
    }

    export default Evolucoes;