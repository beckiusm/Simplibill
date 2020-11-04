import React, {Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";

function App() {
  return (
    <div className='container-fluid'>
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
    </div>
  );
}

export default App;
