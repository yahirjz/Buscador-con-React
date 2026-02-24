import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
}

// Definimois que necesita el componente para funcionar
export const ProductCard = ({id, title, price, thumbnail}: ProductCardProps) =>{
  return(
    <div className="product-card">
        <img className="product-card__img" src={thumbnail} alt={title}/>
        <div className="product-card__content">
            <h3 className="produc-card__price">{price}</h3>
            <p className="produc-card__title">{title}</p>
            <Link to={`/item/${id}`} className="product-card__button">
                Ver detalles
            </Link>
        </div>
    </div>
  )
}