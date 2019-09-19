//set up
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//enviroment file, variable
require('dotenv').config();

const app =express();
const port = process.env.PORT || 3000;
//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb connection establised successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//start server
app.listen(port, () => {
    console.log('Server is ruuning on port: ${port}');
});