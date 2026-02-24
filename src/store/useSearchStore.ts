import { create } from 'zustand';

interface SearchState {
    history: string[];
    addSearchToHistory: (query: string) => void;


}
//Dependendcias donde guardaremos los datos que queremos compartir 
export const useSearchStore = create<SearchState>((set) =>({
    history: [],
    addSearchToHistory: (query: string) => set((state) =>{
        //limpiamos el query para evitar duplicado 
        const newHistory = [query, ...state.history.filter(q => q !== query)].slice(0,3)
        return {history: newHistory}
    })
}));    