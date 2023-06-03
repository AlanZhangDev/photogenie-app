import { createSlice } from "@reduxjs/toolkit";
import films from "../data/films";

const initialState = {
    films: films,
    amount: 0,
    isLoading: true,
};

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state, { payload }) => {
            state.films = [...state.films, payload]
        }
    }
});

export const { addFilm } = filmsSlice.actions;
export default filmsSlice.reducer;