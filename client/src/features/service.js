const getFilms = async() => {
    const res = await fetch('https://photogenie.onrender.com/', {
        method: 'GET'
    })
    return res.json()
}

const postFilm = async(data) => {
    const res = await fetch('https://photogenie.onrender.com/', {
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
    const res = await fetch('https://photogenie.onrender.com/', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "_id": _id })
    })
    return res.json()
}

const getSortFilms = async(sortType) => {
    const res = await fetch('https://photogenie.onrender.com/?sort=' + sortType, {
        method: 'GET'
    })
    return res.json()
}

const getFilterFilms = async(filterType) => {
    const res = await fetch('https://photogenie.onrender.com/?filter=' + filterType, {
        method: 'GET'
    })
    return res.json()
}

const patchFilmPrice = async(_id) => {
    const res = await fetch('https://photogenie.onrender.com/', {
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