import React from 'react';
import {Redirect, Route} from "react-router-dom";
import User from "../data/User";

const PrivateRoute = ({component: Component, ...rest}) => {
    const token = User.loadToken();
    return <Route
        {...rest}
        render={props =>(
            token ? (
                <Component {...props} />
            ) : (
                <Redirect to='/'/>
            )
        )}
    />
}

export default PrivateRoute;
