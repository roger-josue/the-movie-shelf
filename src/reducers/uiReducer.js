import { types } from "../types/types";

const initialState = {
    loading: false,
    firstLoginRender: true
}

export const uiReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
        return {
            ...state,
            loading: false
        }

        case types.uiFinishFirstLoginRender:
        return {
            ...state,
            firstLoginRender: false
        }
    
        default:
            return state;
    }
}