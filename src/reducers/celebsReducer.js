import { types } from "../types/types";

const initialState = {
    popularCelebrities: [],
    popularCelebsPage: 1
}

export const celebsReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.celebsFetchPopular:
            return {
                ...state,
                popularCelebrities: action.payload
            }
        case types.celebsNextPopularPage:
            return {
                ...state,
                popularCelebsPage: state.popularCelebsPage + 1 
            }
        case types.celebsFetchNextPopularPage:
            return {
                ...state,
                popularCelebrities: [...state.popularCelebrities, ...action.payload]
            }

        default:
            return state;
    }


}