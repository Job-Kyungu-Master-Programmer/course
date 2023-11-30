const express = require('express')
const app = express()
require('dotenv').config()
const Model = require('./Models/Model')
const cors = require('cors')
//MiddleWare 
app.use(express.json())
app.use(express.static('build'))
app.use(cors())



let courses = [
    {
        title: 'Developpement web',
        important: true,
        id: 1
    },
    {
        title: 'Cours Node js',
        important: true,
        id: 2
    },
    {
        title: 'La programmation Coloniale',
        important: true,
        id: 3
    },
]

const unknow = (request, response, next) => {
    response.status(404).send('Error 404 , PAGE NOT FOUND')
}

//Routes
app.get('/', (request, response) => {
     response.send('<h1>Application Node JS </h1>')
})

app.get('/api/courses', (request,response) => {
    Model.find({}).then(result => {
        response.json(result)
    })
})

app.get('/api/courses/:id', (request,response) => {
    Model.findById(request.params.id)
    .then(result => {
        response.json(result)
    })
})

app.delete('/api/courses/:id', (request,response) => {
    Model.findByIdAndDelete(request.params.id)
    .then(result => {
        response.json(result)
    })
})

app.put('/api/courses/:id', (request, response) => {
    const body = request.body

    const course = {
        title: body.title,
        important: body.important
    }
    Model.findByIdAndUpdate((request.params.id), course, {new : true})
    .then(result => {
        response.json(result)
    })
})


app.use(unknow)
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
     console.log(` Server running on PORT ${PORT}`)
})