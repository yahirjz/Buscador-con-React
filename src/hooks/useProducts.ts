import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByQuery } from "../services/api";

export function useProducts() {
    const { query } = useParams (); //Leemos la URL 
    const [ products, setProducts ] = useState<any[]>([]) // Guardaremos la lista de productos que nos devolvera la API
    const [ loading, setLoading ] = useState (false)

    useEffect(()=>{
        if(query){
            // cambiamos el estado de carga a verdadero 
            setLoading(true); 
            //llamamos a la API
            getProductsByQuery(query)
            .then((data) => {
                setProducts(data.products);
                setLoading(false)
            })
            .catch(() => setLoading(false))
            
        }
    },[query]) // Si la URL cambia el Hook vuelve a ejecutarse 

    return{ products, loading, query}

}