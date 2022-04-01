import React from "react"
import './App.css';
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Movies from "./Movies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Row/:id">
            <Details />
          </Route>
        </Switch>
        <Movies />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchOriginalnetflix} islargRow />
        <Row title="TOP TRENDING" fetchUrl={requests.fetchtrendingmovies} />
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARY MOVIES" fetchUrl={requests.fetchDocumanteMovies} />
      </div>
    </Router>
  );
}

export default App;