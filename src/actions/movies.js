import { getPopularMovies } from "../helpers/theMovieDB"
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
})