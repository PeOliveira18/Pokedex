function Stats({ categoria, pokemon }) {
    return (
        <div>
            {categoria === 1 && (
                <div>
                    {pokemon.stats.map((nome, index) => (
                        <div key={index} className="grid grid-cols-3">
                            <div>
                                <h1>{nome.stat.name}</h1>
                            </div>
                            <div>
                                <h1>{nome.base_stat}</h1>
                            </div>
                            <div className="h-1 rounded-full border">
                                {nome.base_stat < 50 ? (
                                    <div className={`bg-red-600 h-1 rounded-full `} style={{ width: `${nome.base_stat}%` }}></div>
                                ) : (
                                    <div className={`bg-blue-600 h-1 rounded-full `} style={{ width: `${nome.base_stat}%` }}></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Stats;