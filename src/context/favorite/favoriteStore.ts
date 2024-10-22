import { FavoriteMovieModel } from "@/models/favoriteModel";
import MovieService from "@/service/movieService";
import { showMessageError, showMessageSuccess } from "@/utils/reactToastify";
import { create } from "zustand";
import watchlistStore from "../watchlist/watchlistStore";

type FavoriteState = {
    loadingFavorite: boolean;
    dataFavorite: FavoriteMovieModel | null;
    getDataFavoriteMovie: (session: string) => void;

    handleToogleMovie: (id: number, session: string, value: boolean, metode: string) => void;

}

const favoriteStore = create<FavoriteState>((set) => ({
    loadingFavorite: true,
    dataFavorite: null,
    getDataFavoriteMovie: async (session) => {
        try {
            const res = await MovieService.fetchFavorite(session);
            if (res.status === 200) {
                set({ dataFavorite: res.data, loadingFavorite: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataFavorite: null, loadingFavorite: false, });
        }
    },
    handleToogleMovie: async (id, session, value, metode) => {
        const { getDataFavoriteMovie } = favoriteStore.getState();
        const { getDataWatchlistMovie } = watchlistStore.getState();
        const payload = {
            "media_id": id,
            "media_type": "movie",
            [metode]: value
        }
        try {
            const res = await MovieService.handleToogle(session, metode, payload);
            if (res.status === 201 || res.status === 200) {
                metode === 'favorite' ? getDataFavoriteMovie(session) : getDataWatchlistMovie(session)
                showMessageSuccess(res.data.status_message)
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error(error);
            set({ dataFavorite: null, loadingFavorite: false, });
        }
    }

}));
export default favoriteStore;