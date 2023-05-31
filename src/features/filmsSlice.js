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
});

export default filmsSlice.reducer;