const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


const auth = require('./routes/auth');
const post = require('./routes/post');
const user = require('./routes/user');
const databaseConnection = require('./dataBase');

const PORT = 5000;
databaseConnection();

app.get('/test', (req, res) => {
    res.send('this is test route');
})

app.use('/', auth);
app.use('/', post);
app.use('/', user);

app.listen(PORT, () => {
    console.log(`port running on ${PORT}`);
})