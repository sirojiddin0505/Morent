import { create } from "zustand";

export const usefavoriteStore = create((set) => ({
    favorite: [],
    addFavorites: (car) => set((state) => ({favorite:[...state.favorite, car]})),
    removeFavorites:(id) => set((state) => ({favorite:state.favorite.filter(item => item.id !== id)}))
}))