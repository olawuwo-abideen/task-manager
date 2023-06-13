require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks')
const app = express();


app.use(express.json())


app.get('/hello', (req, res) => {
    res.send('Welcome to My Tasks Manager')
})


app.use('/api/v1/tasks', tasks)









app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})