import React, {Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";
import {TokenContext} from "./contexts/TokenContext";

function App() {
  return (
    <div className='container-fluid'>
      <TokenContext>
        <Switch>
          <Route path='/'>
            <Login/>
          </Route>
          <Route path='/home'>

          </Route>
          <Route path='/customers'>

          </Route>
          <Route path='/customers/:id'>

          </Route>
        </Switch>
      </TokenContext>
    </div>
  );
}

export default App;
