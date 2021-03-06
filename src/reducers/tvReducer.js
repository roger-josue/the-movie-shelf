import { types } from "../types/types";

const initialState = {
    popularShows: [],
    popularShowsPage: 1
}

export const tvReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.tvFetchPopularTvShows:
            return {
                ...state,
                popularShows: action.payload
            }
        case types.tvNextPopularPage:
            return {
                ...state,
                popularShowsPage: state.popularShowsPage + 1 
            }
        case types.tvFetchNextPopularPage:
            return {
                ...state,
                popularShows: [...state.popularShows, ...action.payload]
            }

        default:
            return state;
    }


}