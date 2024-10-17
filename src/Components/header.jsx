import foto from '../images/pokeapi.png'

function Header() {
    return (  
        <div className='flex justify-center bg-amber-200 p-5'>
            <img src={foto} alt="PokeApi" />
        </div>
    );
}

export default Header;