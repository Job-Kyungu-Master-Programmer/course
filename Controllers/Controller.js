//COntrollers 


const dataRouter = require('express').Router()
const Model = require('../Models/Model')

dataRouter.get('/', (request,response) => {
   Model.find({}).then(result => {
       response.json(result)
   })
})

dataRouter.get('/:id', (request,response) => {
   Model.findById(request.params.id)
   .then(result => {
       response.json(result)
   })
})

dataRouter.delete('/:id', (request,response) => {
   Model.findByIdAndDelete(request.params.id)
   .then(result => {
       response.json(result)
   })
})

dataRouter.put('/:id', (request, response) => {
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

const generateId = () => {
   const max = courses.length > 0 ?
   Math.random(...courses.map(c => c.id)) : 0 
   return max + 1
}

dataRouter.post('/', (request,response) => {
   const body = request.body
   const infos = new Model({
       title: body.title,
       important: body.important || false,
    //    id: generateId()
   })

   infos.save().then(savedInfos => {
       response.json(savedInfos)
   })
})


module.exports = dataRouter