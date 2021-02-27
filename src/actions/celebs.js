import { getPopularCelebs } from "../helpers/theMovieDB";
import { types } from "../types/types";


export const startfetchPopularCelebs = () => {
    return async(dispatch)=> {
        
        const popularCelebs = await getPopularCelebs();

        dispatch( fetchPopularCelebs( popularCelebs ) );
    }
}

const fetchPopularCelebs = ( celebs ) => ({
    type: types.celebsFetchPopular,
    payload: [...celebs]
});