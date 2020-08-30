import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import Customers from "./components/customers";
import LoginForm from "./components/loginForm";
import MoviesForm from "./components/movieForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={MoviesForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
