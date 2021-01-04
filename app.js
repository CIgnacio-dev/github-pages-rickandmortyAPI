require('rootpath')();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const jwt = require('./src/jwt');
// Initialize the app
const app = express();

// Middlewares
app.use(jwt());
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());



// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy


// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// app.get('/', (req, res) => {
//     return res.send("<h1>Hello World</h1>");
// });
// Bring in the Users route
const users = require('./routes/api/users');
app.use('./routes/api/users', users);




const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});