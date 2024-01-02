const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/routes')


require('dotenv').config()

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


let app = express()
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors(corsOptions))
app.use(router)


let PORT = process.env.PORT || 6000
const Base_Uri = process.env.MONGO_URL


mongoose.connect(Base_Uri).then((success) => {
    console.log("MongoDb connected")
}).catch((error) => {
    console.log(error)
})

app.listen(PORT, () => console.log(`App running on localhost:${PORT}`))
