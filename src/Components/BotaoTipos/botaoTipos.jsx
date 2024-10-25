import { corBotaoTipo } from "../../utils/coresBotao";
import { fotosTipos } from "../../utils/fotosTipos";

function BotaoTipos({pokemon}){
    return (  
        <>
            {pokemon.types.map((tipo, index) => {
                const cor = corBotaoTipo[tipo.type.name]
                const fotoTipo = fotosTipos[tipo.type.name]
                return (
                    <div key={index}>
                        <button key={index} className="rounded px-3 flex capitalize py-1 mt-2 text-white font-semibold bg-[#FFFFFF33] items-center gap-2" style={{background: cor}}>
                        <img src={fotoTipo} alt="" className="w-3 h-3" />
                        {tipo.type.name}
                        </button>
                    </div>
                    
                )
            })}
        </>
    );
}

export default BotaoTipos;