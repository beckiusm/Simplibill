import React, {Switch, Route, useContext} from 'react';
import Login from "./pages/Login";
import TokenProvider, {TokenContext} from "./contexts/TokenContext";
import {Redirect} from "react-router-dom";

function App() {

  return (
    <div className='container'>
      <TokenProvider>
        <Switch>
          <Route path='/'>
            {token ? <Redirect to='home'/> : <Login/>}
          </Route>
          <Route path='/home'>
              <h1>Home</h1>
          </Route>
          <Route path='/customers'>

          </Route>
          <Route path='/customers/:id'>

          </Route>
        </Switch>
      </TokenProvider>
    </div>
  );
}

export default App;
