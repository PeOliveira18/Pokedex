import axios from "axios"

export const getEvolutionChain = async (idPokemons) => {
    try{
        var endpoint = []
        for (var i = 1; i <= idPokemons; i++){
            endpoint.push(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
        }

        const response = await axios.all(endpoint.map((endpoint) => axios.get(endpoint)))
        return response.map((res) => res.data)
    }catch (error){
        console.log(`Erro au buscar o pokemon. ${error}`)
    }
}