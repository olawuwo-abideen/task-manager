require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const app = express();


app.use(express.json())


app.get('/hello', (req, res) => {
    res.send('Welcome to My Tasks Manager')
})

  
app.use('/api/v1/tasks', tasks)





 
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(3000, () => {
            console.log(`Server Started at ${3000}`)})
    } catch(error) {
        console.log(error)
    }
}

start()
