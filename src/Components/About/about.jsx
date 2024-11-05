function About({ categoria, pokemon }) {
    return (
        <div>
            {categoria === 0 && (
                <div className="titulo-caracteristicas-pokemon grid-cols-[100px_200px] ">
                        <h1>Altura</h1>
                        <h1 className="caracteristicas-pokemon">{pokemon.height} cm</h1>
                        <h1>Peso</h1>
                        <h1 className="caracteristicas-pokemon">{pokemon.weight} Kg</h1>
                        <h1>Habilidades</h1>
                        <h1 className="caracteristicas-pokemon w-96">
                            {`${pokemon.abilities[0]?.ability.name || ''}${pokemon.abilities[1] ? ', ' + pokemon.abilities[1]?.ability.name : ''}${pokemon.abilities[2] ? ', ' + pokemon.abilities[2]?.ability.name : ''}`}
                        </h1>
                </div>
            )}
        </div>
    );
}

export default About;