import { NowPlayingModel } from "@/models/nowPlayingModel";
import MovieService from "@/service/movieService";
import { showMessageError } from "@/utils/reactToastify";
import { create } from "zustand";

type RateMovieState = {
    loadingNowPlaying: boolean;
    dataNowPlaying: NowPlayingModel | null;
    getDataNowPlaying: () => void;

}

const nowPlayingStore = create<RateMovieState>((set) => ({
    loadingNowPlaying: true,
    dataNowPlaying: null,
    getDataNowPlaying: async () => {
        try {
            const res = await MovieService.fetchNowPlaying();
            if (res.status === 200) {
                set({ dataNowPlaying: res.data, loadingNowPlaying: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataNowPlaying: null, loadingNowPlaying: false, });
        }
    }

}));
export default nowPlayingStore;