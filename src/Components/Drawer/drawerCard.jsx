import { useState } from "react";
import About from "../About/about";
import Stats from "../Stats/stats";
import FormaAlternativa from "../FormaAlternativa/formaAlternativa";
import BotaoTipos from "../BotaoTipos/botaoTipos";
import Loader from "../Loader/loader";
import BtnDetalhesPokemons from "../BtnDetalhesPokemons/btndetalhesPokemons";

function DrawerCard({ abreModal, setAbreModal, pokemon, cor }) {
    const [categoria, setCategoria] = useState(0)

    const closeModal = () => {
        setAbreModal(false);
    }

    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    }

    const mudaCategoria = (novaCategoria) => {
        setCategoria(novaCategoria)
    }

    return (
        <>
            {abreModal ? (
                <div id="modal-overlay" className="fixed duration-500 inset-0 bg-black bg-opacity-20 flex justify-center items-center z-30" onClick={handleClickOutside}>
                    <div className="rounded-[30px] w-[800px] h-[500px]" style={{ backgroundColor: cor }}>
                        <div className="flex justify-between p-10">
                            <div className="flex items-center gap-3">
                                <h1 className="text-white font-extrabold text-3xl">{pokemon.name}</h1>
                                <BotaoTipos pokemon={pokemon}/>
                            </div>
                            <span className=" text-5xl text-[#FFFFFF33] z-10">{`#${pokemon.id.toString().padStart(3, '000')}`}</span>
                        </div>
                        <div className="flex justify-center mt-3">
                            <Loader imageSrc={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} w={36} h={36}/>
                        </div>
                        <div className="bg-white w-full max-h-full h-[330px] rounded-t-[3rem] rounded-b-[3rem] p-10 -mt-5">
                            <BtnDetalhesPokemons categoria={categoria} mudaCategoria={mudaCategoria}/>
                            <div className="h-[1px] border"></div>
                            <div className="mt-5">
                                <About categoria={categoria} pokemon={pokemon}/>
                                <Stats categoria={categoria} pokemon={pokemon}/>
                                <FormaAlternativa categoria={categoria} pokemon={pokemon}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div id="modal-overlay" className="fixed -bottom-2/4 flex justify-center items-center" onClick={handleClickOutside}>
                    <div className="bg-red-950 p-5 rounded-xl">
                    </div>
                </div>
            )}
        </>
    );
}

export default DrawerCard;