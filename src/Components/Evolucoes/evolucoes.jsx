    function Evolucoes({ categoria, evolucoes }) {
        
        return (
            <div>
                {categoria === 2 && (
                    <div>
                        {evolucoes.map((detalhes, index) => (
                            <div key={index}>
                                {detalhes.chain.evolves_to.map((detalhe, idx) => (
                                    <div>
                                        <h1>{detalhe.species.name}</h1>
                                        <div key={idx}>
                                            {detalhe.evolution_details.map((evoDetail, evoIdx) => (
                                                <div key={evoIdx}>
                                                    <h1>{evoDetail.min_level}</h1>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    export default Evolucoes;