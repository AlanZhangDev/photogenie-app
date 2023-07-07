const express = require('express')
const { getFilms, makeFilm, deleteFilm, updateFilm } = require('../controller/filmController')
const router = express.Router()

router.route('/').get(getFilms).post(makeFilm).delete(deleteFilm).patch(updateFilm)

module.exports = router