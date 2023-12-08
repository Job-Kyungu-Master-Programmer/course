const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: String,
    important : Boolean
})

courseSchema.set('toJSON', {
    transform : (document, object) => {
    object.id = object._id.toString()
    delete object._id
    delete object.__v
   }
})

module.exports = mongoose.model('Cours', courseSchema)
