import { createAsyncThunk } from "@reduxjs/toolkit";
import FilmService from './service'

export const getFilmsAsync = createAsyncThunk(
    'GET_FILMS',
    async () => {
        return await FilmService.getFilms()
    }
)

export const postFilmAsync = createAsyncThunk(
    'POST_FILM',
    async (film) => {
        return await FilmService.postFilm(film)
    }
)

export const deleteFilmAsync = createAsyncThunk(
    'DELETE_FILM',
    async (id) => {
        return await FilmService.deleteFilm(id)
    }
)