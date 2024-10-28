    import { useState } from 'react';
    import { corBotaoTipo } from '../../utils/coresBotao';
    import { fotosTipos } from '../../utils/fotosTipos';


    function PesquisaPorTipo({ tipos, pokemons, setPokemonsFiltrados }) {
        const [tipoSelecionado, setTipoSelecionado] = useState(null)

        const filtraPorTipo = (tipo) => {
            setTipoSelecionado(tipo);
            const pokemonsFiltrados = pokemons.filter(pokemon => 
                pokemon.types.some(t => t.type.name === tipo)
            );
            setPokemonsFiltrados(pokemonsFiltrados);
        };
        

        return (
            <div className='flex rounded-full bg-white lg:py-5 md:py-8 py-12 px-5 gap-3 max-w-full h-auto lg:w-2/5 w-3/4 flex-wrap justify-center items-center mt-5 shadow-2xl shadow-slate-400'> 
                {tipos.results && tipos.results.map((tipo, index) => {
                    const fotoTipo = fotosTipos[tipo.name]
                    const corTipo = corBotaoTipo[tipo.name]
                    return (
                        <div key={index} className='flex'>
                            <button className='rounded-full p-2' style={{background: corTipo}} onClick={() => filtraPorTipo(tipo.name)}>
                                <img src={fotoTipo} alt={tipo.name} className='h-6 w-6'/>
                            </button>
                        </div>
                    );
                })}
            </div>
        )
    }

    export default PesquisaPorTipo;