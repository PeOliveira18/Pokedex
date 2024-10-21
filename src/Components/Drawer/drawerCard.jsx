import { useEffect, useState } from "react";
import { getEvolutionChain } from "../../Services/getEvolutions";

function DrawerCard({abreModal, setAbreModal, pokemon}) {
    const limitePokemons = 151
    const [evolucoes, setEvolucoes] = useState([])

    useEffect(() => {
        const fetchEvlucoes = async () => {
            const dadosEvolucoes = await getEvolutionChain(limitePokemons)
            setEvolucoes(dadosEvolucoes)
        }
        fetchEvlucoes()
    },[])

    const closeModal = () => {
        setAbreModal(false);
    }

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    }

    return (
        <>
            {abreModal ? (
                <div id="modal-overlay" className="fixed duration-500 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10" onClick={handleClickOutside}>
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
                        {evolucoes.evolution_details.map((detalhes,index) => (
                        <h1 key={index}>{detalhes.evolves_to.evolution_details.min_level}</h1>
                        ))}
                    </div>
                </div>
            ):(
                <div id="modal-overlay" className="fixed -bottom-2/4 flex justify-center items-center z-10" onClick={handleClickOutside}>
                    <div className="bg-red-950 p-5 rounded-xl">
                        <h1>testando</h1>
                    </div>
                </div>
            )}
        </>
    );
}

export default DrawerCard;