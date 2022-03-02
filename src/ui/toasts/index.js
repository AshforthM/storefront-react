import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastError = (error) => toast.error(error,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

export {toastError};