import { WatchlistMovieModel } from "@/models/watchlistModel";
import MovieService from "@/service/movieService";
import { showMessageError } from "@/utils/reactToastify";
import { create } from "zustand";

type WatchlistState = {
    loadingWatchlist: boolean;
    dataWatchlist: WatchlistMovieModel | null;
    getDataWatchlistMovie: (session: string) => void;

}

const watchlistStore = create<WatchlistState>((set) => ({
    loadingWatchlist: true,
    dataWatchlist: null,
    getDataWatchlistMovie: async (session) => {
        try {
            const res = await MovieService.fetchWatchlistMovie(session);
            if (res.status === 200) {
                set({ dataWatchlist: res.data, loadingWatchlist: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataWatchlist: null, loadingWatchlist: false, });
        }
    },

}));
export default watchlistStore;