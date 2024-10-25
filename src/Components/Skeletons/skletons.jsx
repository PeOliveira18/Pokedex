import pokebola from "../../images/pokeball.svg"


function Skeletons({arr}) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 p-5">
            {Array.from({length: arr}).map((_, index) => (        
            <div key={index} role="status" className="flex justify-center gap-5 p-5 h-56 bg-gray-700 animate-pulse card-pokemon">
                <img src={pokebola} alt="Carregando" className="animate-spin"/>
            </div>
            ))}
        </div>
    );
}

export default Skeletons;