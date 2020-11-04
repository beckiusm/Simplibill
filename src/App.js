import React from 'react';

import Login from "./pages/Login";
import Narbar from './components/Navbar'
import TokenProvider from "./contexts/TokenContext";
import {Switch, Route} from "react-router-dom";

function App() {

    return (
        <div className='container'>
            <TokenProvider>
                <Narbar />
                <Switch>
                    <Route path='/home'>
                        <h1>Home</h1>
                    </Route>
                    <Route path='/customers/:id'>
                    </Route>
                    <Route path='/customers'>
                    </Route>
                    <Route path='/' component={Login}/>
                </Switch>
            </TokenProvider>
        </div>
    );
}

export default App;
