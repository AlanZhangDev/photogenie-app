const { app, server} = require('../app.js')
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('mongoose')

beforeAll(done => {
    done()
})

afterAll(done => {
    mongoose.connection.close()
    server.close()
    done()
})

describe('POST tests', () => {
    it('should add to the inital list of films from GET after a POST', async () => {
        // get initial films in db
        const initialState = await request.get('/')
        expect(initialState.status).toBe(200)

        // insert new film in db
        await request.post('/').send({
            name: "Test Film Title",
            year: 2002,
            cost: 0.99,
            image: "https://www.themoviedb.org/t/p/w1280/5vO7R4xYlDipTp8gzfRbWegO8eb.jpg",
            description: "Test Description"
        })
    
        // get films in db again to see new film inserted
        const res = await request.get('/')
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(initialState.body.length + 1)
    
        // delete the film inserted to reset db
        const res2 = await request.delete('/').send({
            _id: res.body.at(-1)._id
        })
        expect(res2.status).toBe(200)
        expect(res2.body).toBe(res.body.at(-1)._id)
    
        // get all the films again to confirm db is reset
        const res3 = await request.get('/')
        expect(res3.status).toBe(200)
        expect(res3.body).toHaveLength(initialState.body.length)
    })
})
