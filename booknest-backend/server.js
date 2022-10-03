
const connection = require('./connection');
const express = require('express');
const cors = require('cors'); //cors allows other domains to make requests on API
const mongoose = require('mongoose')
const auth = require("./middleware/auth")
const userRouter=require(".//routes/userRoute")




require('dotenv').config();

// create express server
const app = express();
const port = process.env.PORT || 5000 || 3001;

// middleware
app.use(cors());
app.use(express.json());


// require router path for server
const MyBookRouter = require('../booknest-backend/routes/myBooksRoute');
const ReviewRouter = require("./routes/api/reviewRoute")

app.get("/welcome", auth, (req, res) => {
    res.status(200).send("welcome");
})
// use the files when requested
app.use('/', MyBookRouter);
app.use('/', ReviewRouter);
app.use('/', userRouter)


// start server
app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
});
