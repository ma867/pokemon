const mongoose = require('mongoose')
const Log = require('./models/pokemon')
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true, useUnifiedTopology: true})
mongoose.connection.once('open',  ()=>{
  console.log("connected to mongo db atlas")
})

const seed = [
{

    name: "Squirtle",
    category: "water",
    image: "https://i.imgur.com/if383Yk.gif"

},

{

    name: "Baulbasaur",
    category: "poison",
    image: "https://i.imgur.com/RTmXr3Q.gif"
},

{
    name: "Pikachu",
    category: "electric",
    image: "https://i.imgur.com/ZFnOXDn.gif"

},

]

const seedDatabase = async () => {
    await Log.insertMany(seed)
}

seedDatabase().then(() => {
    mongoose.connection.close()
})