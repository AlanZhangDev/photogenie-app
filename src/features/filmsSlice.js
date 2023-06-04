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
        },
        deleteAll: (state) => {
            state.films = []
        },
        deleteFilm: (state, { payload }) => {
            const array = state.films.filter(film => film.name !== payload);
            state.films = array;
        }
    }
});

export const { addFilm, deleteAll, deleteFilm } = filmsSlice.actions;
export default filmsSlice.reducer;