import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./features/filmsSlice";

export const store = configureStore({
    reducer: {
        films: filmsReducer,
    },
});