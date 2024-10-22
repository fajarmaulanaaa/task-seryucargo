import { TypeOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showMessageSuccess = (message: string) => {
  toast.success(message);
};

export const showMessageError = (message: string) => {
  toast.error(message);
};

export const showMessageWarning = (message: string) => {
  toast.warning(message);
};

export const showMessageInfo = (message: string) => {
  toast.info(message);
};

export const showLoading = (id: any, message: string, tipe: TypeOptions) => {
  toast.update(id, { render: message, type: tipe, isLoading: false, autoClose: 3000 });
}; 