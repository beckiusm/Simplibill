import React, {createContext, useState} from 'react';

export const StorageContext = createContext(null);

const StorageProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [customerListData, setCustomerListData] = useState(null);
    const [userData, setUserData] = useState(null);
    const [customerData, setCustomerData] = useState(null)

    const contextValues = {
        customerData,
        setCustomerData,
        isAuthenticated,
        setIsAuthenticated,
        customerListData,
        setCustomerListData,
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
