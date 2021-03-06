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

export const startfetchNextPopularTvShowsPage = () => {
    return async(dispatch, getState)=> {
        
        dispatch( nextPopularTvShowsPage() );

        const { popularShowsPage } = getState().tv;

        const popularShows = await getPopularOnTv( popularShowsPage );

        dispatch( fetchNextPopularTvShowsPage( popularShows ) );
    }
}

const nextPopularTvShowsPage = () => ({
    type: types.tvNextPopularPage
});

const fetchNextPopularTvShowsPage = ( shows ) => ({
    type: types.tvFetchNextPopularPage,
    payload: [...shows]
});