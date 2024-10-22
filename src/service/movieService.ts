import AxiosInstance from "@/utils/axios";

class MovieService {

    static fetchNowPlaying = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static fetchRateMovie = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static fetchMovieDetail = async (id: string): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };

    static fetchRecomendationsMovie = async (id: number): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };

    static fetchFavorite = async (session_id: string): Promise<any> => {
        const account = process.env.REACT_APP_ACCOUNT_ID
        const session = session_id
        try {
            const response = await AxiosInstance.get(`/3/account/${account}/favorite/movies?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`);
            return response;
        } catch (e) {
            return e;
        }
    };

    static fetchWatchlistMovie = async (session_id: string): Promise<any> => {
        const account = process.env.REACT_APP_ACCOUNT_ID
        const session = session_id
        try {
            const response = await AxiosInstance.get(`/3/account/${account}/watchlist/movies?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static handleToogle = async (session_id: string, metode: string, payload: any): Promise<any> => {
        const account = process.env.REACT_APP_ACCOUNT_ID
        const session = session_id
        try {
            const response = await AxiosInstance.post(`/3/account/${account}/${metode}?api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`, payload);
            return response;
        } catch (e) {
            return e;
        }
    };

    static searchMovie = async (query: string): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };
}
export default MovieService;