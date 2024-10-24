function About({ categoria, pokemon }) {
    return (
        <div>
            {categoria === 0 && (
                <div className="flex flex-col">
                    <div className="titulo-caracteristicas-pokemon">
                        <h1>Altura</h1>
                        <h1 className="caracteristicas-pokemon">{pokemon.height} cm</h1>
                    </div>
                    <div className="titulo-caracteristicas-pokemon">
                        <h1>Peso</h1>
                        <h1 className="caracteristicas-pokemon">{pokemon.weight} Kg</h1>
                    </div>
                    <div className="titulo-caracteristicas-pokemon">
                        <h1>Habilidades</h1>
                        <h1 className="caracteristicas-pokemon">
                            {`${pokemon.abilities[0]?.ability.name || ''}${pokemon.abilities[1] ? ', ' + pokemon.abilities[1]?.ability.name : ''}${pokemon.abilities[2] ? ', ' + pokemon.abilities[2]?.ability.name : ''}`}
                        </h1>

                    </div>
                </div>
            )}
        </div>
    );
}

export default About;