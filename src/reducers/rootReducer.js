import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { tvReducer } from "./tvReducer";
import { celebsReducer } from "./celebsReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    tv: tvReducer,
    celebs: celebsReducer,
    ui: uiReducer
});