const getFilms = async() => {
    const res = await fetch('http://localhost:5000/', {
        method: 'GET'
    })
    return res.json()
}

const postFilm = async(data) => {
    const res = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    return res.json()
}

const deleteFilm = async(_id) => {
    console.log(_id)
    const res = await fetch('http://localhost:5000/', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "_id": _id })
    })
    return res.json()
}

const getSortFilms = async(sortType) => {
    const res = await fetch('http://localhost:5000/?sort=' + sortType, {
        method: 'GET'
    })
    return res.json()
}

const getFilterFilms = async(filterType) => {
    const res = await fetch('http://localhost:5000/?filter=' + filterType, {
        method: 'GET'
    })
    return res.json()
}

const patchFilmPrice = async(_id) => {
    const res = await fetch('http://localhost:5000/', {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "_id": _id })
    })
    return res.json()
}

const FilmService = {
    getFilms, postFilm, deleteFilm, getSortFilms, patchFilmPrice, getFilterFilms
}

export default FilmService