import axios from "axios"

export const getPokemons = async (limitePokemons) => {
    try {
        var endpoints = []
        for (var i = 1; i <= limitePokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }

        const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        return response.map((res) => res.data)
    } catch (error) {
        console.log(`Erro ao buscar o pokemon. ${error}`)
    }
}




