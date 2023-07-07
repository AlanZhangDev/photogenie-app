const Film = require('../model/Film')

const getFilms = async (req, res) => {
    const films = await Film.find()
    res.json(films)
}

const makeFilm = async (req, res) => {
    const film = req.body
    const result = await Film.create(film)
    console.log(result)
    res.json(result)
}

const deleteFilm = async (req, res) => {
    const { _id } = req.body
    console.log(_id)
    await Film.deleteOne({ _id: _id })
    res.json(_id)
}

const updateFilm = async (req, res) => {
    const { _id } = req.body
    const film = await Film.findOne({ _id: _id }).exec()
    film.cost = 0.00
    const result = await film.save()
    res.json(result)
}

module.exports = { getFilms, makeFilm, deleteFilm, updateFilm }