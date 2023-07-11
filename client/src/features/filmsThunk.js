// filmsThunk and filmsSlice functionality adapted from express.js lecture
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
    async (_id) => {
        return await FilmService.deleteFilm(_id)
    }
)

export const getFilmsSortedAsync = createAsyncThunk(
    'GET_SORTED_FILMS',
    async (sortType) => {
        return await FilmService.getSortFilms(sortType)
    }
)

export const getFilmsFilteredAsync = createAsyncThunk(
    'GET_FILTERED_FILMS',
    async (filterType) => {
        return await FilmService.getFilterFilms(filterType)
    }
)

export const patchFilmPriceAsync = createAsyncThunk(
    'PUT_FILM_PRICE',
    async (_id) => {
        return await FilmService.patchFilmPrice(_id)
    }
)