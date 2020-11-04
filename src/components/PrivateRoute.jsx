import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {StorageContext} from "../contexts/StorageContext";

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useContext(StorageContext);
    return <Route
        {...rest}
        render={props =>(
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to='/'/>
            )
        )}
    />
}

export default PrivateRoute;
