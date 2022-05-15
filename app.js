const express = require('express')
//const { route } = require('./routes/tasks')
const app = express()
const tasks = require('./routes/tasks')
const connectDB =  require('./database/connect')
require('dotenv').config()
const notFound = require('./middlerware/not-found')
const errorHandlerMiddleware = require('./middlerware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json())
//app.use(errorHandlerMiddleware)

//routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log('Server is running ....'))
    }catch (error) {
        console.log(error)
    }
}

start()




