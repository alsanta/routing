import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hi</h1>
      </div>
      <Switch>
        <Route exact path ="/home">
          <h1>Welcome!</h1>
        </Route>
        <Route exact path ="/:id">
          <Test></Test>
        </Route>
        <Route exact path ="/:id/:font/:bg">
          <Test></Test>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
