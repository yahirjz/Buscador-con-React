import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SearchForm } from "./SearchForm";
import { useSearchStore } from "../store/useSearchStore";

export const Layout = () => {
    const navigate = useNavigate();
    // 
    
    const addSearchToHistory = useSearchStore((state) => state.addSearchToHistory);
    
    const handleSearch = (query: string ) => {
        addSearchToHistory(query) // Guardamos el historia global 
        navigate(`/search/${query}`); // Navegamos a la pagina de resultados
    }
    
    return(
        <div className="layout">
            <header className="layout__header">
                <div className="layout__header-container">
                    <h1 onClick={() => navigate("/")} style={{cursor: "pointer"}} >Buscador</h1>
                    < SearchForm onSubmit={handleSearch} />
                </div>    
            </header> 

            <main className="layout__content">
                {/** Aqui es donde React router inyecta la pagina actual */}
                <Outlet />
            </main>

            <footer className="layout__footer">
                <p>© 2026 Mi Tienda Pro - Aprendiendo Arquitectura</p>
            </footer>

        </div>
    )
}