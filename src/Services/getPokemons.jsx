import axios from "axios"

export const getPokemons = async (limitePokemons) => {
    try {
        const endpoints = [];
        for (let i = 1; i <= limitePokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            if (endpoints.length === limitePokemons || i === limitePokemons) {
                const response = await axios.all(endpoints.map(endpoint => axios.get(endpoint)));
                return response.map(res => res.data);
                endpoints.length = 0;
            }
        }
    } catch (error) {
        console.log(`Erro ao buscar o pokemon. ${error}`);
    }
}





