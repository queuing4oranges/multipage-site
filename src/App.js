import './App.css'; 
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//page components:
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>

        {/* using exact, so / isnt included into /about etc. */}
        <NavLink exact to="/">Home</NavLink> 
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>

      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route>
          <Contact exact path="/contact"/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
