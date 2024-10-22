import AuthService from "@/service/authService";
import { showMessageError, showMessageSuccess } from "@/utils/reactToastify";
import { create } from "zustand";

type RateMovieState = {
    popUpLogin: boolean;
    setPopUpLogin: (value: boolean) => void;

    loadingLogin: boolean;

    handleRequestToken: () => void;
    handleCreateSession: (request_token: string) => void;

    loadingDelete: boolean;
    handleDeleteSession: (session_id: string) => void;

}

const authStore = create<RateMovieState>((set) => ({
    popUpLogin: false,
    setPopUpLogin: (value) => {
        set({ popUpLogin: value })
    }
    ,
    loadingLogin: false,

    handleRequestToken: async () => {
        set({ loadingLogin: true, });
        try {
            const res = await AuthService.getNewToken();
            set({ loadingLogin: false, });
            console.log(res);
            if (res.status === 200) {
                window.location.href = `https://www.themoviedb.org/authenticate/${res.data.request_token}?redirect_to=http://localhost:3000`
            } else {
                showMessageError(res.response.data.status_message)
            }

        } catch (error) {
            console.error('Error Login', error);
            showMessageError('Something When Wrong')
            set({ loadingLogin: false, });
        }
    },

    handleCreateSession: async (request_token) => {
        set({ loadingLogin: true, popUpLogin: true });
        const payload = {
            "request_token": request_token
        }
        try {
            const res = await AuthService.createNewToken(payload);
            set({ loadingLogin: false, popUpLogin: false });
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem('session_id', btoa(res.data.session_id))
            } else {
                showMessageError(res.response.data.status_message)
            }

        } catch (error) {
            console.error('Error Login', error);
            showMessageError('Something When Wrong')
            set({ loadingLogin: false, });
        }
    },
    loadingDelete: false,
    handleDeleteSession: async (session_id) => {
        set({ loadingDelete: true, });
        const payload = {
            "session_id": session_id
        }
        try {
            const res = await AuthService.deleteSession(payload);
            set({ loadingDelete: false, });
            console.log(res);
            if (res.status === 200) {
                localStorage.removeItem('session_id')
                showMessageSuccess('Success Logout!')
            } else {
                showMessageError(res.response.data.status_message)
            }

        } catch (error) {
            console.error('Error Login', error);
            showMessageError('Something When Wrong')
            set({ loadingLogin: false, });
        }
    },

}));
export default authStore;