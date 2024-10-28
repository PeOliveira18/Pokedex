import foto from '../../images/pokeapi.png';

function Header() {
    return (
        <header className='flex flex-col justify-center items-center bg-amber-200 p-5'>
            <div>
                <img src={foto} alt="PokeApi"/>
            </div>
        </header>
    );
}

export default Header;
