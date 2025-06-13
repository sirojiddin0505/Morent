import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usefavoriteStore = create(
    persist(
        (set, get) => ({
            favorite: [],
            addFavorites: (car) => set((state) => ({favorite:[...state.favorite, car]})),
            removeFavorites:(id) => set((state) => ({favorite:state.favorite.filter(item => item.id !== id)})),
            isFavorite : (id) => {
                return get().favorite.some(item => item.id === id);
            }
        }),
        {
            name:"Favorite-car"
        }
    )
)