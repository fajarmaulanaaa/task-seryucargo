import AxiosInstance from "@/utils/axios";

class AuthService {

    static getNewToken = async (): Promise<any> => {
        try {
            const response = await AxiosInstance.get(`/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`);
            return response;
        } catch (e) {
            return e;
        }
    };
    static createNewToken = async (payload: any): Promise<any> => {
        try {
            const response = await AxiosInstance.post(`/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`, payload);
            return response;
        } catch (e) {
            return e;
        }
    };
    static deleteSession = async (payload: any): Promise<any> => {
        try {
            const response = await AxiosInstance.delete(`/3/authentication/session?api_key=${process.env.REACT_APP_API_KEY}`, { data: payload });
            return response;
        } catch (e) {
            return e;
        }
    };


}

export default AuthService