import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Movies from "./pages/movies";
import NotFound from "./pages/not-found";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/movies">Movies</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies" component={Movies} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
