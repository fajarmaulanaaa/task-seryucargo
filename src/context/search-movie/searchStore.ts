import { SearchMovieModel } from "@/models/searchMovieModel";
import { WatchlistMovieModel } from "@/models/watchlistModel";
import MovieService from "@/service/movieService";
import { showMessageError } from "@/utils/reactToastify";
import { create } from "zustand";

type WatchlistState = {
    loadingSearch: boolean;
    dataResult: SearchMovieModel | null;
    handleSearchMovie: (query: string) => void;

}

const searchStore = create<WatchlistState>((set) => ({
    loadingSearch: false,
    dataResult: null,
    handleSearchMovie: async (query) => {
        try {
            set({ loadingSearch: true })
            const res = await MovieService.searchMovie(query);
            if (res.status === 200) {
                set({ dataResult: res.data, loadingSearch: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataResult: null, loadingSearch: false, });
        }
    },

}));
export default searchStore;