function Stats({ categoria, pokemon }) {
    const totalStats = pokemon.stats.reduce((acc, stat) => acc + stat.base_stat, 0)
    
    return (
        <div>
            {categoria === 1 && (
                <div>
                    {pokemon.stats.map((nome, index) => (
                        <div key={index} className="titulo-caracteristicas-pokemon grid-cols-[150px_80px_500px]">
                            <div>
                                <h1>{nome.stat.name}</h1>
                            </div>
                            <div>
                                <h1>{nome.base_stat}</h1>
                            </div>
                            <div className="h-1 rounded-full border">
                                {nome.base_stat < 50 ? (
                                    <div className={`bg-red-600 h-1 rounded-full `} style={{ width: `${nome.base_stat}%` }}></div>
                                ) : nome.base_stat >= 50 && nome.base_stat < 100 ? (
                                    <div className={`bg-blue-600 h-1 rounded-full `} style={{ width: `${nome.base_stat}%` }}></div>
                                ) :(
                                    <div className={`bg-green-600 h-1 rounded-full `} style={{ width: '100%'}}></div>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-[118px]">
                        <h1>Total</h1>
                        <h1>{totalStats}</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Stats;