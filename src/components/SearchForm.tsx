import React from "react";

interface SearchFormProps {
    onSubmit: (query: string) => void;
}

export const SearchForm = ({ onSubmit}: SearchFormProps) =>{

    const handleSubmit = (e: any ) => {
        e.preventDefault();
        const query = e.target.search.value;
        
        if(query.trim()){
            onSubmit(query); // se ejecuta la navegacion del Layout.tsx
        }
    }

    return(
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
            name="search"
            className="search-form__input"
            type="text"/>
            <button className="search-form__button">Buscar</button>
        </form>
    )
}