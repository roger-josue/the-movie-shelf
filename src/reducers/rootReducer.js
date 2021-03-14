import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { tvReducer } from "./tvReducer";
import { celebsReducer } from "./celebsReducer";
import { searchReducer } from "./searchReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    movies: moviesReducer,
    tv: tvReducer,
    celebs: celebsReducer,
    search: searchReducer,
    ui: uiReducer
});