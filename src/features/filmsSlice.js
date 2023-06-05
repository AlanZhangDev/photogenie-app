import { createSlice } from "@reduxjs/toolkit";
import films from "../data/films";

const initialState = {
    films: films,
    amount: 12,
    isLoading: true,
};

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state, { payload }) => {
            state.films = [...state.films, payload]
            state.amount += 1
        },
        deleteAll: (state) => {
            state.films = []
            state.amount = 0;
        },
        deleteFilm: (state, { payload }) => {
            const array = state.films.filter(film => film.name !== payload);
            state.films = array;
            state.amount -= 1;
        }
    }
});

export const { addFilm, deleteAll, deleteFilm } = filmsSlice.actions;
export default filmsSlice.reducer;