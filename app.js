require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const helmet = require("helmet")




// Use Helmet!


const app = express();
app.use(express.json())

 
app.get('/', (req, res) => {
    res.send('Welcome to My Tasks Manager Api')
})

app.use(helmet());
app.use(cookieParser())
app.use(notFound)
app.use(errorHandlerMiddleware)   
app.use('/api/v1/tasks', tasks)


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 

})

app.use(limiter)


const port = process.env.PORT || 3000;

 
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server Started on port ${port}`)})
    } catch(error) {
        console.log(error)
    }
}

start()
