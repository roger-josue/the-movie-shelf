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

export const startfetchNextPopularCelebsPage = () => {
    return async(dispatch, getState)=> {
        
        dispatch( nextPopularCelebsPage() );

        const { popularCelebsPage } = getState().celebs;

        const popularCelebs = await getPopularCelebs( popularCelebsPage );

        dispatch( fetchNextPopularCelebsPage( popularCelebs ) );
    }
}

const nextPopularCelebsPage = () => ({
    type: types.celebsNextPopularPage
});

const fetchNextPopularCelebsPage = ( celebs ) => ({
    type: types.celebsFetchNextPopularPage,
    payload: [...celebs]
});