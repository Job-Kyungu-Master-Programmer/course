const  mongoose = require("mongoose")

if(process.argv.length <3) {
    console.log('Your Password')
    process.exit(1)
}

const url = `mongodb+srv://joblodo97:jeancyy@cluster0.xgmh1bb.mongodb.net/?retryWrites=true&w=majority`
const password = process.argv[2]

mongoose.set('strictQuery', false)
mongoose.connect(url)

const courseSchema = new mongoose.Schema({
    title: String,
    important: Boolean
})

const Cours = new mongoose.model('Cours', courseSchema)

const course = new Cours({
    title : 'Cours de sociologie',
    important: true
})

course.save().then(result => {
    console.log('You connecting ')
    mongoose.connection.close()
})