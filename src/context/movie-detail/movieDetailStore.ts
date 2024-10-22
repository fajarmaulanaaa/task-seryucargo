
import { MovieDetailModel } from "@/models/movieDetailsModel";
import { RecomendationsModel } from "@/models/recomendationsModel";
import MovieService from "@/service/movieService";
import { showMessageError } from "@/utils/reactToastify";
import { create } from "zustand";

type RateMovieState = {
    loadingDetail: boolean;
    dataDetail: MovieDetailModel | null;
    getDataDetail: (id: string) => void;

    //recomendations
    loadingRecomendations: boolean;
    dataRecomendations: RecomendationsModel | null;
    getDataRecomendations: (id: number) => void;



}

const movieDetailStore = create<RateMovieState>((set) => ({
    loadingDetail: true,
    dataDetail: null,
    getDataDetail: async (id) => {
        try {
            const res = await MovieService.fetchMovieDetail(id);
            if (res.status === 200) {
                set({ dataDetail: res.data, loadingDetail: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataDetail: null, loadingDetail: false, });
        }
    },

    loadingRecomendations: true,
    dataRecomendations: null,
    getDataRecomendations: async (id) => {
        try {
            const res = await MovieService.fetchRecomendationsMovie(id);
            if (res.status === 200) {
                set({ dataRecomendations: res.data, loadingRecomendations: false, });
            } else {
                showMessageError(res.response.data.status_message)
            }
        } catch (error) {
            showMessageError('Something When Wrong')
            console.error('Error fetching now playing movies:', error);
            set({ dataRecomendations: null, loadingRecomendations: false, });
        }
    },

}));
export default movieDetailStore;