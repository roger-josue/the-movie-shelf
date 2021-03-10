import { getMovieDetails, getOnTheatersMovies, getPopularMovies } from "../helpers/theMovieDB"
import { types } from "../types/types";


export const startfetchPopularMovies = () => {
    return async(dispatch)=> {
        
        const popularMovies = await getPopularMovies();

        dispatch( fetchPopularMovies( popularMovies ) );
    }
}

const fetchPopularMovies = ( movies ) => ({
    type: types.moviesFetchPopular,
    payload: [...movies]
});

export const startfetchNextPopularPage = () => {
    return async(dispatch, getState)=> {
        
        dispatch( nextPopularPage() );

        const { popularPage } = getState().movies;

        const popularMovies = await getPopularMovies( popularPage );

        dispatch( fetchNextPopularPage( popularMovies ) );
    }
}

const nextPopularPage = () => ({
    type: types.moviesNextPopularPage
});

const fetchNextPopularPage = ( movies ) => ({
    type: types.moviesFetchNextPopularPage,
    payload: [...movies]
});

export const startfetchOnTheatersMovies = () => {
    return async(dispatch)=> {
        
        const OnTheatersMovies = await getOnTheatersMovies();

        dispatch( fetchOnTheatersMovies( OnTheatersMovies ) );
    }
}

const fetchOnTheatersMovies = ( movies ) => ({
    type: types.moviesFetchOnTheaters,
    payload: [...movies]
});

export const startfetchMovieDetails = ( id ) => {
    return async(dispatch)=> {
        
        const movie = await getMovieDetails(id);

        dispatch( fetchMovieDetails( movie ) );
    }
}

const fetchMovieDetails = ( movie ) => ({
    type: types.moviesFetchMovieDetails,
    payload: {...movie}
});

export const cleanUpSelectedMovie = ( ) => ({
    type: types.moviesCleanUpSelectedMovie
});

