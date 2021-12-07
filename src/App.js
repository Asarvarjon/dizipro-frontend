import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() { 
  return  <BrowserRouter>
        <Switch>
             <Route path="/login" component={Login} exact />
             <Route path="/registration" component={Registration} exact />

        </Switch>
  </BrowserRouter>
}

export default App;
