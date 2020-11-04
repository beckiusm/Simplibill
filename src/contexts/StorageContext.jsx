import React, {createContext, useState} from 'react';

export const StorageContext = createContext(null);

const StorageProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [customerData, setCustomerData] = useState(null);
    const [userData, setUserData] = useState(null);

    const contextValues = {
        isAuthenticated,
        setIsAuthenticated,
        customerData,
        setCustomerData,
        userData,
        setUserData
    }

    return (
        <StorageContext.Provider value={contextValues}>
            {children}
        </StorageContext.Provider>
    );
};

export default StorageProvider;
