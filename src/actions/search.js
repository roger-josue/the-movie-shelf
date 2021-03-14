import {  multiSearch } from "../helpers/theMovieDB"
import { types } from "../types/types";


export const startfetchSearch = ( query ) => {
    return async(dispatch)=> {
        
        const results = await multiSearch( query );

        dispatch( fetchSearch( results ) );
    }
}

const fetchSearch = ( results ) => ({
    type: types.searchFetchSearch,
    payload: [...results]
});