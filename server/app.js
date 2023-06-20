const express = require('express')
const app = express()
const cors = require('cors')
let { films } = require('./films')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const { sort } = req.query
    const filmsBasicInfo = films.map((film) => {
        const { id, name, year, cost, image, description } = film
        return { id, name, year, cost, image, description }
    })

    if (sort === "title-ascending") {
        filmsBasicInfo.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "title-descending") {
        filmsBasicInfo.sort((a, b) => a.name.localeCompare(b.name))
        filmsBasicInfo.reverse()
    } else if (sort === "price-ascending") {
        filmsBasicInfo.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
    } else if (sort === "price-descending") {
        filmsBasicInfo.sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
    } else {

    }

    res.json(filmsBasicInfo)
})

app.post('/', (req, res) => {
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

app.patch('/', (req, res) => {
    const { id } = req.body
    const retFilm = films.find((film) => {
        return film.id === id
    })
    retFilm.cost = 0.00
    
    films.forEach((film) => {
        if (film.id === id) {
            film.cost = 0.00
        }
    })
    
    res.json(retFilm)
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})