import { types } from "../types/types";

const initialState = {
    popularCelebrities: [],
    popularCelebsPage: 1,
    selectedCelebrity: null
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
        case types.celebFetchCelebDetails:
            return {
                ...state,
                selectedCelebrity: action.payload
        }
        case types.celebCleanUpSelectedCeleb:
            return {
                ...state,
                selectedCelebrity: null
        }

        default:
            return state;
    }


}