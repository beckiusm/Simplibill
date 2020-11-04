import React, {Switch, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Narbar from './components/Navbar'

function App() {
  return (
    <div className='container-fluid'>
      <Narbar />
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
