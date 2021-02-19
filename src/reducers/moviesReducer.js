import { types } from "../types/types";

const initialState = {
    popular: [],
    onTheaters: [],

}

export const moviesReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.moviesFetchPopular:
            return {
                ...state,
                popular: action.payload
            }
        case types.moviesFetchOnTheaters:
            return {
                ...state,
                onTheaters: action.payload
            }

        default:
            return state;
    }


}