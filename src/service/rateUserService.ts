import AxiosInstance from "@/utils/axios";

class RateUserService {

    static getUserRating = async (session_id: string): Promise<any> => {
        const account = process.env.REACT_APP_ACCOUNT_ID
        const session = session_id
        try {
            const response = await AxiosInstance.get(`/3/account/${account}/rated/movies?api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`);
            return response;
        } catch (e) {
            return e;
        }
    };

    static giftUserRating = async (session_id: string, movie_id: number, payload: any): Promise<any> => {
        const session = session_id
        try {
            const response = await AxiosInstance.post(`/3/movie/${movie_id}/rating?api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`, payload);
            return response;
        } catch (e) {
            return e;
        }
    }
    static deleteRating = async (session_id: string, movie_id: number): Promise<any> => {
        const session = session_id
        try {
            const response = await AxiosInstance.delete(`/3/movie/${movie_id}/rating?api_key=${process.env.REACT_APP_API_KEY}&session_id=${session}`);
            return response;
        } catch (e) {
            return e;
        }
    };
}

export default RateUserService