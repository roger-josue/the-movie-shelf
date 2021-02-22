import { getPopularOnTv } from "../helpers/theMovieDB";
import { types } from "../types/types";


export const startfetchPopularTvShows = () => {
    return async(dispatch)=> {
        
        const popularShows = await getPopularOnTv();

        dispatch( fetchPopularTvShows( popularShows ) );
    }
}

const fetchPopularTvShows = ( shows ) => ({
    type: types.tvFetchPopularTvShows,
    payload: [...shows]
});