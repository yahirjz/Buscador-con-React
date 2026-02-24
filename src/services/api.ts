const API_URL = "https://dummyjson.com/products";

export const getProductsByQuery = async(query: string) => {
    const response = await fetch(`${API_URL}/search?q=${query}`)
    //centralimos el manejo de errores
    if(!response.ok){
        throw new Error("Error al conectar al servidor")
    }
    //Si todo sale bien devolvemos la respuesta en formato JSON
    return response.json()
}