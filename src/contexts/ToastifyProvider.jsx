import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifyContext = createContext();
export const ToastifyProvider = ({ children }) => {
    const value = { toast };

    return (
        <ToastifyContext.Provider value={value}>
            {children}
            <ToastContainer />
        </ToastifyContext.Provider>
    );
};
