import foto from '../../images/pokeapi.png'
import pesquisa from '../../images/pesquisa.svg'
import { useState } from 'react';

function Header() {  
    const [search, setSearch] = useState("")

    const pegaNomePokemon = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search);
        
    }

    const handleSearch = () => {
        
    }

    return (  
        <header className='flex justify-between items-center bg-amber-200 p-5'>
            <div className=''>
                <img src={foto} alt="PokeApi" />
            </div>
            <form className="w-72">   
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src={pesquisa} alt="" className='w-4 h-4 text-gray-500 dark:text-gray-400'/>
                    </div>
                    <input type="search" id="buscarPokemon" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar pokemon" required onBlur={pegaNomePokemon}/>
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Pesquisar</button>
                </div>
            </form>

        </header>
    );
}

export default Header;