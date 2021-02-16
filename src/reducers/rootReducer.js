import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    ui: uiReducer
});