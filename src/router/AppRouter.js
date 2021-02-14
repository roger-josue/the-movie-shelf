import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "../Components/ui/Navbar";
import { HomeScreen } from "../Components/screens/HomeScreen";
import { MoviesScreen } from "../Components/screens/MoviesScreen";
import { TvShowsScreen } from "../Components/screens/TvShowsScreen";
import { CelebsScreen } from "../Components/screens/CelebsScreen";
import { MovieScreen } from "../Components/screens/MovieScreen";
import { CelebScreen } from "../Components/screens/CelebScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/movies/:id" component={ MovieScreen } />
                    <Route exact path="/movies" component={ MoviesScreen } />
                    <Route exact path="/tvshows/:id" component={ TvShowsScreen } />
                    <Route exact path="/tvshows" component={ TvShowsScreen } />
                    <Route exact path="/celebs/:id" component={ CelebScreen } />
                    <Route exact path="/celebs" component={ CelebsScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}


