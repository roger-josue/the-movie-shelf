// import { types } from "../types/types";

const initialState = [
//     {
//     title: '',
//     id: null,
//     overview: '',
//     backdrop_path: '',
//     poster_path: '',
//     genres: [],
//     release_date: '',
//     vote_average: ''
// }
]

export const moviesReducer = ( state= initialState, action)=> {
    switch (action.type) {
        // case types.login:
        //     return {
        //         uid: action.payload.uid,
        //         name: action.payload.displayName,
        //     }

        default:
            return state;
    }


}