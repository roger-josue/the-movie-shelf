import { types } from "../types/types";

const initialState = {
    popular: [],
    popularPage: 1,
    onTheaters: [],
    selectedMovie: null, 
}

export const moviesReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.moviesFetchPopular:
            return {
                ...state,
                popular: action.payload
            }
        case types.moviesNextPopularPage:
            return {
                ...state,
                popularPage: state.popularPage + 1 
            }
        case types.moviesFetchNextPopularPage:
            return {
                ...state,
                popular: [...state.popular, ...action.payload]
            }
        case types.moviesFetchOnTheaters:
            return {
                ...state,
                onTheaters: action.payload
            }
        case types.moviesFetchMovieDetails:
            return {
                ...state,
                selectedMovie: action.payload
        }
        case types.moviesCleanUpSelectedMovie:
            return {
                ...state,
                selectedMovie: null
            }

        default:
            return state;
    }


}