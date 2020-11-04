import React from 'react';
import Login from "./pages/Login";
import StorageProvider from "./contexts/StorageContext";
import Narbar from './components/Navbar'
import {Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import DetailCustomer from "./pages/DetailCustomer";

function App() {
    return (
        <div className='container'>
            <StorageProvider>
                <Narbar />
                <Switch>
                    <PrivateRoute path='/home' component={Home}/>
                    <PrivateRoute path='/customer/:id' component={DetailCustomer}/>
                    <Route path='/' component={Login}/>
                </Switch>
            </StorageProvider>
        </div>
    );
}

export default App;
