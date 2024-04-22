"use client"
import { Provider } from 'react-redux'
import { store } from './store';
import React from 'react';


const storeProvider = ({ children }: any) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default storeProvider;