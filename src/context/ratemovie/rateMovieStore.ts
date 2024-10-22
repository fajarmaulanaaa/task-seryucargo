import { RatingMovieModel } from "@/models/ratingMovieModel";
import { TopRateMovieModel } from "@/models/topRateMovieModel";
import MovieService from "@/service/movieService";
import RateUserService from "@/service/rateUserService";
import { showMessageError, showMessageSuccess } from "@/utils/reactToastify";
import { create } from "zustand";

type RateMovieState = {
    loadingRateMovie: boolean;
    dataRateMovie: TopRateMovieModel | null;
    getDataRatemovie: () => void;


    popUpRating: boolean;
    setPopUpRating: (value: boolean) => void;

    dataRateUser: RatingMovieModel | null;
    getRateUser: (session: string) => void;

    giftRateMovie: (session: string, movie_id: number, value: number) => void;
    deleteRateMovie: (session: string, movie_id: number) => void;

}

const rateMovieStore = create<RateMovieState>((set) => ({
    loadingRateMovie: true,
    dataRateMovie: null,
    getDataRatemovie: async () => {
        try {
            const res = await MovieService.fetchNowPlaying();
            if (res.status === 200) {
                set({ dataRateMovie: res.data, loadingRateMovie: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataRateMovie: null, loadingRateMovie: false, });
        }
    },

    popUpRating: false,
    setPopUpRating: (value) => { set({ popUpRating: value }) },

    dataRateUser: null,
    getRateUser: async (session) => {
        try {
            const res = await RateUserService.getUserRating(session);
            if (res.status === 200) {
                set({ dataRateUser: res.data });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataRateUser: null });
        }
    },
    giftRateMovie: async (session, movie_id, value) => {
        const payload = {
            value: value
        }
        const { getRateUser } = rateMovieStore.getState()
        try {
            const res = await RateUserService.giftUserRating(session, movie_id, payload);
            if (res.status === 200 || res.status === 201) {
                set({ popUpRating: false })
                getRateUser(session)
                showMessageSuccess(res.data.status_message)
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataRateUser: null });
        }
    },
    deleteRateMovie: async (session, movie_id) => {
        const { getRateUser } = rateMovieStore.getState()
        try {
            const res = await RateUserService.deleteRating(session, movie_id);
            if (res.status === 200 || res.status === 201) {
                set({ popUpRating: false })
                getRateUser(session)
                showMessageSuccess(res.data.status_message)
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataRateUser: null });
        }
    }

}));
export default rateMovieStore;