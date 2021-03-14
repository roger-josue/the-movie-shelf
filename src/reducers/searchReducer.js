import { types } from "../types/types";

const initialState = {
    searchResult: []
}

export const searchReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.searchFetchSearch:
            return {
                ...state,
                searchResult: action.payload
            }

        default:
            return state;
    }


}