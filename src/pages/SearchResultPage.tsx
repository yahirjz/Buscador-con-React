import React from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";

const SearchResultPage = () => {
    // usamos el componente hooks que nos dara el rsultado del producto
    const { products, loading, query } = useProducts();
    if(loading) return <div className="loader">Buscando poducto</div>

    return(
        <div>
            <section className="search-result">
                <h1 className="search-result__title">
                    Resultados para: <span>{query}</span>
                </h1>
            </section>

            <div className="search-result__grid">
                {products.map((item)=>(
                    //Pasamos los datos al componente
                    <ProductCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        thumbnail={item.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchResultPage;