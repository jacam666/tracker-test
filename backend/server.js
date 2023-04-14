const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRoute = require('../src/login');

const app = express();
const PORT = 3001;

const uri = 'mongodb+srv://jamie666cameron:JgPeQNDLPzdyHget@cluster0.vuyni2b.mongodb.net/fitnessTracker?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use('/login', loginRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

