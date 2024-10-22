import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { AxiosInstance } from 'axios';

let errorShown = false;

const AxiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const onRequest = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    try {
        config.headers.Authorization = `Bearer ${process.env.REACT_APP_TOKEN_KEY}`;

        return config;
    } catch (error) {
        console.error('Error in onRequest:', error);
        return Promise.reject(error);
    }
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => {
    if (response.status === 401) {
        console.log('Anda belum Login, Login Dahulu!');
    }
    return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    if (error.message === 'Network Error') {
        if (!errorShown) {
            console.log('Terjadi kesalahan jaringan!');
            errorShown = true;
        }
    }

    return Promise.reject(error);
};

AxiosInstance.interceptors.request.use(onRequest, onRequestError);
AxiosInstance.interceptors.response.use(onResponse, onResponseError);

export default AxiosInstance;

