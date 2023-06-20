const express = require('express')
const app = express()
const cors = require('cors')
let { films } = require('./films')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const filmsBasicInfo = films.map((film) => {
        const { id, name, year, cost, image, description } = film
        return { id, name, year, cost, image, description }
    })

    res.json(filmsBasicInfo)
})

app.post('/', (req, res) => {
    // change so we are not returning whole list on a post
    newFilms = [...films, req.body]
    films = newFilms
    res.json(req.body)
})

app.delete('/', (req, res) => {
    const { id } = req.body
    const retFilm = films.find((film) => {
        return film.id === id
    })

    films = films.filter((film) => {
        return film.id !== id
    })

    res.json(retFilm)
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})