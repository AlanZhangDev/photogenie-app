require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const db = require('./config/dbConfig')
const filmsRouter = require('./routes/films')

// connect to mongoDB
db()

app.use(cors())
app.use(express.json())

app.use('/', filmsRouter)

mongoose.connection.once('open', () => {
    console.log("Successfully connected to MongoDB")
    app.listen(5000, () => {
        console.log("Server is listening on port 5000...")
    })
})