import axios from 'axios'

export const getTypes = async () => {
    try {
        const response = await axios.get(
            "https://pokeapi.co/api/v2/type?offset=0&limit=18"
        )

        return response.data        
    } catch (error) {
        console.log(`Erro ao buscar o pokemon. ${error}`)
    }
}