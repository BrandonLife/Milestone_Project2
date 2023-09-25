const methodOverride = require('method-override')
require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//routes
// app.use('/breads', breadController)
// app.use('/bakers', bakerController)
// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const movieController = require('./controllers/movie.js')
const reviewController = require('./controllers/review.js')
app.use('/movies', movieController)
app.use('/reviews', reviewController)

const PORT= process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))


