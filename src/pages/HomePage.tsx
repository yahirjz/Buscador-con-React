import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearchStore } from "../store/useSearchStore";

export function HomePage() {
  const history = useSearchStore((state) => state.history);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h2 className="home-page__title">Bienvenido a nuestra tienda</h2>
      
      {history.length > 0 ? (
        <div className="home-page__history">
          <p>Tus búsquedas recientes:</p>
          <ul className="history-list">
            {history.map((q) => (
              <li 
                key={q} 
                className="history-list__item"
                onClick={() => navigate(`/search/${q}`)}
              >
                🔍 {q}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="home-page__empty">Todavía no has buscado nada. ¡Empieza ahora!</p>
      )}
    </div>
  );
}