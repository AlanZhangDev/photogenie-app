import { createSlice } from "@reduxjs/toolkit";
import { deleteFilmAsync, getFilmsAsync, postFilmAsync } from "./filmsThunk";

const initialState = {
    films: [],
    amount: 0,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFilmsAsync.fulfilled, (state, action) => {
                state.films = action.payload
                state.amount = action.payload.length
            })
        builder
            .addCase(postFilmAsync.fulfilled, (state, action) => {
                state.films = [...state.films, action.payload]
                state.amount += 1
            })
        builder
            .addCase(deleteFilmAsync.fulfilled, (state, action) => {
                state.films = state.films.filter((film) => {
                    return film.id !== action.payload.id
                })
                state.amount -= 1
            })
    }
});

export const { addFilm, deleteAll, deleteFilm } = filmsSlice.actions;
export default filmsSlice.reducer;