import { types } from "../types/types";

const initialState = {
    popularShows: []
}

export const tvReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.tvFetchPopularTvShows:
            return {
                ...state,
                popularShows: action.payload
            }

        default:
            return state;
    }


}