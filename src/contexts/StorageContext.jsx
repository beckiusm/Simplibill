import React, {createContext, useState} from 'react';

export const StorageContext = createContext(null);

const StorageProvider = ({children}) => {

    const [token, setToken] = useState('');

    return (
        <StorageContext.Provider value={{token, setToken}}>
            {children}
        </StorageContext.Provider>
    );
};

export default StorageProvider;
