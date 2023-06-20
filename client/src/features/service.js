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

const deleteFilm = async(id) => {
    const res = await fetch('http://localhost:5000/', {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "id": id })
    })
    return res.json()
}

export default  { getFilms, postFilm, deleteFilm }