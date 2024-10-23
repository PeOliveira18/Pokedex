    import { useState } from "react";

    function DrawerCard({abreModal, setAbreModal, pokemon, evolucoes, cor}) {
        const closeModal = () => {
            setAbreModal(false);
        }

        const handleClickOutside = (e) => {
            if (e.target.id === 'modal-overlay') {
                closeModal();
            }
        }

        const [categoria, setCategoria] = useState(0)

        const mudaCategoria = (novaCategoria) => {
            setCategoria(novaCategoria)
        }

        return (
            <>
                {abreModal ? (
                    <div id="modal-overlay" className="fixed duration-500 inset-0 bg-black bg-opacity-20 flex justify-center items-center z-30" onClick={handleClickOutside}>
                        <div className="rounded-[30px] cursor-pointer w-[800px] h-[500px]" style={{ backgroundColor: cor}}>
                            <div className="flex justify-between p-10">
                                <div className="flex items-center gap-3">
                                    <h1 className="text-white font-extrabold text-3xl">{pokemon.name}</h1>
                                    {pokemon.types.map((tipo, index) => (
                                        <button key={index} className="rounded-full px-3 flex capitalize py-1 mt-2 text-white font-semibold bg-[#FFFFFF33]">
                                            {tipo.type.name}
                                        </button>
                                    ))}
                                </div>
                                <span className=" text-5xl text-[#FFFFFF33] z-10">{`#${pokemon.id.toString().padStart(3, '000')}`}</span>
                            </div>
                            <div className="flex justify-center mt-3">
                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="w-52 h-52 z-20"/>
                            </div>
                            <div className="bg-white w-full max-h-full h-[300px] rounded-t-[3rem] rounded-b-[3rem] p-10 -mt-5">
                                <div className="flex gap-7">
                                    <button className={`btn-card ${categoria === 0 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(0)}>Sobre</button>
                                    <button className={`btn-card ${categoria === 1 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(1)}>Stats base</button>
                                    <button className={`btn-card ${categoria === 2 ? 'btn-card-ativo' : ''}`} onClick={() => mudaCategoria(2)}>Evolucao</button>
                                </div>
                                <div className="h-[1px] border"></div>
                                <div className="mt-5">
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
                                                        <div className="bg-blue-600 h-1 rounded-full" style={{ width: `${nome.base_stat}%` }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {categoria === 2 && (
                                        <div>
                                            <h1>Evolucoes</h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ): (
                    <div id="modal-overlay" className="fixed -bottom-2/4 flex justify-center items-center" onClick={handleClickOutside}>
                        <div className="bg-red-950 p-5 rounded-xl">
                            <h1>{pokemon.name}</h1>
                            <h1>{pokemon.height}</h1>
                            <h1>{pokemon.weight}</h1>
                            {pokemon.abilities.map((habilidade, index) => (
                                <h1 key={index}>{habilidade.ability.name}</h1>
                            ))}
                            {pokemon.stats.map((nome, index) => (
                                <h1 key={index}>{nome.base_stat}, {nome.stat.name}</h1>
                            ))}
                            
                        </div>
                    </div>
                )}
            </>
        );
    }

    export default DrawerCard;