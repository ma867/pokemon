require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })

app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/pokemons', require('./controllers/routeController'))



app.listen(3003, ()=>{
    console.log("listening on port 3003")
})