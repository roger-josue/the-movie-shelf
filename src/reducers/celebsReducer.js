import { types } from "../types/types";

const initialState = {
    popularCelebrities: []
}

export const celebsReducer = ( state= initialState, action)=> {
    switch (action.type) {
        case types.celebsFetchPopular:
            return {
                ...state,
                popularCelebrities: action.payload
            }

        default:
            return state;
    }


}