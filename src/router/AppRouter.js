import React, { useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar } from "../Components/ui/Navbar";
import { HomeScreen } from "../Components/screens/HomeScreen";
import { MovieScreen } from "../Components/screens/MovieScreen";
import { MoviesScreen } from "../Components/screens/MoviesScreen";
import { TvShowScreen } from "../Components/screens/TvShowScreen";
import { TvShowsScreen } from "../Components/screens/TvShowsScreen";
import { CelebScreen } from "../Components/screens/CelebScreen";
import { CelebsScreen } from "../Components/screens/CelebsScreen";
import { SearchScreen } from "../Components/screens/SearchScreen";

import {  useDispatch } from "react-redux"; 
import { startfetchOnTheatersMovies, startfetchPopularMovies } from "../actions/movies";
import { startfetchPopularTvShows } from "../actions/tv";
import { startfetchPopularCelebs } from "../actions/celebs";

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch( startfetchPopularMovies() );
        dispatch( startfetchOnTheatersMovies() );
        dispatch( startfetchPopularTvShows() );
        dispatch( startfetchPopularCelebs() );
        
    }, [dispatch]);
    
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/search/:query" component={ SearchScreen } />
                    <Route exact path="/movies/:id" component={ MovieScreen } />
                    <Route exact path="/movies" component={ MoviesScreen } />
                    <Route exact path="/tvshows/:id" component={ TvShowScreen } />
                    <Route exact path="/tvshows" component={ TvShowsScreen } />
                    <Route exact path="/celebs/:id" component={ CelebScreen } />
                    <Route exact path="/celebs" component={ CelebsScreen } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}


